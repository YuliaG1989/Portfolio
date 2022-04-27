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
////////////////////////////////////////////////////////////////////////


//////////////////////////Projects 'OnClick/////////////////////////////
$('.hidden-pj1').css('display', 'none')
$('#pj1').css('cursor', 'pointer')
$('#pj1').on('click',function(){
    $('.hidden-pj1').slideDown()
})
$('#pj1').on('dblclick',function(){
        $('.hidden-pj1').slideUp()
})

$('.hidden-pj2').css('display', 'none')
$('#pj2').css('cursor', 'pointer')
$('#pj2').on('click',function(){
    $('.hidden-pj2').slideDown()
})
$('#pj2').on('dblclick',function(){
        $('.hidden-pj2').slideUp()
})

$('.hidden-pj3').css('display', 'none')
$('#pj3').css('cursor', 'pointer')
$('#pj3').on('click',function(){
    $('.hidden-pj3').slideDown()
})
$('#pj3').on('dblclick',function(){
        $('.hidden-pj3').slideUp()
})


$('.hidden-pj4').css('display', 'none')
$('#pj4').css('cursor', 'pointer')
$('#pj4').on('click',function(){
    $('.hidden-pj4').slideDown()
})
$('#pj4').on('dblclick',function(){
        $('.hidden-pj4').slideUp()
})

$('.hidden-pj5').css('display', 'none')
$('#pj5').css('cursor', 'pointer')
$('#pj5').on('click',function(){
    $('.hidden-pj5').slideDown()
})
$('#pj5').on('dblclick',function(){
        $('.hidden-pj5').slideUp()
})

})