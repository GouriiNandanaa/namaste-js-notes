// const cart = ["shoes","pants","kurta"]

// createOrder(cart); //orderid is returned
// proceedToPayment(orderId);

// /*async operations using the callback function is like

// we have to wrap the proceedToPaymnent api calling into a function and pass that to createOrder
// so its the responsibility of the createOrder api to call the second one once it recieves the orderId
// */
// createOrder(cart,function(){
//     proceedToPayment(orderId);
// });

// /* not a perfect way since it can cause many problems
// refer the manual notes
// */

// const promise = createOrder(cart);
// // {data: undefined}
// // later   {data: orderDetails};

const githubApi = "https://api.github.com/users/AshwinT42";

const user = fetch(githubApi);
// user
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// user
//   .then(function (data) {
//     console.log(data);
//     return data.json();
//   })
//   .then((data) => console.log(data))
//   .catch(function (err) {
//     console.log("err", err);
//   });



createOrder(cart)
.then(function(orderId){
    proceedToPayment(orderId);
})

