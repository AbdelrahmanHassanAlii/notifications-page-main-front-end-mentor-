let unReadedBoxes = document.querySelectorAll(`.box.un-readed`);
let bullets = document.querySelectorAll(`.box.un-readed .dot`);

// handle click on box
unReadedBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    //get the dot from the now clicek box
    let bullet = box.querySelector(".dot");
    //remove it
    bullet.style.display = "none";
    //change the background
    box.style.backgroundColor = "white";
    // decrease the number of notifications till 0 per condition
    let currentValue = parseInt(number.innerHTML);
    if (currentValue > 0) {
      number.innerHTML = currentValue - 1;
    }
  });
});

// handle click on "mark all as read"
let button = document.querySelector(`.option`);
let number = document.querySelector(`.number`);

button.addEventListener("click", () => {
  //remove all bullets
  bullets.forEach((bullet) => {
    bullet.style.display = "none";
  });
  //change all boxex background colors
  unReadedBoxes.forEach((box) => {
    box.style.backgroundColor = "white";
  });
  // reset the number of notifications to 0
  number.innerHTML = "0";
});
