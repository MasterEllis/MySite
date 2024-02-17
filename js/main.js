$(window).on("load", function () {
  $("#header").vide("./video/coverr.mp4", {
    playbackRate: 0.5
  });
});
/*
//Создание адаптивного меню налету
var topMenu = $('.navigation').html(); //.top-menu - это класс меню которое отдаёт нам сервер на живом сайте, то что видно на desktop-варианте сайта
topMenu = topMenu.replace(/class="[^"]*"/gi, "").replace(/style="[^"]*"/gi, "").replace(/id="[^"]*"/gi, ""); //Зачищаем всякую хрень	
$('nav#menu').html('<ul>'+topMenu+'</ul>');
	
//Запускаем mmenu
$('nav#menu').mmenu({
	extensions: ["effect-menu-slide", "effect-listitems-slide"],
	navbars     : [{
		height  : 3,
		title   : 'Меню',
		content : ['']
	}, true],
	counters: true,
	dividers: {
		fixed 	: true
	},
});
*/

let h=document.getElementById("h");
let m=document.getElementById("m");
let s=document.getElementById("s");

setInterval(tic,1000);

function tic(){
  let d=new Date();
  let hours=23-d.getHours();
  if (hours<10){
    hours="0"+hours;
  }  
  let min=59-d.getMinutes();
  if(min<10){
    min="0"+min;
  }  
  let sec=59-d.getSeconds();
  if(sec<10){
    sec="0"+sec;
    }
  
  h.innerHTML=hours+":";
  m.innerHTML=min+":";
  s.innerHTML=sec;

}