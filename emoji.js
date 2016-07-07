var URLEmoji = URLEmoji || {}

URLEmoji.addEmojiToURL = function () {
  var urlemoji = ['😀', '😬', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😉', '😊', '🙂', '🙃', '😋', '😌', '😍', '😘', '😗', '😙', '😚', '😜', '😝', '😛', '🤑', '🤓', '😎', '🤗', '😏', '😶', '😐', '😑', '😒', '🙄', '🤔', '😳', '😞', '😟', '😠', '😡', '😔', '😕', '🙁', '😣', '😖', '😫', '😩', '😤', '😮', '😱', '😨', '😰', '😯', '😦', '😧', '😢', '😥', '😪', '😓', '😭', '😵', '😲', '🤐', '😷', '🤒', '🤕', '😴']

  // Debug - console.log(navigator.userAgent);
  
  if (navigator.userAgent.indexOf('Mac OS X') > 0) {
    var eNumber = Math.floor(Math.random() * (urlemoji.length - 1))
    window.location.hash = urlemoji[eNumber];
  } else if(navigator.userAgent.indexOf('Windows') > 0){
    var eNumber = Math.floor(Math.random() * (urlemoji.length - 1))
    window.location.hash = urlemoji[eNumber];
  }
}
