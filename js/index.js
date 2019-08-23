

var imgList  =document.querySelectorAll(".img-item");

var lightBoxCotainer = document.querySelector(".lightBox-container")

var close = document.getElementById("close")


var lightBox =document.querySelector(".lightBox")

var imageArray = [];
var currentIndex;
var next = document.getElementById("next")
var prev = document.getElementById("prev")


for(var i=0 ;i<imgList.length;i++)
    {
        
        imageArray.push(imgList[i])
        
        
        //////////////////// Event El click
            imgList[i].addEventListener("click",function(ev){
                
                
               currentIndex= imageArray.indexOf(ev.target)
                
                var imagPath = ev.target.src;
    lightBox.style.backgroundImage="url("+imagPath+")"
                lightBoxCotainer.classList.add("show")

            })
    }

next.addEventListener("click",function(){
    
    
    currentIndex=   ++currentIndex;
    
    if(currentIndex >= imgList.length)
        {
            currentIndex=0;
        }
    
    var x= imgList[currentIndex].src
    lightBox.style.backgroundImage= "url('"+x+"')"
    
    
})


prev.addEventListener("click",function(){
    
       
    currentIndex=   --currentIndex;
    
    if(currentIndex < 0)
        {
            currentIndex=  imgList.length-1  ;
        }
    
    var x= imgList[currentIndex].src
    lightBox.style.backgroundImage= "url('"+x+"')"
    
    
})



close.addEventListener("click",function(){
    
    lightBoxCotainer.classList.remove("show")
    
    
})




//right 39

//left 37

//right 27


document.addEventListener("keydown",function(ev){
    
    //right
    if(ev.keyCode == 39)
        {
             
            currentIndex=   ++currentIndex;

            if(currentIndex >= imgList.length)
                {
                    currentIndex=0;
                }

            var x= imgList[currentIndex].src
            lightBox.style.backgroundImage= "url('"+x+"')"
    
        }
    
    else if(ev.keyCode == 37)
        {
              

            currentIndex=   --currentIndex;

            if(currentIndex < 0)
                {
                    currentIndex=  imgList.length-1  ;
                }

            var x= imgList[currentIndex].src
            lightBox.style.backgroundImage= "url('"+x+"')"
        }
    
    else if(ev.keyCode == 27)
        {
             
    lightBoxCotainer.classList.remove("show")
        }
    
 /*   else
        {
            alert("this key not handeld")
        }
   */ 
    
    
})























