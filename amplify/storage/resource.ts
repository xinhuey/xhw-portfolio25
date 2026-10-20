import { defineStorage} from '@aws-amplify/backend';

export const storage = defineStorage({
    name: 'galleryMedia',
    access: (allow) =>({
        'gallery/*': [allow.groups(['admins']).to(['read', 'write','delete'])],
    }),
});