//mouse press

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
	document.querySelectorAll("button")[i].addEventListener("click",clik);
	
	function clik()
	{
		// alert("clicked!");
		
		var btn=this.innerHTML;
		makesound(btn);
		animation(btn);
	}
}

//keyboard press

document.addEventListener("keypress",function(event)
{
	// alert("key is pressed!");
	// console.log(event);                              //tells which key is pressed
	makesound(event.key);
	animation(event.key);
})

function makesound(key)
{
	switch(key)
		{
			case "w":
			var audio=new Audio("sounds/tom-1.mp3");
			audio.play();
			break;

			case "a":
			var audio=new Audio("sounds/tom-2.mp3");
			audio.play();
			break;

			case "s":
			var audio=new Audio("sounds/tom-3.mp3");
			audio.play();
			break;

			case "d":
			var audio=new Audio("sounds/tom-4.mp3");
			audio.play();
			break;

			case "j":
			var audio=new Audio("sounds/kick-bass.mp3");
			audio.play();
			break;
			case "k":
			var audio=new Audio("sounds/crash.mp3");
			audio.play();
			break;

			case "l":
			var audio=new Audio("sounds/snare.mp3");
			audio.play();
			break;

			default:console.log(key);
		}
}


//animation effects

function animation(currkey)
{
	var active=document.querySelector("." + currkey);
	active.classList.add("pressed");

	setTimeout(function()
	{
		active.classList.remove("pressed");
	},200);
}