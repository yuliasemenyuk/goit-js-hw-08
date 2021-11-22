import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);
const TIME_KEY = "videoplayer-current-time"
const currentTime = localStorage.getItem(TIME_KEY);


iframePlayer.setCurrentTime(currentTime);

iframePlayer.on('timeupdate', throttle(data => localStorage.setItem(TIME_KEY, data.seconds), 1000));


