var imgFeature = document.querySelector('.img-feature')
var listImg = document.querySelectorAll('.list-image img')
var prevBtn = document.querySelector('prev')
var nextBnt = document.querySelector('next')

var currentIndex = 0;
function updateImageByIndex(index) {

    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active')
    })
    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src')
    listImg[index].classList.add('active')
}


listImg.forEach(imgElement => {

    imgElement.addEventListener('click', e => {
        updateImageByIndex(index)
    })
})

prevBtn.addEventListener('click', e => {

})
updateImageByIndex(0)