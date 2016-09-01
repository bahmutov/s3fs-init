'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')
const S3FS = require('s3fs')
const {getBucketName, isS3FullPath} = require('./s3-utils')

const envBucketName = process.env.BUCKET_NAME ||
process.env.AWS_BUCKET ||
process.env.S3_BUCKET

function makeS3fs (bucketName) {
  if (!bucketName) {
    la(is.unemptyString(envBucketName), 'missing BUCKET_NAME')
    bucketName = envBucketName
  }
  la(is.unemptyString(bucketName), 'missing s3 bucket name', bucketName)

  if (isS3FullPath(bucketName)) {
    bucketName = getBucketName(bucketName)
  }

  const fs = new S3FS(bucketName)
  fs.bucketName = bucketName
  return fs
}

module.exports = {makeS3fs}
