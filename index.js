"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("git-emojis");


// Export the name of the bucket
exports.bucketName = bucket.id;

const bucketObject = new aws.s3.BucketObject("cutemoji/pages/index.js", {
    bucket: bucket,
    source: new pulumi.asset.FileAsset("cutemoji/pages/index.js")
});