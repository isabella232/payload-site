var w = window.outerWidth;
      function viewChange(){
        w = window.outerWidth;
        if(w<=736){
          document.getElementById('navbar').style.display="none";
        }
        else{
          document.getElementById('navbar').style.display="inline";
        }
        if(w<=1024){
          $('.powerBack').css({top:10, position:'absolute'});
          $('.powerP').css({display:'block'});
        }
        if(w<=736){
          $('#ALAN').attr('src',"img/2.png");
          $('#payloadCustomer').attr('src',"img/1.png");
          $('#credCard').attr('src',"img/3.png");
          $('#martian').attr('src',"img/4.png");
        }
        else if(w>=736){
          $('#ALAN').attr('src',"img/ALAN 2.png");
          $('#payloadCustomer').attr('src',"img/Payload Customer 2.png");
          $('#credCard').attr('src',"img/Credit Card Attack 2.png");
          $('#martian').attr('src',"img/Martian 2.png");
        }
        //$('#scrollspy').css('margin-bottom','64px');
        scrollChange();
      }
      function drop(){
        if(document.getElementById('navbar').style.display=="none"){
          document.getElementById('navbar').style.display="inline";
          //$('#scrollspy').css('margin-bottom','119px');
        }
        else{
          document.getElementById('navbar').style.display="none";
          //$('#scrollspy').css({bottom:64, position:'fixed'});
          //$('#scrollspy').css('margin-bottom','64px');
        }
      }
      function scrollChange(){
        var height = $(window).scrollTop();
        w = window.outerWidth;
        if(height>=1260){
          //$('#scrollspy').css('display','block');
        }
        else{
          //$('#scrollspy').css('display','none');
        }
        if(w>736){
          if(height>=1890){
            //$('#scrollspy').css('display','none');
            $('#nav').css('display','none');
          }
          else {
            $('#nav').css('display','block');
          }
          if(w>1600){
            $('#nav').css('display','none');
          }
        }
        else{
          $('#nav').css('display','block');
        }
        if(w<=736){
          
          if((height>1260) && (height<1890)){
            $('#powerMonitor').css('display','block');
            $('#worksMonitor').css('display','none');
            $('#testimonialsMonitor').css('display','none');
            $('#merchantsMonitor').css('display','none');
          }
          else if((height>1890) && (height<12520)){
            $('#powerMonitor').css('display','none');
            $('#worksMonitor').css('display','block');
            $('#testimonialsMonitor').css('display','none');
            $('#merchantsMonitor').css('display','none');
          }
          else if((height>2520) && (height<3150)){
            $('#powerMonitor').css('display','none');
            $('#worksMonitor').css('display','none');
            $('#testimonialsMonitor').css('display','block');
            $('#merchantsMonitor').css('display','none');
          }
          else if((height>3150)){
            $('#powerMonitor').css('display','none');
            $('#worksMonitor').css('display','none');
            $('#testimonialsMonitor').css('display','none');
            $('#merchantsMonitor').css('display','block');
          }
          */
          /*
          if((height>630) && (height<1260)){
            $('#powerMonitor').show();
            $('#worksMonitor').hide();
            $('#testimonialsMonitor').hide();
            $('#merchantsMonitor').hide();
          }
          else if((height>1260) && (height<1890)){
            $('#powerMonitor').hide();
            $('#worksMonitor').show();
            $('#testimonialsMonitor').hide();
            $('#merchantsMonitor').hide();
          }
          else if((height>1890) && (height<2520)){
            $('#powerMonitor').hide();
            $('#worksMonitor').hide();
            $('#testimonialsMonitor').show();
            $('#merchantsMonitor').hide();
          }
          else if((height>2520) && (height<31500)){
            $('#powerMonitor').hide();
            $('#worksMonitor').hide();
            $('#testimonialsMonitor').hide();
            $('#merchantsMonitor').show();
          }
          */
        }
        else{
          
          $('#powerMonitor').css('display','block');
          $('#worksMonitor').css('display','block');
          $('#testimonialsMonitor').css('display','block');
          $('#merchantsMonitor').css('display','block');
          
        }
      }
      $(document).ready(function(){
        $('#safe').hover(function(){
          if(w>1024){
            $('#safeP').slideToggle(736);
            $('#safeBack').animate({top:'+=300px'},736);
          }
        },
        function(){
          if(w>1024){
            $('#safeP').slideToggle(736);
            $('#safeBack').animate({top:'-=300px'},736);
          }
        });
        $('#instant').hover(function(){
          if(w>1024){
            $('#instantP').slideToggle(736);
            $('#instantBack').animate({top:'+=300px'},736);
          }
        },
        function(){
          if(w>1024){
            $('#instantP').slideToggle(736);
            $('#instantBack').animate({top:'-=300px'},736);
          }
        });
        $('#free').hover(function(){
          if(w>1024){
            $('#freeP').slideToggle(736);
            $('#freeBack').animate({top:'+=340px'},736);
          }
        },
        function(){
          if(w>1024){
            $('#freeP').slideToggle(736);
            $('#freeBack').animate({top:'-=340px'},736);
          }
        });
        $(window).scroll(function(){

        });
      });