import axios from "axios";

// ! posts
export const fetchPostsAPI = async ({ page, pageSize }) => {
  try {
    const response = await axios(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`
    );
    const totalPosts = response.headers["x-total-count"];
    return { data: response.data, totalPosts };
  } catch (error) {
    throw new Error(error.message);
  }
};

// !  comments

export const fetchCommentsAPI = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data;

    const commentsPromises = posts.map(async (post) => {
      const postId = post.id;
      const commentsResponse = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
      );
      return commentsResponse.data;
    });

    const comments = await Promise.all(commentsPromises);
    return comments;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// ! onePost
export const fetchOnePostAPI = async (userId) => {
  try {
    const [postResponse, userResponse] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
    ]);

    const onePost = postResponse.data;
    const oneUser = userResponse.data;

    return { onePost, oneUser };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
