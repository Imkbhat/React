import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://react-another-project.firebaseio.com/'
});

export default instance;