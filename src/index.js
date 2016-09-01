'use strict'

const s3utils = require('./s3-utils')
const getS3fs = require('./get-s3fs')

module.exports = Object.assign({}, s3utils, getS3fs)
