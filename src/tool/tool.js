function tool_zoom(){
  //-----------------------

  // Setup zoom tool
  if(tool.zoom == false){
    tool.gomme = false;
    tool.zoom = true;
    change_mouse_pointer(tool.zoom, "image/zoom_small.png");
  }
  else{
    tool.zoom = false;
    change_mouse_pointer(tool.zoom, "image/zoom_small.png");
  }

  //-----------------------
}

function tool_draw(){
  //-----------------------

  // Setup zoom tool
  if(tool.brush == false){
    tool.gomme = false;
    tool.zoom = false;
    tool.brush = true;
    change_mouse_pointer(tool.brush, "image/brush_small.png");
  }
  else{
    tool.brush = false;
    change_mouse_pointer(tool.brush, "image/brush_small.png");
  }

  //-----------------------
}

function tool_gomme(){
  //-----------------------

  // Setup zoom tool
  if(tool.gomme == false){
    tool.zoom = false;
    tool.gomme = true;
    change_mouse_pointer(tool.gomme, "image/gomme_small.png");
  }
  else{
    tool.gomme = false;
    change_mouse_pointer(tool.gomme, "image/gomme_small.png");
  }

  //-----------------------
}

//Function to generalize mouse pointer change for tools
function change_mouse_pointer(state, path_image){
  //-----------------------

  // Get the button element
  const buttons = document.querySelectorAll('button');

  if(state){
    document.documentElement.style.cursor = 'url('+ path_image +'), auto';
    buttons.forEach(function(button) {
      button.style.cursor = 'url('+ path_image +'), auto';
    });
  }
  else{
    document.documentElement.style.cursor = 'auto';
    buttons.forEach(function(button) {
      button.style.cursor = 'auto';
    });
  }

  //-----------------------
}
