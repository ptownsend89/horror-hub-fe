let  imgIndex = 1;
showImg(imgIndex);

//Prev/next image display:
function navImgs(n){
    showImg(imgIndex +=n);
}

function showImg(n){
    //build array of imaged from class name popularImgs:
    let imgSet = Document.getElementsByClassName(popularImgs.innerHTML);

    //if current index n is more than final index:
    if (n > imgSet.length) {
        imgIndex = 1;
    }

    //If current index n is less than 1 set to highest index:
    if (n < 1) {
        imgIndex = imgSet.length;
    }

    //now set displayimg div class to imgSet array index?:
    displayimg.innerHTML = imgSet[imgIndex];
}