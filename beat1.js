var p = (function muzack() {
  const bpm = 90;
  const freq = 60/bpm;
  const perSecond = freq*1000;
  const resolution = perSecond/8;

  var interval = 0;


  const intro1 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,80,0,0,0,0,0,80,0,80,0,0,0,0,0,80,0,80,0,0,0,0,0,80,0,80,0,0,0,80,0,0,0];

  const track1 = [80,0,0,0,0,0,80,0,0,0,0,0,80,0,0,0,0,0,0,0,80,0,0,0,0,0,0,0,0,0,0,0,80,0,0,0,0,0,80,0,0,0,0,0,80,0,0,0,0,0,0,0,80,0,0,0,0,0,0,0,0,0,0,0];

  const track2 = [0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,65,0,0,0,0,0,0,0];

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

  function intro() {
    intro1.map(sequence);
  }

  var repeat = 0;
  function hook() {
    // beat
    if (repeat === 0) {

      interval = setInterval(function () {
        console.log('bar:', repeat);

        if (repeat === 8) {
          console.log('bridge on next pass...');
          stop();

          interval = setTimeout(function () {
            bridge();
            ++repeat;
          }, track1.length*resolution);
        }

        track1.map(sequence);
        track2.map(sequence);
        ++repeat;

      }, intro1.length*resolution);

    } else {

      interval = setInterval(function () {
        track1.map(sequence);
        track2.map(sequence);

      }, track1.length*resolution);

      track1.map(sequence);
      track2.map(sequence);
    }

  }

  function stop() {
    clearInterval(interval);
    repeat = 0;
  }

  function bridge() {
    const bridge1 = [87,0,0,0,0,0,87,0,0,0,0,0,87,0,0,0,0,0,0,0,87,0,0,0,87,0,0,0,0,0,0,0,87,0,0,0,0,0,87,0,0,0,0,0,87,0,0,0,0,0,0,0,87,0,0,0,87,0,0,0,0,0,0,0];
    bridge1.map(sequence);
  }

  return {
    play: function () {
      intro();
      hook();
    },
    intro: intro,
    hook: hook,
    stop: stop,
    bridge: bridge
  };

}());