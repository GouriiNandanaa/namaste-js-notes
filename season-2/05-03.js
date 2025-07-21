const apiUrl = "https://api.github.com/users/GouriiNandanaa";

async function handlePromise() {
  const data = await fetch(apiUrl);
  console.log(data);
  const jsonValue = await data.json();
}

handlePromise();
       