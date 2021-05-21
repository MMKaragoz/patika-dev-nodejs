const posts = [
  { title: "Post Title 1", detail: "Post Detail 1" },
  { title: "Post Title 2", detail: "Post Detail 2" },
  { title: "Post Title 3", detail: "Post Detail 3" },
  { title: "Post Title 4", detail: "Post Detail 4" },
  { title: "Post Title 5", detail: "Post Detail 5" },
];

const listPosts = () => {
  posts.map((post) => {
    post && console.log(`${post.title} - ${post.detail}`);
  });
};

const addPost = (newPost) => {
  const postPromise = new Promise((resolve, reject) => {
    posts.push(newPost);
    newPost ? resolve(posts) : reject("The new post could not be added.");
  });

  return postPromise;
};

addPost({ title: "Post Title 48", detail: "Post Detail 48" })
  .then(() => {
    console.log("New Posts");
    listPosts();
  })
  .catch((err) => {
    console.log(err);
  });

addPost(false)
  .then(() => {
    console.log("New Posts");
    listPosts();
  })
  .catch((err) => {
    console.log(err);
  });
