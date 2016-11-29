function zoomIn(event) {
  var zimg = document.getElementById("zoomimage"),
	  img = document.getElementById("mainimage");
  var imgdiv = document.getElementById("mainimagediv");
  var imgwidth = img.naturalWidth;
  var imgheight = img.naturalHeight;   
  var offsetx = event.offsetX;
  var pagex = event.pageX;
  var offsetleft = img.offsetLeft;
  var offsetwidth = img.offsetWidth;
  var idivoffsetwidth = imgdiv.offsetWidth;
  if (offsetx < 1){
      offsetx = 1;
  }
    

  var offsety = event.offsetY;
  var pagey = event.pageY;
  var offsettop = img.offsetTop;
  var offsetheight = img.offsetHeight;
  var idivoffsetheight = imgdiv.offsetHeight;
  
  
  if (offsety < 1){
      offsety = 1;
  }
    

 var posX = offsetx ? (offsetx) : pagex - idivoffsetwidth;
  var posY = offsety ? (offsety) : pagey - idivoffsetheight;
  

  
    var x = -posX *1.5;
    var y = -posY *1.5;
	
	if(imgwidth > idivoffsetwidth && imgheight > idivoffsetheight){
		if (Math.abs(x) > Math.abs(idivoffsetwidth - imgwidth)){
			x = idivoffsetwidth - imgwidth;
		}
	
		if (Math.abs(y) > Math.abs(idivoffsetheight - imgheight - 35)){
			y = idivoffsetheight - imgheight - 35;
		}
		zimg.style.backgroundPosition=(x)+"px "+(y)+"px";
	}
	else{
		if(imgwidth > idivoffsetwidth){
			if (Math.abs(x) > Math.abs(idivoffsetwidth - imgwidth)){
			x = idivoffsetwidth - imgwidth;
			}
			y = (idivoffsetheight - 35 - imgheight) / 2;
			zimg.style.backgroundPosition= (x)+"px "+(y)+"px";
		}
		
		else if(imgheight > idivoffsetheight){
			if (Math.abs(y) > Math.abs(idivoffsetheight - imgheight - 35)){
			y = idivoffsetheight - imgheight - 35;
			}
			x = (idivoffsetwidth - imgwidth) / 2;
			zimg.style.backgroundPosition= (x)+"px "+(y)+"px";
		}
		else{
			x = (idivoffsetwidth - imgwidth) / 2;
			y = (idivoffsetheight - 35 - imgheight) / 2;
			zimg.style.backgroundPosition= (x)+"px "+(y)+"px";
		}
	}

}