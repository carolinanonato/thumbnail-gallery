const imgMain = document.querySelector(".img-main")
const imgOne = document.querySelector(".img-one");
const imgTwo = document.querySelector(".img-two");
const imgThree = document.querySelector(".img-three");

//MY FIRST SOLUTION

// let changeImageOne = () => {
//     let newMainImg = imgOne.getAttribute("src");
//     let newMainAlt = imgOne.getAttribute("alt");
//     imgMain.setAttribute("src", newMainImg);
//     imgMain.setAttribute("alt", newMainAlt);
// }

// let changeImageTwo = () => {
//     let newMainImg = imgTwo.getAttribute("src");
//     let newMainAlt = imgTwo.getAttribute("alt");
//     imgMain.setAttribute("src", newMainImg);
//     imgMain.setAttribute("alt", newMainAlt);
// }

// let changeImageThree = () => {
//     let newMainImg = imgThree.getAttribute("src");
//     let newMainAlt = imgThree.getAttribute("alt");
//     imgMain.setAttribute("src", newMainImg);
//     imgMain.setAttribute("alt", newMainAlt);
// }

// imgOne.addEventListener('click', changeImageOne);
// imgTwo.addEventListener('click', changeImageTwo);
// imgThree.addEventListener('click', changeImageThree);
   
    

//other solution

// imgOne.addEventListener('click', function() {
//     const url = imgOne.getAttribute('src');
//     imgMain.setAttribute('src', url);
// })

// imgTwo.addEventListener('click', function() {
//     const url = imgTwo.getAttribute('src');
//     imgMain.setAttribute('src', url);
// })


// imgThree.addEventListener('click', function() {
//     const url = imgThree.getAttribute('src');
//     imgMain.setAttribute('src', url);
// })


// better solutiom

// const setLargeImgSrc = function (img) {
//     const url = img.getAttribute('src')
//     imgMain.setAttribute('src', url)
// }

// imgOne.addEventListener('click', function() {
//     setLargeImgSrc(imgOne);
// })

// imgTwo.addEventListener('click', function() {
//     setLargeImgSrc(imgTwo);
// })

// imgThree.addEventListener('click', function() {
//     setLargeImgSrc(imgThree);
// })

//even better 


// const setLargeImgSrc = function (img) {
//     const url = img.getAttribute('src')
//     imgMain.setAttribute('src', url)
// }

// const handleThumbClick = function(event){
//     setLargeImgSrc(event.target)
// }

// imgOne.addEventListener('click', handleThumbClick);
// imgTwo.addEventListener('click', handleThumbClick);
// imgThree.addEventListener('click', handleThumbClick);


//part b of previously -- REAL THE BEST


const handleThumbClick = function(event){
    const thumb = event.target
    const url = thumb.getAttribute(`src`)
    imgMain.setAttribute('src' , url)
  
}

imgOne.addEventListener('click', handleThumbClick);
imgTwo.addEventListener('click', handleThumbClick);
imgThree.addEventListener('click', handleThumbClick);

