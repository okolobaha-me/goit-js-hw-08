import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

const TIME_CODE = 'videoplayer-current-time';

if (localStorage.getItem(TIME_CODE)) {
  const time = Number.parseInt(localStorage.getItem(TIME_CODE));
  player
    .setCurrentTime(time)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}

const getTime = () => {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem(TIME_CODE, seconds);
      console.log(seconds);
    })
    .catch(function (error) {
      // an error occurred
    });
};

player.on('timeupdate', throttle(getTime, 1000));
