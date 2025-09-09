import { Link } from "react-router";
import ScoreCircle from "~/components/ScoreCircle";
import { useEffect, useState } from "react";
import { usePuterStore } from "~/lib/puter";

const ResumeCard = ({
	resume: { id, companyName, jobTitle, feedback, imagePath, previewUrl },
}: {
	resume: Resume & { previewUrl?: string };
}) => {
	const { fs } = usePuterStore();
	const [displayUrl, setDisplayUrl] = useState<string | null>(
		previewUrl || null
	);

	useEffect(() => {
		if (displayUrl) return; 
		if (!imagePath) return;

		const loadImage = async () => {
			try {
				const blob = await fs.read(imagePath);
				if (blob) {
					const url = URL.createObjectURL(blob);
					setDisplayUrl(url);
				}
			} catch (err) {
				console.error("Failed to load resume image", err);
			}
		};

		loadImage();
	}, [imagePath, displayUrl, fs]);

	return (
		<Link
			to={`/resume/${id}`}
			className="resume-card animate-in fade-in duration-1000"
		>
			<div className="resume-card-header">
				<div className="flex flex-col gap-2">
					{companyName && (
						<h2 className="!text-black font-bold break-words">
							{companyName}
						</h2>
					)}
					{jobTitle && (
						<h3 className="text-lg break-words text-gray-500">
							{jobTitle}
						</h3>
					)}
					{!companyName && !jobTitle && (
						<h2 className="!text-black font-bold">Resume</h2>
					)}
				</div>
				<div className="flex-shrink-0">
					<ScoreCircle score={feedback.overallScore} />
				</div>
			</div>
			{displayUrl && (
				<div className="gradient-border animate-in fade-in duration-1000">
					<div className="w-full h-full">
						<img
							src={displayUrl}
							alt="resume"
							className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
						/>
					</div>
				</div>
			)}
		</Link>
	);
};

export default ResumeCard;
