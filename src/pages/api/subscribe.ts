import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL; // Use environment variable

    if (!googleScriptUrl) {
      return res.status(500).json({ error: 'Google Script URL not configured' });
    }

    try {
      const response = await fetch(googleScriptUrl, {
        method: 'POST', // Or 'GET' if your script is set up for that
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        return res.status(200).json({ message: 'Subscription successful' });
      } else {
        return res.status(500).json({ error: 'Google Script Error' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
