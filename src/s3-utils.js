'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

function isS3FullPath (s) {
  return is.unemptyString(s) && /^s3:/.test(s)
}

function getPathInBucket (s3folder) {
  la(s3folder.startsWith('s3:'), 'not full s3 path', s3folder)
  return s3folder.split('/').slice(3).join('/')
}

function getBucketName (s) {
  la(isS3FullPath(s), 'not a full s3 path', s)
  // s3://bucket-name/foo
  const bucket = s.split('/')[2]
  la(is.unemptyString(bucket), 'could not get S3 bucket from full path', s)
  return bucket
}

module.exports = {isS3FullPath, getPathInBucket, getBucketName}
