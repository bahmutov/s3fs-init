'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')
const S3FS = require('s3fs')
const {getBucketName, isS3FullPath} = require('./s3-utils')

function makeS3fs (bucketName) {
  if (!bucketName) {
    la(is.unemptyString(process.env.BUCKET_NAME), 'missing BUCKET_NAME')
    bucketName = process.env.BUCKET_NAME
  }
  la(is.unemptyString(bucketName), 'missing s3 bucket name', bucketName)

  if (isS3FullPath(bucketName)) {
    bucketName = getBucketName(bucketName)
  }

  const fs = new S3FS(bucketName)
  fs.bucketName = bucketName
  return fs
}

module.exports = makeS3fs
