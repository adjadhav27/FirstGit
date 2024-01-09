const posts = [];

let lastActivityTime = null;

// to create a new post

function createPost(post) {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      posts.push(post);

      resolve('Post created!');

    }, 1000);

  });

}

//to update user's last activity time

function updateLastUserActivityTime() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      lastActivityTime = new Date();

      resolve(lastActivityTime);

    }, 1000);

  });

}

// to delete the last post

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

//to log posts and last activity time

function logPostsAndLastActivityTime() {

  console.log('All Posts:', posts);

  console.log('Last Activity Time:', lastActivityTime);

}

// usage with Promise.all

Promise.all([createPost('Post 1'), updateLastUserActivityTime()])

  .then(() => {

    logPostsAndLastActivityTime();

    return deletePost();

  })

  .then((deleteResult) => {

    console.log(deleteResult);

    logPostsAndLastActivityTime();

  })

  .catch((error) => console.error('Error:', error));