import type { Metadata } from "next";
import { Projects } from "@/components/Projects";

export const metadata: Metadata = { title: "Selected Work" };

export default function Page() {
  return <main id="main-content"><Projects /></main>;
}
