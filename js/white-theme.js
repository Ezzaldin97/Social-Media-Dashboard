$(document).ready(function(){
   $('#mode-btn').click(function(){
       $('body').toggleClass('wbg'); 
       $('#container #header #header-title h2').toggleClass('dfc');  
       $('#mode-btn').toggleClass('mode-body-wbg');    
       $('#mode-btn #mode-toggle').toggleClass('wbg-right');    
       $('#container #social-media-platforms .sm-section').toggleClass('card-wbg');
       $('#container #social-media-platforms .sm-section h1').toggleClass('card-w-text');
       $('#container #social-media-overview h3').toggleClass('w-text');
       $('#container #social-media-overview #social-media-overview-sections .row .section').toggleClass('card-wbg');
       $('#container #social-media-overview #social-media-overview-sections .row .section div h3').toggleClass('d-text');
   });
});