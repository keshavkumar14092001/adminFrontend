import axios from 'axios';

const URL = 'http://localhost:5000/admin';

export const fetchPosts = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);