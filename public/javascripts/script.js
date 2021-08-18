// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i])
}

// Iteration 1 using callbacks
addFood(steak[0], '#steak', () => {
  // ... your code here
  addFood(steak[1], '#steak', () => {
    addFood(steak[2], '#steak', () => {
      addFood(steak[3], '#steak', () => {
        addFood(steak[4], '#steak', () => {
          addFood(steak[5], '#steak', () => {
            addFood(steak[6], '#steak', () => {
              addFood(steak[7], '#steak', () => {
              })
            })
          })
        })
      })
    })
  })
});



// Iteration 2 using `.then()`
addFood(mashPotatoes[0], '#mashPotatoes')
.then(() => { 
  addFood(mashPotatoes[1], '#mashPotatoes')
}).then(() =>{
  addFood(mashPotatoes[2], '#mashPotatoes')
}).then(() =>{
  addFood(mashPotatoes[3], '#mashPotatoes')
}).then(() =>{
  addFood(mashPotatoes[4], '#mashPotatoes')
});


// Iteration 3 using async/await

  // async function makeFood(step) {
  //   addFood(brusselSprouts[0])
  // }
  // makeFood(eachStep);

  addFood(brusselSprouts[0], '#brusselSprouts')
.then(() => { 
  addFood(brusselSprouts[1], '#brusselSprouts')
}).then(() =>{
  addFood(brusselSprouts[2], '#brusselSprouts')
}).then(() =>{
  addFood(brusselSprouts[3], '#brusselSprouts')
}).then(() =>{
  addFood(brusselSprouts[4], '#brusselSprouts')
}).then(() =>{
  addFood(brusselSprouts[5], '#brusselSprouts')
}).then(() =>{
  addFood(brusselSprouts[6], '#brusselSprouts')
}).then(() =>{
  addFood(brusselSprouts[7], '#brusselSprouts')
}).then(() =>{
  addFood(brusselSprouts[8], '#brusselSprouts')
});

