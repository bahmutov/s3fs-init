'use strict'

const la = require('lazy-ass')
const is = require('check-more-types')

/* global describe, it */
describe('s3fs-init', () => {
  describe('is s3 full path', () => {
    const {isS3FullPath} = require('..')

    it('has s3 utils method', () => {
      la(is.fn(isS3FullPath))
    })

    it('detects s3 paths', () => {
      la(isS3FullPath('s3://foo/bar'))
      la(isS3FullPath('s3://foo/bar/'))
      la(isS3FullPath('s3://foo/bar/some.txt'))
    })
  })
})
