

const aws = require("@pulumi/aws");
const pulumi = require("@pulumi/pulumi");
const mime = require("mime");

// Create an S3 bucket
let siteBucket = new aws.s3.Bucket("s3-website-bucket", {
    website: {
      indexDocument: "index.html",
      errorDocument: "404.html"
    },
  });

// let siteDir = "./cutemoji/out"; // directory for content files

// const createS3BucketFolder =new aws.s3.BucketObject(siteDir, {
//     bucket: siteBucket,
//     acl: "public-read",
//     key: siteDir + "/", // an appended '/' will create a S3 Bucket prefix (see https://stackoverflow.com/a/57479653/4964553)
//     contentType: "application/x-directory" // this content type is also needed for the S3 Bucket prefix
//     // no source needed here!
//   })

// for (let item of require("fs").readdirSync(siteDir)) {
//     let filePath = require("path").join(siteDir, item);
//     let object = new aws.s3.BucketObject(item, {
//       bucket: siteBucket,
//       source: new pulumi.asset.FileAsset(filePath),     // use FileAsset to point to a file
//       contentType: mime.getType(filePath) || undefined, // set the MIME type of the file
//     });
// }


function publicReadPolicyForBucket(bucketName) {
    return JSON.stringify({
      Version: "2012-10-17",
      Statement: [{
        Effect: "Allow",
        Principal: "*",
        Action: [
          "s3:GetObject"
        ],
        Resource: [
          `arn:aws:s3:::${bucketName}/*` // policy refers to bucket name explicitly
        ]
      }]
    })
  }
  
  let bucketPolicy = new aws.s3.BucketPolicy("bucketPolicy", {
    bucket: siteBucket.bucket, // depends on siteBucket -- see explanation below
    policy: siteBucket.bucket.apply(publicReadPolicyForBucket)
            // transform the siteBucket.bucket output property -- see explanation below
  });

exports.bucketName = siteBucket.bucket; // create a stack export for bucket name
exports.websiteUrl = siteBucket.websiteEndpoint;
