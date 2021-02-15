import axios from 'axios';

const KEY = process.env.REACT_APP_YT_PUBLIC_KEY;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', 
    type: 'video',
    regionCode: 'de',
    maxResults: 5,
    key: KEY
  }
});