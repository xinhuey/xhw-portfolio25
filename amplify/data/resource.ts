import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
    GalleryPhoto: a
        .model({
            key: a.string().required(), // S3 path
            title: a.string().required(),
            location: a.string(),
            takenAt: a.date().required(),   // YYYY-MM-DD
        })
        .authorization((allow) =>[
            allow.guest().to(['read']),
            allow.authenticated('identityPool').to(['read']),
            allow.group('admins'),
        ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
    schema,
    authorizationModes: { defaultAuthorizationMode : 'identityPool'},
});