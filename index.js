"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

// Create an AWS resource (S3 Bucket)
// const bucket = new aws.s3.Bucket("git-emojis");
const bucket = new aws.s3.Bucket("git-emojis", {
    website: {
        indexDocument: "cutemoji/pages/index.js",
    },
});
// Export the name of the bucket
exports.bucketName = bucket.id;

const bucketObject = new aws.s3.BucketObject("cutemoji/pages/index.js", {
    bucket: bucket,
    acl: "public-read",
    contentType: "text/javascript",
    source: new pulumi.asset.FileAsset("cutemoji/pages/index.js")
});

exports.bucketEndpoint = pulumi.interpolate`http://${bucket.websiteEndpoint}`;