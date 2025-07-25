const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 settled")
    }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 settled");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p3 rejectyed");
  }, 1000);
});

Promise.allSettled([p1, p2, p3])
    .then((res) =>{
        console.log(res);  
    })
    .catch((err)=>{
        console.error(err)
    });
                 [p]