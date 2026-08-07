 async function getUser() {
            const response = await fetch("https://randomuser.me/api/");
            const data = await response.json();

            const user = data.results[0];

            document.getElementById("result").innerHTML =
                "Name: " + user.name.first + " " + user.name.last +
                "<br>Email: " + user.email;
        }