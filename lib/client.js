import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'o65tc0ag',
    dataset: 'production',
    apiVersion: '2023-04-08',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});