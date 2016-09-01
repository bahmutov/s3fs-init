'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

const s3start = /^s3:\/\//

function isS3FullPath (s) {
  return is.unemptyString(s) && /^s3:/.test(s)
}

function getPathInBucket (s3folder) {
  la(s3folder.startsWith('s3:'), 'not full s3 path', s3folder)

  if (s3start.test(s3folder)) {
    // assuming s3://foo/bar
    return s3folder.split('/').slice(3).join('/')
  } else {
    // assuming s3:/foo/bar
    return s3folder.split('/').slice(2).join('/')
  }
}

function getBucketName (s) {
  la(isS3FullPath(s), 'not a full s3 path', s)

  var bucket
  if (s3start.test(s)) {
    // s3://bucket-name/foo
    bucket = s.split('/')[2]
  } else {
    // s3:/bucket-name/foo
    bucket = s.split('/')[1]
  }

  la(is.unemptyString(bucket), 'could not get S3 bucket from full path', s)
  return bucket
}

module.exports = {isS3FullPath, getPathInBucket, getBucketName}
