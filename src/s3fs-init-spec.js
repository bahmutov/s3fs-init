'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('s3fs-init', () => {
  describe('makeS3fs', () => {
    const {makeS3fs} = require('..')
    it('is a function', () => {
      la(is.fn(makeS3fs))
    })
  })

  describe('getBucketName', () => {
    const {getBucketName} = require('..')

    it('gets correct s3:// bucket name', () => {
      const result = getBucketName('s3://foo/bar')
      la(result === 'foo', result)
    })

    it('gets correct s3:/foo bucket name', () => {
      const result = getBucketName('s3:/foo/bar')
      la(result === 'foo', result)
    })
  })

  describe('getPathInBucket', () => {
    const {getPathInBucket} = require('..')

    it('gets correct s3:// path', () => {
      const result = getPathInBucket('s3://foo/bar')
      la(result === 'bar', result)
    })

    it('gets correct s3:/foo bucket name', () => {
      const result = getPathInBucket('s3:/foo/bar')
      la(result === 'bar', result)
    })
  })

  describe('is s3 full path', () => {
    const {isS3FullPath} = require('..')

    it('has s3 utils method', () => {
      la(is.fn(isS3FullPath))
    })

    it('detects s3:// paths', () => {
      la(isS3FullPath('s3://foo/bar'))
      la(isS3FullPath('s3://foo/bar/'))
      la(isS3FullPath('s3://foo/bar/some.txt'))
    })

    it('detects s3:/foo paths', () => {
      la(isS3FullPath('s3:/foo/bar'))
    })
  })
})
