//Get
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data));

//post
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "JavaScript",
    body: "Fetch API Example"
  })
})
.then(response => response.json())
.then(data => console.log(data));

//put
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Updated Title"
  })
})
.then(response => response.json())
.then(data => console.log(data));

//delete
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
.then(() => {
  console.log("Data Deleted");
});