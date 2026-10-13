import type { Metadata } from "next";
import { Experience } from "@/components/Experience";

export const metadata: Metadata = { title: "Experience" };

export default function Page() {
  return <main id="main-content"><Experience /></main>;
}
