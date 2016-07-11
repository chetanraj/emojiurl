# emojiurl

Add smiley emoji in the url 😄

> only works on Mac 😞

[![Build Status](https://travis-ci.org/chetanraj/emojiurl.svg?branch=master)](https://travis-ci.org/chetanraj/emojiurl)

As seen in

![emoji in url screen](https://raw.githubusercontent.com/chetanraj/emojiurl/master/images/url.png)


### How to use

Add the emoji.js file path to the of your document head:

```js
<script src="path/to/emoji.js">
```

or use the CDN 😉
```js
<script src="https://npmcdn.com/emojiurl@1.4.0">
```

then invoke

```js
  URLEmoji.addEmojiToURL();
```
> Everytime you reload a new smiley emoji appears on the url 😉


## TO-DO

- [x] Make the emoji category wise. ```URLEmoji.addEmojiToURL('smiley')```
- [ ] CDN - emoji.js
