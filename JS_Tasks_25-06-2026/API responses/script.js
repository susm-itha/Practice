fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => {
        document.getElementById("post").innerHTML = data.title;
    });

//success/error
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {

        if (!response.ok) {
            throw new Error("API request failed");
        }

        return response.json();
    })

    .then(data => {
        console.log("Success:", data);
    })

    .catch(error => {
        console.log("Error:", error.message);
    });