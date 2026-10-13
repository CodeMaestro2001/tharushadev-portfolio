import type { Metadata } from "next";
import { Skills } from "@/components/Skills";

export const metadata: Metadata = { title: "Skills" };

export default function Page() {
  return <main id="main-content"><Skills /></main>;
}
