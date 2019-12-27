# Next Videos
[![npm version](https://badge.fury.io/js/next-videos.svg)](https://badge.fury.io/js/next-videos)

Import videos (mp4, webm, ogg, swf, ogv) in Next.js.

## Features

* Load videos from local
* Load videos from remote (CDN for example) with [assetPrefix](https://github.com/zeit/next.js/#dynamic-assetprefix)
* Adds a content hash to the file name so videos can get cached

## Installation

```
yarn add next-videos -E
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withVideos = require('next-videos')

module.exports = withVideos()
```

And you just import it in your component using `require()`

```js
export default () => (
  <div>
    <video src={require('./video.mp4')} />
  </div>
)
```

## Options

### assetPrefix
You can serve your videos to a remote url by setting `assetPrefix` option

```js
const withVideos = require('next-videos')

module.exports = withVideos({
  assetPrefix: 'https://example.com',

  webpack(config, options) {
    return config
  }
})
```
