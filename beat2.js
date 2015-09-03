var p = (function muzack() {
  const bpm = 90;
  const freq = 60/bpm;
  const perSecond = freq*1000;
  const resolution = perSecond/8;

  var interval = 0;

  const track1 = [0,0,0,0,82,0,0,0,0,0,82,0,0,0,0,0,70,0,0,0,0,0,86,0,0,0,0,0,0,0,0,0,0,0,0,0,86,0,0,0,0,0,86,0,0,0,0,0,70,0,0,0,0,0,82,0,0,0,0,0,0,0,0,0];

  function hit(keyCode, idx) {
    setTimeout(function () {
      $('body').trigger(jQuery.Event('keydown', {keyCode: keyCode, which: keyCode}));
    }, (resolution*idx));
  }

  function sequence(beat, idx) {
    if (beat) {
      hit(beat, idx);
      return beat;
    }
  }

  function play() {
    interval = setInterval(function () {
      track1.map(sequence);
    }, (track1.length)*resolution);

    track1.map(sequence);
  }

  function stop() {
    clearInterval(interval);
  }

  return {
    play: play,
    stop: stop
  };

}());