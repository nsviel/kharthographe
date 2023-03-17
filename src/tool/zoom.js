//Tool function
function tool_zoom(){
  //-----------------------

  // Setup zoom tool
  if(tool.zoom == false){
    tool.gomme = false;
    tool.zoom = true;
    change_mouse_pointer(tool.zoom, "image/zoom_small.png");
    zoom_event(tool.zoom)
  }
  else{
    tool.zoom = false;
    change_mouse_pointer(tool.zoom, "image/zoom_small.png");
    zoom_event(tool.zoom)
  }

  //-----------------------
}

//Event function
function zoom_event(activate){
  //-----------------------

  if(activate){
    core.canvas.addEventListener('wheel', zooming);
  }else{
    core.canvas.removeEventListener('wheel', zooming);
  }

  //-----------------------
}
function zooming(event){
  //-----------------------

  var image = document.querySelector("#earth");

  event.preventDefault();

  var mousePosX = event.clientX - image.getBoundingClientRect().left;
  var mousePosY = event.clientY - image.getBoundingClientRect().top;
  var scale = 1 + event.deltaY * -0.0001;

  var prevZoomLevel = zoom.level;
  zoom.level *= scale;
  zoom.level = Math.max(1, Math.min(zoom.level, 4));

  var diffZoom = 1//zoom.level / prevZoomLevel;
  var offsetX = mousePosX - mousePosX * diffZoom;
  var offsetY = mousePosY - mousePosY * diffZoom;

  image.style.transformOrigin = mousePosX + "px " + mousePosY + "px";
  image.style.transform = "scale(" + zoom.level + ") translate(" + offsetX + "px, " + offsetY + "px)";

  //-----------------------
}
