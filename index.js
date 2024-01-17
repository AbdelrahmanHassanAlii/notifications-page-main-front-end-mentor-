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
  });
});

// handle click on "mark all as read"

