const fullImgBox = document.querySelector("#fullimg-box")
const fullImg = document.querySelector("#fullimg")
const imgGallery = document.querySelector(".img-gallery")
const btnEle = document.querySelector(".btn")

function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src = pic
}
function closeFullImg() {
    fullImgBox.style.display = "none";
}

btnEle.addEventListener("click", function () {
    // console.log("u click me")
    imgNum = 6
    updateImg()
})

function updateImg() {
    for (let i = 0; i < imgNum; i++) {
        const newImg = document.createElement("img")
        newImg.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`
        imgGallery.appendChild(newImg)
    }

}