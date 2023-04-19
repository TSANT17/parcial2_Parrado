import axios from 'axios';

export const getPhotos = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/photos')
    .then((res) => res.data)
    .catch((err) => console.log(err));
};
