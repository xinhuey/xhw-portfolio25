import Gallery from './gallery-client';
import  {getUploadedPhotos } from '@/lib/gallery';

export const revalidate = 60; 

export default async function Page() {
  return <Gallery extraPhotos={await getUploadedPhotos()} />;
}