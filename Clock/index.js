// setInterval(function(){let d = new Date();
//     let time = d.toLocaleTimeString();
//     $("h1").html(time);}
//     ,1000);
    







setInterval(newTime,1000);


function newTime()
{    
let d = new Date();  
let time = d.toLocaleTimeString();
let hour=d.getHours();
 
 $("h1").html(time);


     if(hour>=4 && hour<12)
     {
        $("button").html("Good Morning");
        $("body").css("background-color","#e8817f");
     }
     
    else if(hour>=12 && hour<16)
     {
         $("body").css("background-color","#c3727c");
         $("button").html("Good Afternoon");
        }
        
       else if(hour>=16 && hour<19)
        {
           $("button").html("Good Evening");
           $("body").css("background-color","#8d5273");
        }

        else if(hour>=19 && hour<4)
        {
            $("button").html("Good Night");
            $("body").css("background-color","#311f62");
        }

        
}



