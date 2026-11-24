import { Link, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";
import Summary from "~/components/Summary";
import ATS from "~/components/ATS";
import Details from "~/components/Details";

export const meta = () => ([
	{ title: "Selectra | Review " },
	{ name: "description", content: "Detailed overview of your resume" },
]);

const Resume = () => {
	const { auth, isLoading, fs, kv } = usePuterStore();
	const { id } = useParams();
	const [imageUrl, setImageUrl] = useState("");
	const [resumeUrl, setResumeUrl] = useState("");
	const [feedback, setFeedback] = useState<Feedback | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoading && !auth.isAuthenticated)
			navigate(`/auth?next=/resume/${id}`);
	}, [isLoading]);

		useEffect(() => {
			const loadResume = async () => {
				const resume = await kv.get(`resume:${id}`);

				if (!resume) return;

				const data = JSON.parse(resume);

				// Feedback is already in KV — show it immediately while images load
				setFeedback(data.feedback);

				const [resumeResult, imageResult] = await Promise.allSettled([
					fs.read(data.resumePath),
					fs.read(data.imagePath),
				]);

				if (resumeResult.status === "fulfilled" && resumeResult.value) {
					const pdfBlob = new Blob([resumeResult.value], {
						type: "application/pdf",
					});
					setResumeUrl(URL.createObjectURL(pdfBlob));
				}

				if (imageResult.status === "fulfilled" && imageResult.value) {
					setImageUrl(URL.createObjectURL(imageResult.value));
				}

				console.log({
					resumeUrl: resumeUrl,
					imageUrl: imageUrl,
					feedback: data.feedback,
				});
			};

			loadResume();
		}, [id]);

	return (
		<main className="!pt-0">
			<nav className="resume-nav">
				<Link to="/" className="back-button">
					<img
						src="/icons/back.svg"
						alt="logo"
						className="w-2.5 h-2.5"
					/>
					<span className="text-gray-800 text-sm font-semibold">
						Back to Homepage
					</span>
				</Link>
			</nav>
			<div className="flex flex-row w-full max-lg:flex-col-reverse">
				<section className="feedback-section bg-[url('/images/bg-small.svg')] bg-cover h-[100vh] sticky top-0 items-center justify-center">
					{imageUrl && resumeUrl && (
							<div className="animate-in fade-in duration-1000 gradient-border max-sm:m-0 h-[90%] max-w-xl:h-fit max-w-[550px] w-full">
							<a
								href={resumeUrl}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={imageUrl}
									className="w-full h-full object-contain rounded-2xl"
									title="resume"
								/>
							</a>
						</div>
					)}
				</section>
				<section className="feedback-section">
					<h2 className="text-4xl !text-black font-bold">
						Resume Review
					</h2>
					{feedback ? (
						<div className="flex flex-col gap-8 animate-in fade-in duration-1000">
							<Summary feedback={feedback} />
							<ATS
								score={feedback.ATS.score || 0}
								suggestions={feedback.ATS.tips || []}
							/>
							<Details feedback={feedback} />
						</div>
					) : (
						<img
							src="/images/resume-scan-2.gif"
							className="w-full"
						/>
					)}
				</section>
			</div>
		</main>
	);
};
export default Resume;