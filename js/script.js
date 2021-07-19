

//========================for buttons==================================
$('button').on('click', function() {
   $('button').removeClass('active');
   $(this).addClass('active');
})
//========================for slider===================================
$(document).ready(function(){
   $('.slider').slick({
    speed: 1400,
    autoplay: false,
    infinite: false,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    dots: true,
    arrows: true,
    appendDots:$('.slider_dots'),
    responsive: [
        {
            breakpoint: 480,
            settings: { 
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
   
})        
})  
//
//==================================sort_for_best===================================================

function sort_for_best() {
    $('.naming').html('Best Quadrocopters')  
    let Container = document.getElementById('Container')
    let AllSpan = Container.querySelectorAll('span');
    let itemsArray = [];
        for (i = 0; i < AllSpan.length; i++) {
        let span_marks = AllSpan[i].innerText;
        itemsArray.push(span_marks); 
            for (i = 0; i < itemsArray.length ; i++) {
            if (itemsArray[i] < 4 ) 
            return false;
            }      
        }
    }
    $('#Best').on( 'click' , function(event){
    $('.slider').slick('slickRemove', sort_for_best())
    
    })          
         
//==================================sort_for_Cheap(the easiest way)===================================================
                var filteredCheap = false;
                $('#Cheap').on('click', function(event){
                  if (filteredCheap === false) {
                    $('.slider').slick('slickFilter',':odd');
                    $('.slick-dots').addClass('invisible');
                    $('.draggable').removeClass('slick-list');
                    $('#Container').addClass('locationbox');
                    $('.naming').html('Cheap Quadrocopters');
                    filteredCheap = true;
                    } 
                    
                //   else {
                //     $('.slider').slick('slickUnfilter');
                //     $('.slick-dots').removeClass('invisible');
                //     $('.draggable').addClass('slick-list');
                //     $('#Container').removeClass('locationbox');
                //     $('.naming').html('All Quadrocopters');
                //     filteredCheap = false;
                //   }
                });
//==================================sort_for_Cheap(NOT WORKING)===================================================
//  function sort_for_cheap() {
//             Container = document.getElementById('Container')
//             let Allprices  = Container.querySelectorAll('div .price');
//             let ArrForCheap = [];
//                 for (i = 0; i < Allprices.length; i++) {
//                 let val_price = Allprices[i].innerText;
//                 ArrForCheap.push(val_price); 
//                 }  
//                 var minPrice = Math.min(...ArrForCheap)
//                 //ArrForCheap.sort((a,b) => a - b)
//                 for (i = 0; i < ArrForCheap.length; i++) {
//                 if (minPrice != ArrForCheap[i]){
//                 console.log(ArrForCheap[i]);
//                 return  $('.slider').slick('slickRemove',false);
//                 }
//             }
//                  $('#Cheap').on( 'click', function(event){
 //                 $('.slider').slick('slickRemove', sort_for_cheap())
 //                 })
//  }
              
//==================================sort_for_Fast()===================================================
        var filteredFast = false;
        $('#Fast').on( 'click' , function(event){
            if (filteredFast === false) {
                $('.slider').slick('slickFilter',':first');
                $('.slick-dots').addClass('invisible');
                $('.draggable').removeClass('slick-list');
                $('#Container').addClass('locationbox');
                $('.naming').html('Fast Quadrocopters');
                filteredFast = true;
            }
            
        }) 
       
    

     
    
    

        
    
    
    

//==========================for inputs ===========================================
$(document).ready(function(){
    $('#phone').mask("+375 (99) 999-99-99")
})

$(document).ready(function() {
    $('#form_for_inputs').submit(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var phone = $('#phone').val();
        var modal = document.getElementById("myModal");
        var btn = document.getElementById("myBtn");
        var span = document.getElementsByClassName("close")[0];
      $(".error").remove();
   
      if (name.length< 1) {
        $('#name').after('<span class="error">This field is required</span>');
      }
      if (phone.length< 1) {
        $('#phone').after('<span class="error">This field is required</span>');
      }
      if (name.length > 1 && phone.length > 1 ){
        
        function OpenModal(){
        modal.style.display = "block";
        } 
        btn.addEventListener('click', OpenModal() ) 
        span.onclick = function() {
        modal.style.display = "none";
        }  
    }
    });
});