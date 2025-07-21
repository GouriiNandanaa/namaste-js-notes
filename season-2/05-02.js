const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("resolved");
  }, 1000);
});

async function handlePromise() {
  const val = await p;
  //// js engine waits  here
  console.log("ok");
  console.log(val);
}

// handlePromise();
// the code above is the code of the async and await
// so in normal way of handling promise
// function getData(){
//     p.then(res=>console.log(res));
//// js wont wait herer
//     console.log("ho");
// }
// getData();
handlePromise();
