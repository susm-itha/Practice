function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received successfully");
    }, 2000);
  });
}

getData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received successfully");
    }, 2000);
  });
}
async function fetchData() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

//error handling
async function functionName() {
  try {
    // asynchronous code
  } catch (error) {
    // handle error
  } finally {
  }
}