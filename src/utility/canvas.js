function init_canvas(){
  //-----------------------

  const canvas = document.querySelector('canvas');
  core.canvas = canvas;
  core.container = document.querySelector('.container');
  core.canvas.width = window.innerWidth;
  core.canvas.height = window.innerHeight;

  //-----------------------
}
