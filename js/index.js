// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
  button: true
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });


}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPeppers => {
    if (state.greenPeppers) {
      oneGreenPeppers.style.visibility = 'visible';
    } else {
      oneGreenPeppers.style.visibility = 'hidden';
    }
  });
}


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(oneWhiteSauce => {
    if (state.whiteSauce) {
      oneWhiteSauce.style.visibility = 'visible';
    } else {
      oneWhiteSauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(oneGlutenFreeCrust => {
    if (state.glutenFreeCrust) {
      oneGlutenFreeCrust.style.visibility = 'visible';
    } else {
      oneGlutenFreeCrust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  const btnPepperoni = document.querySelector('.btn-pepperoni');
  if (state.pepperoni === true) {
    btnPepperoni.classList.add('active');
  } else {
    btnPepperoni.classList.remove('active');
  }

  const btnMushrooms = document.querySelector('.btn-mushrooms');
  if (state.mushrooms === true) {
    btnMushrooms.classList.add('active');
  } else {
    btnMushrooms.classList.remove('active');
  }
 
  const btnGreenPeppers = document.querySelector('.btn-green-peppers');
  if (state.greenPeppers === true) {
    btnGreenPeppers.classList.add('active');
  } else {
   btnGreenPeppers.classList.remove('active');
  }

  const btnWhiteSauce = document.querySelector('.btn-sauce');
  if (state.whiteSauce === true) {
    btnWhiteSauce.classList.add('active');
  } else {
    btnWhiteSauce.classList.remove('active');
  }

  const btncrust = document.querySelector('.btn-crust');
  if (state.glutenFreeCrust === true) {
    btncrust.classList.add('active');
  } else {
    btncrust.classList.remove('active');
  }
}
  

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const price = document.querySelector('.price ul');
  const totalPrice = document.querySelector('.price strong');
  let listItems = '';
  let total = 10;
  totalPrice.innerHTML = `$${total}`;
  if (state.pepperoni === true) {
    listItems += `<li>$1 pepperoni</li>`
    total += 1;
  }

  if (state.mushrooms === true) {
    listItems += `<li>$1 mushrooms</li>`
    total += 1;
  }

  if (state.greenPeppers === true) {
    listItems += `<li>$1 Green Peppers </li>`
    total += 1;
  }

  if (state.whiteSauce === true) {
    listItems += `<li>$3 White Sauce </li>`
    total += 3;
  }

  if (state.glutenFreeCrust === true) {
    listItems += `<li>$5 Gluten Free </li>`
    total += 5;
  }

  price.innerHTML = listItems;
  totalPrice.innerHTML= `$${total}`;
  
}



renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});



// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});

