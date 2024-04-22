import { getPage } from "@/lib/cms-api";

export default async function About() {
  const post = await getPage("home");

  return (
    <div
      className="prose lg:prose-xl"
      dangerouslySetInnerHTML={{ __html: post }}
    />
  );
}

