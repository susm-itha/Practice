 function saveData() {
            const name = document.getElementById("nameInput").value;

            // Store data in Local Storage
            localStorage.setItem("username", name);

            alert("Data Saved Successfully");
        }

        function getData() {
            // Retrieve data from Local Storage
            const storedName = localStorage.getItem("username");

            document.getElementById("result").innerText =
                storedName ? "Stored Name: " + storedName : "No Data Found";
        }