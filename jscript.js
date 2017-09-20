$("#home-icon").on("mouseover", function(){
            $("#mtavari").fadeIn(200);
            $("#mtavari").css({"display": "inline", "margin-top": "5px", "margin-left": "-10px"});
        });
        $("#home-icon").on("mouseleave", function(){
            $("#mtavari").fadeOut(200);
        });

        $("#info-icon").on("mouseover", function(){
            $("#shesaxeb").fadeIn(200);
            $("#shesaxeb").css({"display": "inline", "margin-top": "5px"});
        });
        $("#info-icon").on("mouseleave", function(){
            $("#shesaxeb").fadeOut(200);
        });

        $("#mail-icon").on("mouseover", function(){
            $("#kontaqti").fadeIn(200);
            $("#kontaqti").css({"display": "inline", "margin-top": "5px"});
        });
        $("#mail-icon").on("mouseleave", function(){
            $("#kontaqti").fadeOut(200);
        });
        
        $("#asidemenu .fa").on("click", function(){
            $(".activelogo").removeClass("activelogo");
            $(this).toggleClass("activelogo");
        });

        $("#scroller").on("mouseover", function(){
            $("#scroller").animate({opacity: "0.3"}, 100);
            $("#lft").animate({marginLeft: "40px"}, 100);
            $("#mouse").animate({marginLeft: "-30px"}, 100);
            $("#down1").animate({marginLeft: "45px"}, 100);
            $("#rght").animate({marginLeft: "-40px"}, 100);
            $("#mouse").css({background: "rgb(100, 100, 100)"});
        });
        $("#scroller").on("mouseleave", function(){
            $("#scroller").animate({opacity: "1"}, 100);
            $("#lft").animate({marginLeft: "10px"}, 100);
            $("#mouse").animate({marginLeft: "0px"}, 100);
            $("#down1").animate({marginLeft: "10px"}, 100);
            $("#rght").animate({marginLeft: "-5px"}, 100);
        });
        $(document).ready(function() {
            if($(window).width() <= 750){
                $("#imgdiv").hide();
                $("#fullpage").css({"width":"80%"});
            }
        });
        $(window).resize(function(){
            if ($(this).width() <= 750) {
                $("#imgdiv").hide();
                $("#fullpage").css({"width":"80%"});
            }
            else{
                $("#imgdiv").show();
                $("#fullpage").css({"width":"55%"});
            }
        });