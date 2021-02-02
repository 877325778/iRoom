var menu = document.getElementById('menu')
var nav = document.getElementById('nav')
var exit = document.getElementById('exit')
var startroom = document.getElementById('')
var rickvid = document.getElementById("rickRoll");
var shrekvid = document.getElementById("shrek");
var crabvid = document.getElementById("crab");

var calculatedDistanceRick = getDistanceBetweenElements(
    document.getElementById('MyVideo'),
    document.getElementById('rickRollDiv')
 )
var calculatedDistanceShrek = getDistanceBetweenElements(
    document.getElementById('MyVideo'),
    document.getElementById('shrekDiv')
 )
var calculatedDistanceCrab = getDistanceBetweenElements(
    document.getElementById('MyVideo'),
    document.getElementById('crabRaveDiv')
)

var rickVolume = Math.round((1000.0 - calculatedDistanceRick) /100)/10;
var shrekVolume = Math.round((300.0 - calculatedDistanceShrek) /100)/10;
var shrekbigness = Math.round((1000.0 - calculatedDistanceShrek)/100)/10;
var crabVolume = Math.round((1000.0 - calculatedDistanceCrab) /100)/10;

 console.log("Distance to Rick: " + calculatedDistanceRick);

 console.log("Distance to Shrek: " + calculatedDistanceShrek);

 console.log("Distance to Crab: " + calculatedDistanceCrab);
 
 console.log(rickVolume);
 console.log(crabVolume);
 console.log(shrekVolume);

 function positive(s){
     if (s < 0.1) {
         return  0.1;  
     } else{
         return s;
     }
 }

 

 console.log(positive(rickVolume));
 console.log(positive(shrekVolume));
 console.log(positive(crabVolume));

 rickvid.volume = positive(rickVolume);
 shrekvid.volume = positive(shrekVolume);
 crabvid.volume = positive(crabVolume);

 rickvid.width = positive(rickVolume)*400 
 rickvid.height = positive(rickVolume)*500

 shrekvid.width = positive(shrekbigness)*400
 shrekvid.height = positive(shrekbigness)*500

 crabvid.width = positive(crabVolume)*400
 crabvid.height = positive(crabVolume)*500



 
 console.log("Rick "+rickvid.volume+"%");
 console.log("Crab "+crab.volume+"%");
 console.log("Shrek "+shrek.volume+"%");
 


function getPositionAtCenter(element){
     var top = element.getBoundingClientRect().top;
     var left = element.getBoundingClientRect().left;
     var width = element.getBoundingClientRect().width;
     var height = element.getBoundingClientRect().height;
     return {
     x: left + width / 2,
     y: top + height / 2
     };
 } //calculates the middle 
 

 function getDistanceBetweenElements(a, b) {
     const aPosition = getPositionAtCenter(a);
     const bPosition = getPositionAtCenter(b);
     return Math.sqrt(
         Math.pow(aPosition.x - bPosition.x, 2) + 
         Math.pow(aPosition.y - bPosition.y, 2) 
         );  
 } //calculates the Distance


menu.addEventListener('click',function(e){
    nav.classList.toggle('hide-mobile');
    e.preventDefault();
});

exit.addEventListener('click',function(e){
    nav.classList.add('hide-mobile');
    e.preventDefault();
}); 

var localvideo = document.querySelector("#local-video");

 if (navigator.mediaDevices.getUserMedia) {
 navigator.mediaDevices.getUserMedia({ localvideo: true })
 .then(function (stream) {
 localvideo.srcObject = stream;
 })
 .catch(function (err0r) {
 console.log("Something went wrong!");
 });
 }   


 document.onkeydown = keyIsPushed;
 function keyIsPushed(e) {
     var posLeft = document.getElementById('MyVideo').offsetLeft;
     var posTop = document.getElementById('MyVideo').offsetTop;
     e = e || window.event;
     if (e.keyCode == '38') {
         // up arrow
         document.getElementById('My Video').style.marginTop  = (posTop+100)+"px";
     }
     else if (e.keyCode == '40') {
         // down arrow
         document.getElementById('MyVideo').style.marginTop  = (posTop+58)+"px";
     }
     else if (e.keyCode == '37') {
     // left arrow
         document.getElementById('MyVideo').style.marginLeft  = (posLeft-100)+"px";
     }
     else if (e.keyCode == '39') {
     // right arrow
         document.getElementById('MyVideo').style.marginLeft  = (posLeft+58)+"px";
     }

         var calculatedDistanceRick = getDistanceBetweenElements(
             document.getElementById('MyVideo'),
             document.getElementById('rickRollDiv')
             )
         var calculatedDistanceShrek = getDistanceBetweenElements(
             document.getElementById('MyVideo'),
             document.getElementById('shrekDiv')
             )
         var calculatedDistanceCrab = getDistanceBetweenElements(
             document.getElementById('MyVideo'),
             document.getElementById('crabRaveDiv')
             )
         var rickVolume = Math.round((1000.0 - calculatedDistanceRick) /100)/10;
         var shrekVolume = Math.round((400.0 - calculatedDistanceShrek) /100)/10;
         var shrekbigness = Math.round((1000.0 - calculatedDistanceShrek)/100)/10;
         var crabVolume = Math.round((1000.0 - calculatedDistanceCrab) /100)/10;


         console.log("Distance to Rick: " + calculatedDistanceRick);

         console.log("Distance to Shrek: " + calculatedDistanceShrek);

         console.log("Distance to Crab: " + calculatedDistanceCrab);

         rickvid.width = positive(rickVolume)*400 
         rickvid.height = positive(rickVolume)*500

         shrekvid.width = positive(shrekbigness)*400
         shrekvid.height = positive(shrekbigness)*500

         crabvid.width = positive(crabVolume)*400
         crabvid.height = positive(crabVolume)*500


         console.log(rickVolume);
         console.log(crabVolume);
         console.log(shrekVolume);

             
         rickvid.volume = positive(rickVolume);
         shrekvid.volume = positive(shrekVolume);
         crabvid.volume = positive(crabVolume)


 
         console.log("Rick "+rickvid.volume+"%");
         console.log("Crab "+crab.volume+"%");
         console.log("Shrek "+shrek.volume+"%");




 }


 dragElement(document.getElementById("MyVideo"));

     function dragElement(elmnt) {
         var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
         if (document.getElementById(elmnt.id )) {
         document.getElementById(elmnt.id ).onmousedown = dragMouseDown;
         } else {
         elmnt.onmousedown = dragMouseDown;
     }

     function dragMouseDown(e) {
         e = e || window.event;
         e.preventDefault();
         pos3 = e.clientX;
         pos4 = e.clientY;
         document.onmouseup = closeDragElement;
         document.onmousemove = elementDrag;
     }

     function elementDrag(e) {
         e = e || window.event;
         e.preventDefault();
         pos1 = pos3 - e.clientX;
         pos2 = pos4 - e.clientY;
         pos3 = e.clientX;
         pos4 = e.clientY;
         elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
         elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";


         var calculatedDistanceRick = getDistanceBetweenElements(
             document.getElementById('MyVideo'),
             document.getElementById('rickRollDiv')
             )
         var calculatedDistanceShrek = getDistanceBetweenElements(
             document.getElementById('MyVideo'),
             document.getElementById('shrekDiv')
             )
         var calculatedDistanceCrab = getDistanceBetweenElements(
             document.getElementById('MyVideo'),
             document.getElementById('crabRaveDiv')
             )
         var rickVolume = Math.round((1000.0 - calculatedDistanceRick) /100)/10;
         var shrekVolume = Math.round((400.0 - calculatedDistanceShrek) /100)/10;
         var shrekbigness = Math.round((1000.0 - calculatedDistanceShrek)/100)/10;
         var crabVolume = Math.round((1000.0 - calculatedDistanceCrab) /100)/10;


         console.log("Distance to Rick: " + calculatedDistanceRick);

         console.log("Distance to Shrek: " + calculatedDistanceShrek);

         console.log("Distance to Crab: " + calculatedDistanceCrab);

         console.log(rickVolume);
         console.log(crabVolume);
         console.log(shrekVolume);

             
         rickvid.volume = positive(rickVolume);
         shrekvid.volume = positive(shrekVolume);
         crabvid.volume = positive(crabVolume)

         rickvid.width = positive(rickVolume)*400 
         rickvid.height = positive(rickVolume)*500

         shrekvid.width = positive(shrekbigness)*400
         shrekvid.height = positive(shrekbigness)*500

         crabvid.width = positive(crabVolume)*400
         crabvid.height = positive(crabVolume)*500


 
         console.log("Rick "+rickvid.volume+"%");
         console.log("Crab "+crab.volume+"%");
         console.log("Shrek "+shrek.volume+"%");

     }

     function closeDragElement() {
         // stop moving when mouse button is released:
         document.onmouseup = null;
         document.onmousemove = null;
         
         var calculatedDistanceRick = getDistanceBetweenElements(
             document.getElementById('MyVideo'),
             document.getElementById('rickRollDiv')
             )
         var calculatedDistanceShrek = getDistanceBetweenElements(
             document.getElementById('MyVideo'),
             document.getElementById('shrekDiv')
             )
         var calculatedDistanceCrab = getDistanceBetweenElements(
             document.getElementById('MyVideo'),
             document.getElementById('crabRaveDiv')
             )
         var rickVolume = Math.round((1000.0 - calculatedDistanceRick) /100)/10;
         var shrekVolume = Math.round((400.0 - calculatedDistanceShrek) /100)/10;
         var shrekbigness = Math.round((1000.0 - calculatedDistanceShrek)/100)/10;
         var crabVolume = Math.round((1000.0 - calculatedDistanceCrab) /100)/10;


         console.log("Distance to Rick: " + calculatedDistanceRick);

         console.log("Distance to Shrek: " + calculatedDistanceShrek);

         console.log("Distance to Crab: " + calculatedDistanceCrab);

         console.log(rickVolume);
         console.log(crabVolume);
         console.log(shrekVolume);

             
         rickvid.volume = positive(rickVolume);
         shrekvid.volume = positive(shrekVolume);
         crabvid.volume = positive(crabVolume)

         rickvid.width = positive(rickVolume)*400
         rickvid.height = positive(rickVolume)*500

         shrekvid.width = positive(shrekbigness)*400
         shrekvid.height = positive(shrekbigness)*500

         crabvid.width = positive(crabVolume)*400
         crabvid.height = positive(crabVolume)*500



 
         console.log("Rick "+rickvid.volume+"%");
         console.log("Crab "+crab.volume+"%");
         console.log("Shrek "+shrek.volume+"%");

 
     }
 }