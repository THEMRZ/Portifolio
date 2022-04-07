$(document).ready(function(){
    $('.slick__company').slick({
        infinite: false,
        vertical: true,
        speed: 300,
        cssEase: 'ease-in-out',
        verticalSwiping:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:'<button class="slick__btn"><i class="fa-solid fa-arrow-up"></i></button>',
        nextArrow: '<button class="slick__btn"><i class="fa-solid fa-arrow-down"></i></button>' 
    });

    var scene = document.getElementById('background');
    var parallax = new Parallax(scene);

    function getAge(dateString) {
        var ageInMilliseconds = new Date() - new Date(dateString);
        return Math.floor(ageInMilliseconds/1000/60/60/24/365);
     }
     document.getElementById('idade').textContent = (getAge('1993-11-07'));
  });


function showCompany(company){
    const stef =  document.getElementById('stefanini');
    const am4 =  document.getElementById('am4');
    const am4btn =  document.getElementById('am4_btn');
    const stefbtn =  document.getElementById('stef_btn');

    switch (company){
        case 1:
            if (!stef.classList.contains("active"))
            {
                am4btn.classList.remove("active");
                am4.classList.remove("active");
                am4.firstElementChild.classList.remove("active");

                stef.classList.add("active");
                stefbtn.classList.add("active");
                setTimeout(function(){
                    stef.firstElementChild.classList.add("active");
                 }, 100);    
            }
        break;
        case 2:
            if (!am4.classList.contains("active"))
            {
                stefbtn.classList.remove("active");
                stef.classList.remove("active");
                stef.firstElementChild.classList.remove("active");

                am4.classList.add("active");
                am4btn.classList.add("active");                
                setTimeout(function(){
                    am4.firstElementChild.classList.add("active");
                 }, 100);    
            }
        break;
    }
}