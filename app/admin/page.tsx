'use client';

import {useEffect, useState} from 'react';
import {Amplify} from 'aws-amplify';
import {fetchAuthSession} from 'aws-amplify/auth';
import {uploadData} from 'aws-amplify/storage';
import {generateClient} from 'aws-amplify/data';
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import outputs from '@/amplify_outputs.json';
import type {Schema} from '@/amplify/data/resource';

Amplify.configure(outputs);


// Shrink iPhone pics to max 2000px
// Re-encode as JPED before upload
async function toJpeg(file:File, maxSide = 2000): Promise<Blob>{
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext('2d')!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    return new Promise((resolve, reject) =>
        canvas.toBlob((b) => (b? resolve(b) : reject(new Error('Image encoding failed'))), 'image/jepg', 0.85)
    );
}

function UploadForm(){
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
    const [status, setStatus] = useState('');

    useEffect(() =>{
        fetchAuthSession().then((s) =>{
            const groups = (s.tokens?.accessToken.payload['cognito:groups'] as string[] | undefined ?? []);
            setIsAdmin(groups.includes('admins'));

        });
    }, []);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        const form = e.currentTarget;
        const fd = new FormData(form);
        const file = fd.get('file') as File;
        const title = String(fd.get('title')).trim();
        const location = String(fd.get('location')).trim();
        const takenAt = String(fd.get('takenAt'));

        const client = generateClient<Schema>();
        try{
            setStatus('Uploading...');
            const blob = await toJpeg(file);
            const slug = title.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g, '');
            const key = `gallery/${Date.now()}-${slug}.jpg`;

            await uploadData({ path: key, data: blob, options:{ contentType: 'image/jpeg'}}).result;
            const { errors } = await client.models.GalleryPhoto.create(
                {key, title, location, takenAt},
                {authMode: 'userPool'}

            );
            if (errors?.length) throw new Error(errors[0].message);

            setStatus('Uploaded. It will appear on /gallery within a minute.');
            form.reset();

        }catch (err){
            setStatus(`Failed: ${(err as Error).message}`);

        }
    }
    if (isAdmin === null) return <p>Checking access</p>;
    if(!isAdmin) return <p>This account isn&apos;t an admin.</p>;

    return (
        <form onSubmit= {onSubmit} className = "flex flex-col gap-3">
            <input type="file" name= "file" accept="image/*" required/>
            <input name="title" placeholder="Title" required className="border p-2 rounded" />
            <input name="location" placeholder="Location (e.g. Venice, Italy)" className="border p-2 rounded" />
            <input type="date" name="takenAt" required className="border p-2 rounded" />
            <button type="submit" className="border p-2 rounded">Upload</button>
            {status && <p className="text-sm">{status}</p>}
        </form>
    );
}

export default function AdminPage(){
     return (
        <main className = "mx-auto max-w-md p-6">
            <Authenticator hideSignUp>
                {({ signOut }) =>(
                    <>
                    <UploadForm/>
                    <button onClick = {signOut} className="mt-6 text-sm underline">Sign out</button>
                    </>
                )}
            </Authenticator>
        </main>
     )
}

