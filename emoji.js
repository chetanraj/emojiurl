var URLEmoji = URLEmoji || {}

URLEmoji.addEmojiToURL = function () {
  var urlemoji = ['😀', '😬', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😉', '😊', '🙂', '🙃', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '😜', '😝', '😛', '🤑', '🤓', '😎', '🤗', '😏', '😶', '😐', '😑', '😒', '🙄', '🤔', '😳', '😞', '😟', '😠', '😡', '😔', '😕', '🙁', '😣', '😖', '😫', '😩', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😢', '😥', '😪', '😓', '😭', '😵', '😲', '🤐', '😷', '🤒', '🤕', '😴']

  // Only Mac
  if (navigator.userAgent.indexOf('Mac OS X') !== -1) {
    var eNumber = Math.floor(Math.random() * (urlemoji.length - 1))
    window.location.hash = urlemoji[eNumber]
  }
}
