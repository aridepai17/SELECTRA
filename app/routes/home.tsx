import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Helper Interface
type ResumeWithPreview = Resume & { previewUrl?: string };

interface KVItem {
	key: string;
	value: string | object;
}

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Selectra" },
		{ name: "description", content: "Smart feedback for your dream job!" },
	];
}

export default function Home() {
	const { auth, kv, fs } = usePuterStore(); // Added 'fs' here
	const navigate = useNavigate();
	const [resumes, setResumes] = useState<ResumeWithPreview[]>([]);
	const [loadingResumes, setLoadingResumes] = useState(true);

	useEffect(() => {
		if (!auth.isAuthenticated) navigate("/auth?next=/");
	}, [auth.isAuthenticated, navigate]);

	useEffect(() => {
		const loadResumes = async () => {
			setLoadingResumes(true);
			try {
				// 1. Fetch EVERYTHING (Since this successfully found your data)
				const allData = (await kv.list("", true)) as KVItem[];

				// 2. Filter for keys starting with "resume"
				const validItems = allData.filter((item) =>
					item.key.startsWith("resume")
				);

				// 3. Parse and Regenerate Images
				const loadedResumes = await Promise.all(
					validItems.map(async (item) => {
						try {
							// Parse data
							let data =
								typeof item.value === "object"
									? (item.value as ResumeWithPreview)
									: (JSON.parse(
											item.value as string
										) as ResumeWithPreview);

							// FIX: Regenerate the Image URL from the file system
							// The saved 'previewUrl' is dead (Blob), so we make a new one.
							if (data.imagePath) {
								try {
									const fileBlob = await fs.read(
										data.imagePath
									);
									if (fileBlob) {
										// Create a FRESH url for this session
										const freshUrl =
											URL.createObjectURL(fileBlob);
										data = {
											...data,
											previewUrl: freshUrl,
										};
									}
								} catch (err) {
									console.warn(
										"Could not load image for",
										data.companyName
									);
								}
							}

							return data;
						} catch (e) {
							return null;
						}
					})
				);

				// Filter out nulls
				setResumes(
					loadedResumes.filter(
						(r): r is ResumeWithPreview => r !== null
					)
				);
			} catch (error) {
				console.error("Error loading homepage:", error);
			} finally {
				setLoadingResumes(false);
			}
		};

		loadResumes();
	}, [kv, fs]);

	return (
		<main className="bg-[url('/images/bg-main.svg')] bg-cover min-h-screen">
			<Navbar />

			<section className="main-section">
				<div className="page-heading py-16 text-center">
					<h1 className="text-4xl font-bold mb-4">
						Track Your Applications & Resume Ratings
					</h1>

					{!loadingResumes && resumes.length === 0 ? (
						<h2 className="text-xl text-gray-600">
							No resumes found. Upload your first resume to get
							feedback.
						</h2>
					) : (
						<h2 className="text-xl text-gray-600">
							Review your submissions and check AI-powered
							feedback.
						</h2>
					)}
				</div>

				{loadingResumes && (
					<div className="flex flex-col items-center justify-center py-10">
						<img
							src="/images/resume-scan-2.gif"
							className="w-[200px]"
							alt="Loading..."
						/>
					</div>
				)}

				{!loadingResumes && resumes.length > 0 && (
					<div className="resumes-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
						{resumes.map((resume) => (
							<ResumeCard key={resume.id} resume={resume} />
						))}
					</div>
				)}

				{!loadingResumes && resumes.length === 0 && (
					<div className="flex flex-col items-center justify-center mt-10 gap-4">
						<Link
							to="/upload"
							className="primary-button w-fit text-xl font-semibold px-8 py-3 bg-blue-600 text-white rounded-lg"
						>
							Upload Resume
						</Link>
					</div>
				)}
			</section>
		</main>
	);
}
