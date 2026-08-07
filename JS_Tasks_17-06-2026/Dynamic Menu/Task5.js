 let menu = document.getElementById("menu");
        let addBtn = document.getElementById("addBtn");
        let itemInput = document.getElementById("itemInput");
        let result = document.getElementById("result");

        // Add new list item
        addBtn.addEventListener("click", function () {

            let newItem = document.createElement("li");
            newItem.textContent = itemInput.value;

            menu.appendChild(newItem);

            itemInput.value = "";
        });

        // Event Delegation
        menu.addEventListener("click", function (event) {

            if (event.target.tagName === "LI") {
                result.textContent =
                    "You clicked: " + event.target.textContent;
            }

        });
