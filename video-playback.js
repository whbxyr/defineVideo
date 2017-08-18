(function (window, document) {
  var video = document.getElementsByTagName('video')[0];
  var play = document.getElementById('play');

  var videoObject = {
    init: function () {
      video.removeAttribute('controls');
    }
  };

  videoObject.init();
})(this, document);
