function saveData() {
            const name = document.getElementById("username").value;

            sessionStorage.setItem("userName", name);

            alert("Data Stored Successfully");
        }

        // Retrieve data from session storage
        function getData() {
            const storedName = sessionStorage.getItem("userName");

            if (storedName) {
                document.getElementById("result").innerText =
                    "Stored Name: " + storedName;
            } else {
                document.getElementById("result").innerText =
                    "No data found in Session Storage";
            }
        }