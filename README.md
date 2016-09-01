# s3fs-init

> Init utility for AWS S3 file system package
> [s3fs](https://github.com/RiptideElements/s3fs)

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

## Install and use

```sh
npm install --save s3fs-init
```

[List contents](https://github.com/RiptideElements/s3fs#s3fslistcontentspath-marker-callback)
of a given folder.

```js
const {makeS3fs, getPathInBucket} = require('s3fs-init')
const fullPath = 's3://foo/bar'
const fs = makeS3fs(fullPath)
const path = getPathInBucket(fullPath) // 'foo/bar'
fs.listContents(path, '/')
  .then(list => ...)
```

Use default bucket name (passed via environment variable `BUCKET_NAME`
or its aliases, see [src/get-s3fs.js](src/get-s3fs.js))

```js
const {makeS3fs} = require('s3fs-init')
const path = 'foo/bar'
const fs = makeS3fs()
fs.listContents(path, '/')
  .then(list => ...)
```

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2016

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/s3fs-init/issues) on Github

## MIT License

Copyright (c) 2016 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/s3fs-init.svg?downloads=true
[npm-url]: https://npmjs.org/package/s3fs-init
[ci-image]: https://travis-ci.org/bahmutov/s3fs-init.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/s3fs-init
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
