var originalImage = null;
var grayImage = null;
var reddishImage = null;
var greenishImage = null;
var blueishImage = null;
var rainbowImage = null;
var tricolorImage = null;
var imgcanvas = document.getElementById("can");

function upload() {
   var fileinput = document.getElementById("file");
   originalImage = new SimpleImage(fileinput);
   grayImage = new SimpleImage(fileinput);
   reddishImage = new SimpleImage(fileinput);
   greenishImage = new SimpleImage(fileinput);
   blueishImage = new SimpleImage(fileinput);
   rainbowImage = new SimpleImage(fileinput);
   tricolorImage = new SimpleImage(fileinput);
   originalImage.drawTo(imgcanvas);
}

function imageIsLoaded(image) {
  return (!image == null  || image.complete());
}

//to make image greenish
function makeGreenish(image) {
  for (var pixel of image.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 128) {
    pixel.setRed(0);
    pixel.setGreen(2*avg);
    pixel.setBlue(0);
    }
    else {
    pixel.setRed(2*avg - 255);
    pixel.setGreen(255);
    pixel.setBlue(2*avg - 255);    
    }
  }
  return image;
}

//to make image reddish
function makeReddish(image) {
  for (var pixel of image.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 128) {
    pixel.setRed(2*avg);
    pixel.setGreen(0);
    pixel.setBlue(0);
    }
    else {
    pixel.setRed(255);
    pixel.setGreen(2*avg - 255);
    pixel.setBlue(2*avg - 255);    
    }
  }
  return image;
}

//to make image blueish
function makeBlueish(image) {
  for (var pixel of image.values()) {
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if (avg < 128) {
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(2*avg);
    }
    else {
    pixel.setRed(2*avg - 255);
    pixel.setGreen(2*avg - 255);
    pixel.setBlue(255);    
    }
  }
  return image;
}

//to make image grayscale
function makeGray(image) {
  for (var pixel of image.values()) {
  var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
  pixel.setRed(avg);
  pixel.setGreen(avg);
  pixel.setBlue(avg);
 }
 return image;
}

//to make rainbow
function makeRainbow(image) {
  var h = image.getHeight();
  for (var pixel of image.values()) {
    var y = pixel.getY();
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    //VIBGYOR in reverse order

    //R - Red
    if (y < h/7) {
       if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
       }
       else {
        pixel.setRed(255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(2*avg - 255);    
       }
    }

    //O - Orange
    else if (y < 2*h/7) {
       if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
       }
       else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg - 51);
        pixel.setBlue(2*avg - 255);    
       }
    }

    //Y - Yellow
    else if (y < 3*h/7) {
       if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
       }
       else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg - 255);    
       }
    }

    //G - Green
    else if (y < 4*h/7) {
       if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
       }
       else {
        pixel.setRed(2*avg - 255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg - 255);    
       }
    }

    //B - Blue
    else if (y < 5*h/7) {
       if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
       }
       else {
        pixel.setRed(2*avg - 255);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(255);    
       }
    }

    //I - Indigo
    else if (y < 6*h/7) {
       if (avg < 128) {
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
       }
       else {
        pixel.setRed(1.2*avg - 51);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(255);    
       }
    }

    //V - Violet
    else {
       if (avg < 128) {
        pixel.setRed(1.6*avg);
        pixel.setGreen(0);
        pixel.setBlue(1.6*avg);
       }
       else {
        pixel.setRed(0.4*avg + 153);
        pixel.setGreen(2*avg - 255);
        pixel.setBlue(0.4*avg + 153);    
       }
    }
  }
  return image;
}

//to make tricolor
function makeTricolor(image) {
  var h = image.getHeight();
  for (var pixel of image.values()) {
    var y = pixel.getY();
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    
    //Orange
    if (y < h/3) {
       if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
       }
       else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avg - 51);
        pixel.setBlue(2*avg - 255);    
       }
    }

    //White
    else if (y < 2*h/3) {
       if (avg < 128) {
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(2*avg);
       }
       else {
        pixel.setRed(2*avg - 33);
        pixel.setGreen(2*avg - 33);
        pixel.setBlue(2*avg - 33);    
       }
    }

    //Green
    else{
       if (avg < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
       }
       else {
        pixel.setRed(2*avg - 255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg - 255);    
       }
    }


  }
  return image;
}


//to change the image to original image
function makeOriginal() {
  originalImage.drawTo(imgcanvas);
}

function doReddish() {
  if (imageIsLoaded(reddishImage)) {     
    makeReddish(reddishImage);                        
    reddishImage.drawTo(imgcanvas);     
  }
}
function doGreenish() {
  if (imageIsLoaded(greenishImage)) {     
    makeGreenish(greenishImage);                        
    greenishImage.drawTo(imgcanvas);     
  }
}
function doBlueish() {
  if (imageIsLoaded(blueishImage)) {     
    makeBlueish(blueishImage);	                      
    blueishImage.drawTo(imgcanvas);	    
  }
}
function doGray() {
  if (imageIsLoaded(grayImage)) {     
    makeGray(grayImage);                        
    grayImage.drawTo(imgcanvas);      
  }
}
function doRainbow() {
  if (imageIsLoaded(rainbowImage)) {     
    makeRainbow(rainbowImage);	                      
    rainbowImage.drawTo(imgcanvas);	    
  }
}
function doTricolor() {
  if (imageIsLoaded(tricolorImage)) {     
    makeTricolor(tricolorImage);                       
    tricolorImage.drawTo(imgcanvas);      
  }
}