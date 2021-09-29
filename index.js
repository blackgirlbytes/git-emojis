"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

// Create an AWS resource (S3 Bucket)
// const bucket = new aws.s3.Bucket("git-emojis");
// const bucket = new aws.s3.Bucket("git-emojis", {
//     website: {
//         indexDocument: "./cutemoji/pages/index.js",
//     },
// });
// // Export the name of the bucket
// exports.bucketName = bucket.id;

// const bucketObject = new aws.s3.BucketObject("./cutemoji/pages/index.js", {
//     bucket: bucket,
//     acl: "public-read",
//     contentType: "text/javascript",
//     source: new pulumi.asset.FileAsset("./cutemoji/pages/index.js")
// });

// exports.bucketEndpoint = pulumi.interpolate`http://${bucket.websiteEndpoint}`;

const endpoint = new awsx.apigateway.API("hello", {
    routes: [
        // Serve static files from the `www` folder (using AWS S3)
        {
            path: "/",
            localPath: "cutemoji",
        },

        // Serve a simple REST API on `GET /name` (using AWS Lambda)
        {
            path: "/source",
            method: "GET",
            eventHandler: (req, ctx, cb) => {
                cb(undefined, {
                    statusCode: 200,
                    body: Buffer.from(JSON.stringify({ name: "AWS" }), "utf8").toString("base64"),
                    isBase64Encoded: true,
                    headers: { "content-type": "application/json" },
                })
            }
        }
    ]
});

// Export the public URL for the HTTP service
exports.url = endpoint.url;