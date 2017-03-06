/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var awesomeThoughts = "I am Ivy Fu and I am AWESOME!";
 var funThoughts = awesomeThoughts.replace("AWESOME", "Fun");
 console.log(funThoughts);

var name = "Ivy Fu";
var role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var c = document.querySelector("#c");
var ctx = c.getContext("2d");

//ctx.strokeRect(50, 50, 100, 100);

// ctx.beginPath();
// //ctx.scale(2,3);
// //ctx.translate(20,40);
// ctx.rotate(30 * (Math.PI/180));
// ctx.moveTo(75, 75);
// ctx.lineTo(125, 75);
// ctx.lineTo(125, 125);
// ctx.lineTo(75, 75);
// ctx.fill();

// ctx.fillStyle = "blue";
// ctx.fillRect(0,0,50,50);

// // 保存蓝色填充的状态
// ctx.save();
// ctx.fillStyle = "green";
// ctx.fillRect(100,100,10,10);
// // 恢复蓝色填充的状态
// ctx.restore();

// ctx.fillRect(200,10,20,20);
var image = new Image();
image.onload = function() {
	ctx.drawImage(image, 0, 0, c.width, c.height);
	ctx.fillStyle = "white";
	ctx.textAlign = "center"
	ctx.strokeStyle = "black";
	ctx.font = "36px Impact";
	ctx.fillText("UDACITY MEMES!", c.width/2, 60);
	ctx.lineWidth = 3;
	ctx.strokeText("UDACITY MEMES!", c.width/2, 60);
};
image.src = "images/fry.jpg";
