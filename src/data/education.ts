export type EducationEntry = {
  id: string;
  institution: string;
  qualification: string;
  fieldOfStudy?: string;
  startDate?: string;
  endDate?: string;
  achievements?: readonly string[];
};

export const educationEntries: readonly EducationEntry[] = [
  {
    id: "sliit-bsc-information-technology",
    institution: "Sri Lanka Institute of Information Technology",
    qualification: "BSc (Hons) in Information Technology",
    fieldOfStudy: "Information Technology",
    startDate: "May 2022",
    endDate: "May 2026",
  },
];
