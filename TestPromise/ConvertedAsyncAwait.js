const posts = [];

function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve('Post created!');
    }, 1000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(`Post "${deletedPost}" deleted!`);
      } else {
        reject('No posts to delete');
      }
    }, 1000);
  });
}

// converted to async/await
const createPostAsync = async (post) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      resolve('Post created!');
    }, 1000);
  });
};

const deletePostAsync = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length > 0) {
        const deletedPost = posts.pop();
        resolve(`Post "${deletedPost}" deleted!`);
      } else {
        reject('No posts to delete');
      }
    }, 1000);
  });
};

//usage with async/await
async function exampleUsage() {
  try {
    const resultCreate = await createPostAsync('New post');
    console.log(resultCreate);

    const resultDelete = await deletePostAsync();
    console.log(resultDelete);
  } catch (error) {
    console.error(error);
  }
}
exampleUsage();
