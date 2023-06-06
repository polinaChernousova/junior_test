import axios from "axios";

// ! posts
export const fetchPostsAPI = async () => {
  try {
    const response = await axios(`https://jsonplaceholder.typicode.com/posts`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
