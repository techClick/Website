var thisSlide = 1;
var timer;
function slideImages( slideQuick ){
    function slide(){
        var img = document.getElementById('picShow');
        var dots = document.getElementsByClassName('dot');
        var images = ['images/img1.jpg','images/img3.jpg','images/img4.jpg','images/img5.jpg','images/img2.jpg'];
        if (thisSlide < images.length){
            thisSlide=thisSlide+1;
        }else{
            thisSlide=1;
        }
        for(i=0;i<dots.length;i++){
            dots[i].id = "none";
        }
        img.innerHTML = "<img src="+images[thisSlide-1]+" id='active'>";
        dots[thisSlide-1].id = "activeDots";
    }
    if( slideQuick ){
        slide()
    }
    timer = setInterval(slide,2500);
}
function slideThis( n ){
    thisSlide = n;
    clearInterval(timer);
    slideImages( true )
}