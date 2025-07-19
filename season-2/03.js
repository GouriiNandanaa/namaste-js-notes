const cart = ["shoes", "pants", "kurta"];
createApi(cart)
.then(function (orderId) {
  //   proceedToPayment(orderId);
  console.log(orderId);
  return orderId;
})
.then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function(){

})
.catch(function(err){
    console.log(err.message)
}); 

function createApi(cart) {
  const promise = new Promise(function (resolve, reject) {
    // createorder
    // validatecart
    // orderId
    if (!validateCart(cart)) {
      const err = new Error("cart is not available");
      reject(err);
    }
    const orderId = "989989899889";
    if (orderId) {
      setTimeout(() => {
        resolve(orderId);
      }, 5000);
    }
  });

  return promise;
}

function validateCart(card) {
  return false;
}  

function proceedToPayment(orderId){
    // handling the promise
    return new Promise(function(resolve, reject){
        resolve("payment succesful")
    });
}
                 