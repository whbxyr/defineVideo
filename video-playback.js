(function (window, document) {
  var video = document.getElementsByTagName('video')[0];
  var videoControl = document.getElementsByClassName('video-control')[0];
  var play = videoControl.getElementsByClassName('play')[0];

  var videoObject = {
    init: function () {
      video.removeAttribute('controls');
    }
  };

  videoObject.init();
})(this, document);
