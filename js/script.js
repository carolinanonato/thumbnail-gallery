const imgMain = document.querySelector(".img-main")
const imgOne = document.querySelector(".img-one");
const imgTwo = document.querySelector(".img-two");
const imgThree = document.querySelector(".img-three");

//imgOne.addEventListener('click', changeImg);
//imgThree.addEventListener('click', changeImg);

let changeImageOne = function () {
    let newMainImg = imgOne.getAttribute("src");
    let newMainAlt = imgOne.getAttribute("alt");
    imgMain.setAttribute("src", newMainImg);
    imgMain.setAttribute("alt", newMainAlt);
}

let changeImageTwo = function () {
    let newMainImg = imgTwo.getAttribute("src");
    let newMainAlt = imgTwo.getAttribute("alt");
    imgMain.setAttribute("src", newMainImg);
    imgMain.setAttribute("alt", newMainAlt);
}

let changeImageThree = function () {
    let newMainImg = imgThree.getAttribute("src");
    let newMainAlt = imgThree.getAttribute("alt");
    imgMain.setAttribute("src", newMainImg);
    imgMain.setAttribute("alt", newMainAlt);
}

imgOne.addEventListener('click', changeImageOne);
imgTwo.addEventListener('click', changeImageTwo);
imgThree.addEventListener('click', changeImageThree);
   
    


