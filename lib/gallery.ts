import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import outputs from '@/amplify_outputs.json';
import type { Schema } from '@/amplify/data/resource';

export type Photo = { imgUrl: string; title: string; location: string; date: string };

export async function getUploadedPhotos(): Promise<Photo[]> {
  try {
    // set up inside the try so a missing or empty backend config can't crash the build
    Amplify.configure(outputs);
    const client = generateClient<Schema>({ authMode: 'identityPool' });
    const cdn = (outputs as unknown as { custom?: { cdnDomain?: string } }).custom?.cdnDomain;

    const { data } = await client.models.GalleryPhoto.list({ limit: 1000 });
    return [...data]
      .sort((a, b) => b.takenAt.localeCompare(a.takenAt))
      .map((p) => ({
        imgUrl: `https://${cdn}/${p.key}`,
        title: p.title,
        location: p.location ?? '',
        date: new Date(`${p.takenAt}T00:00:00Z`).toLocaleDateString('en-US', {
          month: 'long',
          year: 'numeric',
          timeZone: 'UTC',
        }),
      }));
  } catch (err) {
    console.error('Failed to load uploaded photos', err);
    return []; // gallery still shows your 24 existing photos
  }
}