$(() => {

//////////////////Projects Carousel///////////////////////////////////
   let currentImage = 0
   const numOfImages = $('.carousel').children().length - 1
$('#next').on('click', function(){
    $('.carousel').children().eq(currentImage).css('display', 'none')
    if (currentImage < numOfImages){
        currentImage ++
    }else{
        currentImage = 0 
    } $('.carousel').children().eq(currentImage).css('display', 'block')

})
$('#prev').on('click', function(){
    $('.carousel').children().eq(currentImage).css('display', 'none')
    if (currentImage > 0){
        currentImage --
    }else{
        currentImage = numOfImages
    } $('.carousel').children().eq(currentImage).css('display', 'block')

})
////////////////////////////////////////////////////////////////////////

//////////////////About Me and Close buttons 'onClick' /////////////////
$('.second-half').css('display', 'none')

$('.slideDown').css('cursor', 'pointer')
$('.slideDown').on('click', function(){
    $('.second-half').slideDown()
})
$('.slideUp').css('cursor', 'pointer')
$('.slideUp').on('click', function(){
    $('.second-half').slideUp()

})
})