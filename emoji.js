/**
 * URLEmoji Object
 * @type {Object}
 */
var URLEmoji = URLEmoji || {}

/**
 * Array of available Emojis
 * @type {Array}
 */
URLEmoji.emojis = ['😀', '😬', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😉', '😊', '🙂', '🙃', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '😜', '😝', '😛', '🤑', '🤓', '😎', '🤗', '😏', '😶', '😐', '😑', '😒', '🙄', '🤔', '😳', '😞', '😟', '😠', '😡', '😔', '😕', '🙁', '😣', '😖', '😫', '😩', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😢', '😥', '😪', '😓', '😭', '😵', '😲', '🤐', '😷', '🤒', '🤕', '😴']

/**
 * Adds a random emoji to the url
 */
URLEmoji.addEmojiToURL = function () {
  var acceptedBrowsers = /(Chrome|Firefox)/i

  // Check Accepted Browsers
  if (acceptedBrowsers.test(navigator.userAgent) && navigator.userAgent.indexOf('Mac OS X') !== -1) {
    var eNumber = Math.floor(Math.random() * (this.emojis.length - 1))
    window.location.hash = this.emojis[eNumber]
  }
}
