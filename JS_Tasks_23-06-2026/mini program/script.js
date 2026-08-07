async function showUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users = await response.json();

    const [
        { name: name1, email: email1 },
        { name: name2, email: email2 },
        { name: name3, email: email3 }
    ] = users;

    console.log(`${name1} - ${email1}`);
    console.log(`${name2} - ${email2}`);
    console.log(`${name3} - ${email3}`);
}

showUsers();