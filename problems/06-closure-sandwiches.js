/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add 
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/

const sandwichMaker = () => {
  let sandwich = "One sandwich with tomato";

  let addIngredient = (ingredient) => {
    sandwich = sandwich + " and " + ingredient;
    return sandwich;
  }

  return addIngredient;
}

// let functionObject = {
//   name: "addIngredient",
//   arguments: [ingredient],
//   caller: "",
//   functionAction: {
//     let sandwich = "One sandwich with " + ingredient
//     return sandwich;
//   },
//   executionContext: {
//     sandwich: "One sandwich with tomato",
//   }
// }


// let sandwich = sandwichMaker();
// console.log(sandwich("ingred 1"));
// console.log(sandwich("ingred 2"));
// console.log(sandwich("jelly"));

// let sandwich = "One sandwich with tomato";
// let addIngredientTwo = (ingredient) => {
//   sandwich = sandwich + " and " + ingredient;
//   return sandwich;
// }

// console.log(addIngredientTwo("peant butter"));
// console.log(addIngredientTwo("jelly"));
// console.log(addIngredientTwo("banana"));






/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
