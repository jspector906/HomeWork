const pizzaToppings = ["Pineapple", "Cheese", "Ham", "Tomatoes"];

for (let pizzatopping of pizzaToppings) {
 console.log(pizzatopping);
  }
  function greetCustomer() {
  return `Welcome to Dominos. Our pizza toppings are ${pizzaToppings}`;
}


function getPizzaOrder(size, crust, ...toppings) {
return `One ${size} ${crust} crust pizza with ${toppings} coming up!`;
}

let choices = ["medium", "thick", "cheese", "ham"];
function preparePizza(choices) {
  console.log("Pizza in Progress")
}

let orderup = {size:"medium", crust:"thick", toppings:"cheese, ham"}
function servePizza(orderup) {
    return `Order up! Here's your ${size} ${crust} crust pizza with ${toppings}. Enjoy!`;
}