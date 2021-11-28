const imgMain = document.querySelector(".img-main")
const imgOne = document.querySelector(".img-one");
const imgTwo = document.querySelector(".img-two");
const imgThree = document.querySelector(".img-three");

//imgOne.addEventListener('click', changeImg);
//imgThree.addEventListener('click', changeImg);

let changeImageOne = function () {
    let newMain = imgOne.getAttribute("src");
    imgMain.setAttribute("src", newMain);
}

let changeImageTwo = function () {
    let newMain = imgTwo.getAttribute("src");
    imgMain.setAttribute("src", newMain);
}

let changeImageThree = function () {
    let newMain = imgThree.getAttribute("src");
    imgMain.setAttribute("src", newMain);
}

imgOne.addEventListener('click', changeImageOne);
imgTwo.addEventListener('click', changeImageTwo);
imgThree.addEventListener('click', changeImageThree);
   
    


