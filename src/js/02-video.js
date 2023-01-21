import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}

const getTime = localStorage.getItem('videoplayer-current-time');
if (getTime) {
  player.setCurrentTime(getTime);
} else {
  player.setCurrentTime(0);
}
