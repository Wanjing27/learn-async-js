const fetchPromise = fetch("https://jsonplaceholder.typicode.com/posts");

fetchPromise
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Bad Response : ${response.status}`);
  })
  .then((posts) => {
    posts.forEach((post) => {
      console.log(post.title);
    });
  })
  .catch((error) => {
    console.error(`Failed to get posts: ${error.message}`); // Changed error to error.message to display only the error message
  });

console.log('Chaining promises ... ');
