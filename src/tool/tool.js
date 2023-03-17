function init_tool(){
  //-----------------------

  init_draw();

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
