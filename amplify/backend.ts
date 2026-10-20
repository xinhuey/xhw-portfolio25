import {defineBackend} from '@aws-amplify/backend';
import { Stack } from 'aws-cdk-lib';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';

const backend = defineBackend({ auth, data, storage });

const { cfnUserPool } = backend.auth.resources.cfnResources;
cfnUserPool.adminCreateUserConfig = { allowAdminCreateUserOnly: true };

// Public image delivery via CloudFront (bucket stays private)
const bucket = backend.storage.resources.bucket;
const cdn = new cloudfront.Distribution(Stack.of(bucket), 'GalleryCdn', {
    defaultBehavior:{
        origin: origins.S3BucketOrigin.withOriginAccessControl(bucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
    },
});
backend.addOutput({
    custom: {cdnDomain: cdn.distributionDomainName}
});