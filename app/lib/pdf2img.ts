export interface PdfConversionResult {
	imageUrl: string;
	file: File | null;
	error?: string;
}

let pdfjsLib: any = null;
let isLoading = false;
let loadPromise: Promise<any> | null = null;

async function loadPdfJs(): Promise<any> {
	if (pdfjsLib) return pdfjsLib;
	if (loadPromise) return loadPromise;

	isLoading = true;

	// Use legacy build for better compatibility
	// @ts-expect-error - pdfjs-dist legacy build
	loadPromise = import("pdfjs-dist/legacy/build/pdf").then((lib) => {
		// Worker file must exist in /public
		lib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
		pdfjsLib = lib;
		isLoading = false;
		return lib;
	});

	return loadPromise;
}

export async function convertPdfToImage(
	file: File
): Promise<PdfConversionResult> {
	try {
		const lib = await loadPdfJs();

		const arrayBuffer = await file.arrayBuffer();
		const pdf = await lib.getDocument({ data: arrayBuffer }).promise;
		const page = await pdf.getPage(1);

		// Scale up for higher quality image
		const viewport = page.getViewport({ scale: 4 });

		const canvas = document.createElement("canvas");
		const context = canvas.getContext("2d");

		if (!context) {
			throw new Error("Could not get 2D canvas context");
		}

		canvas.width = viewport.width;
		canvas.height = viewport.height;

		context.imageSmoothingEnabled = true;
		context.imageSmoothingQuality = "high";

		await page.render({ canvasContext: context, viewport }).promise;

		return new Promise((resolve) => {
			canvas.toBlob(
				(blob) => {
					if (blob) {
						// Create a File from the blob with the same name as the PDF
						const originalName = file.name.replace(/\.pdf$/i, "");
						const imageFile = new File(
							[blob],
							`${originalName}.png`,
							{
								type: "image/png",
							}
						);

						resolve({
							imageUrl: URL.createObjectURL(blob),
							file: imageFile,
						});
					} else {
						resolve({
							imageUrl: "",
							file: null,
							error: "Failed to create image blob",
						});
					}
				},
				"image/png",
				1.0 // Max quality
			);
		});
	} catch (err) {
		console.error("convertPdfToImage error:", err);
		return {
			imageUrl: "",
			file: null,
			error: `Failed to convert PDF: ${(err as Error).message}`,
		};
	}
}
