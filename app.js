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

$('.AboutMe').css('display', 'none')



$('#slideDown').css('cursor', 'pointer')
$('#slideDown').on('click', function(){
    $('.AboutMe').slideDown()
})
 

$('#slideUp').css('cursor', 'pointer')
$('#slideUp').on('click', function(){
    $('.AboutMe').slideUp()
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



//////////////////////////Hamburger Menu/////////////////////////////

const $ham = $('.ham')
const $nav = $('.nav')

$ham.on('click', function(){
    $nav.slideToggle()})



//////////////////////////Socials Toggle/////////////////////////////

const $social = $('#social').css('cursor', 'pointer')
const $socButtons =$('.socials')

$social.on('click', function(){
    $socButtons.slideToggle()})



//////////////////////////Main Page Slides/////////////////////////////
$('.skills').css('display', 'none')

$('#slideDownSkills').css('cursor', 'pointer')
$('#slideDownSkills').on('click', function(){
    $('.skills').slideDown()
})
$('#slideUpSkills').css('cursor', 'pointer')
$('#slideUpSkills').on('click', function(){
    $('.skills').slideUp()
})

///////////////////////////

$('.project-carousel').css('display', 'none')

$('#slideDownWork').css('cursor', 'pointer')
$('#slideDownWork').on('click', function(){
    $('.project-carousel').slideDown()
})

$('#slideUpWork').css('cursor', 'pointer')
$('#slideUpWork').on('click', function(){
    $('.project-carousel').slideUp()
})



/////////////Resume Slides /////////////

$(document).ready(function(){
    $('.education').hide()
    $('.education').slideDown('slow')
})
$(document).ready(function(){
    $('.working').hide()
    $('.working').slideDown('slow')
})

////////Contact Slides//////////////
$(document).ready(function(){
    $('.reach').hide()
    $('.reach').slideDown('slow')
})

////////Contact Slides//////////////
$(document).ready(function(){
    $('.projects').hide()
    $('.projects').slideDown('slow')
})

//////////Adding Welcome Message/////////
const $welcome = $('.welcome')
const $closeButton = $('#close').css('cursor', 'pointer')

$(document).ready(function startWelcome (){
    $welcome.css('display', 'block')
})


function closeWelcome(){
    $welcome.css('display', 'none')

}
setTimeout(closeWelcome, 2000)




// $closeButton.on('click', closeWelcome)
///////////////Home Button Hover/////////////

const $cat = $('.cat')

$cat.css('cursor', 'pointer')
$cat.hover( function(){
    $('.home').toggle()})




})

