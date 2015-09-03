var p = (function muzack() {
  const bpm = 90;
  const freq = 60/bpm;
  const perSecond = freq*1000;
  const resolution = perSecond/8;

  const bridge1 = [74,0,0,0,0,0,74,0,74,0,0,0,74,0,0,0,0,0,0,0,74,0,0,0,74,0,0,0,0,0,0,0,74,0,0,0,0,0,74,0,74,0,0,0,74,0,0,0,0,0,0,0,74,0,0,0,74,0,0,0,83,0,0,0];

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
    bridge1.map(sequence);
  }

  return {
    play, play
  };

}());