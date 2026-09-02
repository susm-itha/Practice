class StoreError extends Error {
    constructor(message) {
        super(message);
        this.name = "StoreError";
    }
}

// Get items from Local Storage
function getItems() {

    try {

        const data = localStorage.getItem("customItems");

        if (!data) {
            return [];
        }

        return JSON.parse(data);

    } catch (error) {

        console.log("Error loading items:", error);

        return [];

    } finally {

        console.log("Loading completed");

    }
}

// Save items to Local Storage
function saveItems(items) {

    try {

        localStorage.setItem(
            "customItems",
            JSON.stringify(items)
        );

    } catch (error) {

        throw new StoreError("Unable to save items!");

    } finally {

        console.log("Save operation completed");

    }
}

// Add Item
function addItem() {

    try {

        const name = document.getElementById("itemName").value.trim();
        const price = document.getElementById("itemPrice").value;
        const color = document.getElementById("itemColor").value;

        // Validation
        if (name === "") {
            throw new StoreError("Please enter item name!");
        }

        if (price === "" || price <= 0) {
            throw new StoreError("Please enter a valid price!");
        }

        if (color === "") {
            throw new StoreError("Please choose a color!");
        }

        const items = getItems();

        const newItem = {
            id: Date.now(),
            name: name,
            price: Number(price),
            color: color
        };

        items.push(newItem);

        saveItems(items);

        showMessage("Item added successfully!");

        clearForm();

        displayItems();

    } catch (error) {

        showMessage(error.message);

    } finally {

        console.log("Add item operation completed");

    }
}

// Display Items
function displayItems() {

    const itemList = document.getElementById("itemList");

    const items = getItems();

    itemList.innerHTML = "";

    if (items.length === 0) {

        itemList.innerHTML = `
            <p>No custom items available.</p>
        `;

        return;
    }

    items.forEach(function(item) {

        itemList.innerHTML += `
            <div class="card">

                <h3>${item.name}</h3>

                <p>₹${item.price}</p>

                <p>
                    Color:
                    <span class="color">${item.color}</span>
                </p>

                <button 
                    class="delete"
                    onclick="deleteItem(${item.id})">
                    Delete
                </button>

            </div>
        `;

    });
}

// Delete Item
function deleteItem(id) {

    try {

        let items = getItems();

        items = items.filter(function(item) {
            return item.id !== id;
        });

        saveItems(items);

        showMessage("Item deleted!");

        displayItems();

    } catch (error) {

        showMessage(error.message);

    }
}

// Clear Form
function clearForm() {

    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemColor").value = "";

}

// Show Message
function showMessage(message) {

    const messageBox = document.getElementById("message");

    messageBox.textContent = message;

    setTimeout(function() {
        messageBox.textContent = "";
    }, 2000);
}

// Load items when app starts
displayItems();