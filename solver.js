function point (s,Rad)
{
  var x = 0, y = 0, r = 0, fi = 0;
  
  if(typeof s=='string')
  {
  var arr = s.split (':', 2);  
  this.r  = arr[0];
  this.fi = arr[1];

  if(this.r>Rad || this.r<0)
    throw new Error('Неверный радиус: ' + s)
  
  
  while (this.fi<0)
    this.fi +=2*Math.PI;
  
  while (this.fi>2*Math.PI)
    this.fi-=2*Math.PI;
  
  this.x  = this.r * Math.cos(this.fi);
  this.y  = this.r * Math.sin(this.fi);
  }
  
      this.translate = function (p) {
        var newx = this.x - p.x;
        var newy = this.y - p.y;
        return Math.atan(newy/newx);
    };
    
    this.retranslate = function (newrad)
    {
      this.r = newrad;
      this.x = this.r * Math.cos(this.fi);
      this.y = this.r * Math.sin(this.fi);
    };
}

 function solve (p) {
    var   leftgr  = 0 , rightgr = Math.PI * 2 , onegr , secondgr , flag = true , l = p.length - 1 , t;
       
   
    for (var i=1; i < l && flag; i++) 
    {
        onegr = p[i - 1].translate(p[i]);
        secondgr = p[i + 1].translate(p[i]);

        if (secondgr < onegr) 
        {
            t    = onegr;
            onegr = secondgr;
            secondgr = onegr;
        }
        
        if (secondgr < leftgr || onegr > rightgr) 
            flag = false;
        
        if (secondgr < rightgr) rightgr = secondgr;
        if (onegr < leftgr ) leftgr  = onegr;
    }
    
    return flag;
}

function DrawAndSolve()
{
  //Solve
  var Rad = parseInt(document.getElementById('number').value);
  var mass = document.getElementById('textlist').value.split(' ');
  var points = [];
  var len=mass.length;
       
  for (var i=0;i<len;i++)
  {
     points[points.length]=new point(mass[i],Rad);
  }

    if(points[0].r!=Rad || points[points.length-1].r!=Rad)
    {
      alert("Крайние точки должны лежать на окружности");
      return ;
    }
      
  var fl = solve (points);
  
  var rconst = (GetClientHeight()/2-40)/Rad;
  for (i=0;i<len;i++)
  {
   points[i].retranslate(points[i].r*rconst);
  }

  if(fl==true)
    alert("раздвижение возможно");
  else
    alert("раздвижение невозможно");
  
  Draw(points);
}

  function Draw(points) 
  {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var len = points.length;
  ctx.beginPath();
  ctx.strokeStyle = '#00C8FF';
  ctx.lineWidth = 10;
  ctx.moveTo(points[0].x , points[0].y);
  for(var i=1;i<len;i++)
  ctx.lineTo(points[i].x , points[i].y);
  ctx.stroke();
  ctx.closePath(); 
    
  }
