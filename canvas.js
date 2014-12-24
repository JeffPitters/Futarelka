var html = document.documentElement;
     var canvasContainerId = 'c';

     
window.onload = function draw()
{
	var canvas = document.getElementById('canvas');
	canvas.width=html.clientWidth;
	canvas.height=html.clientHeight;
	var ctx = canvas.getContext('2d');
	drawBG(ctx);
}

function drawBG(ctx)
{     
        var radius = GetClientHeight()/2-40;
        ctx.beginPath();
        ctx.translate(GetClientCenterX(),GetClientCenterY());
        ctx.arc(0,0,radius,0,Math.PI*2,true);
        ctx.fillStyle = '#FF8C00';
        ctx.fill();
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#00C8FF';
        ctx.stroke();
        ctx.closePath();
}

function GetClientWidth() 
{
return document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientWidth:document.body.clientWidth; 
}

function GetClientHeight() 
{
return document.compatMode=='CSS1Compat' && !window.opera?document.documentElement.clientHeight:document.body.clientHeight; 
}

function GetClientCenterX() 
{
return parseInt(GetClientWidth()/2); 
}

function GetClientCenterY() 
{
return parseInt(GetClientHeight()/2); 
}
