export async function fetchReadme(owner: string, repo: string) {
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/readme`,
    {
      headers: {
        Accept: "application/vnd.github.v3.raw", // get raw markdown
      },
      next: { revalidate: 3600 }, // (optional) cache for 1h in Next.js
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch README");
  }

  return res.text(); // returns markdown string
}
