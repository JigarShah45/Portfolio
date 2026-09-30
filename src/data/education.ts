export interface Education {
  degree: string;
  institution: string;
  period: string;
  result: string;
  resultLabel: string;
}

export const education: Education[] = [
  {
    degree: "B.E in Information Technology",
    institution: "St. Francis Institute of Technology",
    period: "2023 – 2026",
    result: "8.15",
    resultLabel: "CGPA",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "SVKM's Shri Bhagubhai Mafatlal Polytechnic",
    period: "2020 – 2023",
    result: "87.0%",
    resultLabel: "Percentage",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "The Bishop's School",
    period: "2019 – 2020",
    result: "88.8%",
    resultLabel: "Percentage",
  },
];
