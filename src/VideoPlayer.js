import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';

export default function VideoPlayer(props) {
  const videoEl = useRef(null);

  useEffect(() => {
    const player = videojs(videoEl.current, props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });

    player.on('ended', function() {
      alert('Video has ended');
    });

    return () => {
      if (player) {
        player.dispose();
      }
    };
  }, []);

  return (
    <div>
      <div data-vjs-player>
        <video ref={videoEl} className="video-js  vjs-16-9"></video>
      </div>
    </div>
  );
}
