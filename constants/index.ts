export const resumes: Resume[] = [
	{
		id: "1",
		companyName: "Google",
		jobTitle: "Frontend Developer",
		imagePath: "/images/resume_01.png",
		resumePath: "/resumes/resume-1.pdf",
		feedback: {
			overallScore: 85,
			ATS: {
				score: 90,
				tips: [],
			},
			toneAndStyle: {
				score: 90,
				tips: [],
			},
			content: {
				score: 90,
				tips: [],
			},
			structure: {
				score: 90,
				tips: [],
			},
			skills: {
				score: 90,
				tips: [],
			},
		},
	},
	{
		id: "2",
		companyName: "Microsoft",
		jobTitle: "Cloud Engineer",
		imagePath: "/images/resume_02.png",
		resumePath: "/resumes/resume-2.pdf",
		feedback: {
			overallScore: 55,
			ATS: {
				score: 90,
				tips: [],
			},
			toneAndStyle: {
				score: 90,
				tips: [],
			},
			content: {
				score: 90,
				tips: [],
			},
			structure: {
				score: 90,
				tips: [],
			},
			skills: {
				score: 90,
				tips: [],
			},
		},
	},
	{
		id: "3",
		companyName: "Apple",
		jobTitle: "iOS Developer",
		imagePath: "/images/resume_03.png",
		resumePath: "/resumes/resume-3.pdf",
		feedback: {
			overallScore: 75,
			ATS: {
				score: 90,
				tips: [],
			},
			toneAndStyle: {
				score: 90,
				tips: [],
			},
			content: {
				score: 90,
				tips: [],
			},
			structure: {
				score: 90,
				tips: [],
			},
			skills: {
				score: 90,
				tips: [],
			},
		},
	},
	{
		id: "4",
		companyName: "Google",
		jobTitle: "Frontend Developer",
		imagePath: "/images/resume_01.png",
		resumePath: "/resumes/resume-1.pdf",
		feedback: {
			overallScore: 85,
			ATS: {
				score: 90,
				tips: [],
			},
			toneAndStyle: {
				score: 90,
				tips: [],
			},
			content: {
				score: 90,
				tips: [],
			},
			structure: {
				score: 90,
				tips: [],
			},
			skills: {
				score: 90,
				tips: [],
			},
		},
	},
	{
		id: "5",
		companyName: "Microsoft",
		jobTitle: "Cloud Engineer",
		imagePath: "/images/resume_02.png",
		resumePath: "/resumes/resume-2.pdf",
		feedback: {
			overallScore: 55,
			ATS: {
				score: 90,
				tips: [],
			},
			toneAndStyle: {
				score: 90,
				tips: [],
			},
			content: {
				score: 90,
				tips: [],
			},
			structure: {
				score: 90,
				tips: [],
			},
			skills: {
				score: 90,
				tips: [],
			},
		},
	},
	{
		id: "6",
		companyName: "Apple",
		jobTitle: "iOS Developer",
		imagePath: "/images/resume_03.png",
		resumePath: "/resumes/resume-3.pdf",
		feedback: {
			overallScore: 75,
			ATS: {
				score: 90,
				tips: [],
			},
			toneAndStyle: {
				score: 90,
				tips: [],
			},
			content: {
				score: 90,
				tips: [],
			},
			structure: {
				score: 90,
				tips: [],
			},
			skills: {
				score: 90,
				tips: [],
			},
		},
	},
];

export const AIResponseFormat = `{
  "overallScore": 78,
  "ATS": {
    "score": 85,
    "tips": [
      {
        "type": "good",
        "tip": "Keyword alignment with job description",
        "explanation": "Resume includes 12 of 15 required keywords from the job posting, improving ATS parsing rate."
      },
      {
        "type": "improve",
        "tip": "Missing ATS-friendly section headers",
        "explanation": "Use standard headers like 'Experience', 'Education', 'Skills' instead of creative titles that ATS may not recognize."
      }
    ]
  },
  "toneAndStyle": {
    "score": 72,
    "tips": [
      {
        "type": "improve",
        "tip": "Passive voice in experience bullets",
        "explanation": "Rewrite passive constructions like 'Was responsible for' to active verbs like 'Led', 'Built', 'Delivered'."
      }
    ]
  },
  "content": {
    "score": 80,
    "tips": [
      {
        "type": "good",
        "tip": "Quantified achievements",
        "explanation": "Metrics like 'reduced load time by 40%' provide concrete evidence of impact."
      }
    ]
  },
  "structure": {
    "score": 88,
    "tips": [
      {
        "type": "good",
        "tip": "Reverse chronological order",
        "explanation": "Work experience is listed most recent first, which is the standard ATS-preferred format."
      }
    ]
  },
  "skills": {
    "score": 70,
    "tips": [
      {
        "type": "improve",
        "tip": "Skill proficiency levels missing",
        "explanation": "Add proficiency indicators (e.g., Advanced, Proficient, Familiar) so recruiters can gauge depth."
      }
    ]
  }
}`;

export const SCORING_RUBRIC = `## Scoring Rubric (0-100)

### overallScore
- 90-100: Exceptional resume, minor or no improvements needed
- 75-89: Strong resume, a few targeted improvements
- 50-74: Average resume, multiple areas need work
- 25-49: Weak resume, significant revision required
- 0-24: Poor resume, major structural and content issues

### Per-category scoring
Apply the same 0-100 scale to each category (ATS, toneAndStyle, content, structure, skills) independently.
Score based on: relevance to the target job title, clarity, evidence of impact, ATS compatibility, and adherence to industry best practices.
If the job description is provided, weight category scores by how well the resume addresses the stated requirements.`;


export const FEW_SHOT_EXAMPLE = `## Example Input
Job Title: Frontend Developer
Job Description: Building responsive React applications, TypeScript, state management, API integration.
Resume content: [parsed resume text]

## Example Output
{
  "overallScore": 82,
  "ATS": {
    "score": 88,
    "tips": [
      {
        "type": "good",
        "tip": "Keyword alignment",
        "explanation": "Includes React, TypeScript, and API integration keywords matching the job description."
      },
      {
        "type": "improve",
        "tip": "Add more ATS keywords",
        "explanation": "Include 'state management', 'responsive design', and 'accessibility' which appear in the job description."
      }
    ]
  },
  "toneAndStyle": {
    "score": 75,
    "tips": [
      {
        "type": "improve",
        "tip": "Reduce passive voice",
        "explanation": "Change 'Was responsible for building' to 'Built and shipped'."
      }
    ]
  },
  "content": {
    "score": 80,
    "tips": [
      {
        "type": "good",
        "tip": "Quantified results",
        "explanation": "Includes metrics like 'reduced bundle size by 25%'."
      }
    ]
  },
  "structure": {
    "score": 85,
    "tips": [
      {
        "type": "good",
        "tip": "Standard section headers",
        "explanation": "Uses 'Experience', 'Education', 'Skills' which ATS parsers recognize."
      }
    ]
  },
  "skills": {
    "score": 70,
    "tips": [
      {
        "type": "improve",
        "tip": "Add proficiency levels",
        "explanation": "Mark skills as Advanced, Proficient, or Familiar for clarity."
      }
    ]
  }
}`;


export const prepareInstructions = ({
	jobTitle,
	jobDescription,
}: {
	jobTitle: string;
	jobDescription: string;
}) =>
	`You are an expert ATS (Applicant Tracking System) resume analyst.

<task>
Analyze the resume provided and rate it across five categories: ATS compatibility, tone and style, content quality, structure, and skills. Provide actionable improvement tips for each category. Be honest — give low scores when the resume genuinely needs work. The goal is to help the user improve their resume, not to flatter them.
</task>

<job_context>
Job Title: ${jobTitle}
Job Description: ${jobDescription}
</job_context>

<scoring_rubric>
${SCORING_RUBRIC}
</scoring_rubric>

<response_format>
Return a single JSON object matching this schema exactly. All tip entries must include type, tip, and explanation fields. Provide 3-4 tips per category.
${AIResponseFormat}
</response_format>

<example>
${FEW_SHOT_EXAMPLE}
</example>

<constraints>
- Return ONLY valid JSON. No markdown code fences, no backticks, no introductory text, no trailing comments.
- All tip objects must have exactly: type ("good" | "improve"), tip (short title string), explanation (detailed string).
- Each category must have 3-4 tips.
- Scores must be integers between 0 and 100.
</constraints>`;
