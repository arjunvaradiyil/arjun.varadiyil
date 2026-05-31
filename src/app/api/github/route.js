import { GITHUB_USERNAME } from '../../../data/proof';

export const revalidate = 3600;

export async function GET() {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'arjunvaradiyil-portfolio',
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return Response.json({ error: 'GitHub unavailable' }, { status: 502 });
    }

    const data = await res.json();

    return Response.json({
      username: data.login,
      publicRepos: data.public_repos,
      followers: data.followers,
      profileUrl: data.html_url,
    });
  } catch {
    return Response.json({ error: 'GitHub fetch failed' }, { status: 502 });
  }
}
