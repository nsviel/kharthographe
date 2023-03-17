//Init function
function init_draw(){
  //-----------------------

  init_context()
  init_gui()

  //-----------------------
}
function init_context(){
  //-----------------------

  core.ctx = core.canvas.getContext('2d');
  core.ctx.strokeStyle = '#ff0000';
  core.ctx.lineJoin = 'round';
  core.ctx.lineCap = 'round';
  core.ctx.lineWidth = 5;

  //-----------------------
}
function init_gui(){
  //-----------------------

  var input_color = document.getElementById("draw_color");
  input_color.addEventListener("input", function() {
    core.ctx.strokeStyle = input_color.value;
  });

  var input_range = document.getElementById("draw_range");
  input_range.addEventListener("input", function() {
    core.ctx.lineWidth = input_range.value;
    var draw_range_value = document.getElementById("draw_range_value");
    draw_range_value.textContent = input_range.value;
  });

  //-----------------------
}

//Drawing function
function draw_event(activate){
  //-----------------------

  if(activate){
    core.canvas.addEventListener('mousedown', drawing);
    core.canvas.addEventListener('mousemove', start_drawing);
    core.canvas.addEventListener('mouseup', add_factory);
  }else{
    core.canvas.removeEventListener('mousedown', drawing);
    core.canvas.removeEventListener('mousemove', start_drawing);
    core.canvas.removeEventListener('mouseup', add_factory);
  }

  //-----------------------
}
function drawing(event){
  //-----------------------

  core.isDrawing = true;
  core.lastX = event.clientX - core.canvas.offsetLeft;
  core.lastY = event.clientY - core.canvas.offsetTop;

  //-----------------------
}
function start_drawing(event) {
  if (core.isDrawing) {
    var x = event.clientX - core.canvas.offsetLeft;
    var y = event.clientY - core.canvas.offsetTop;

    core.ctx.beginPath();
    core.ctx.moveTo(core.lastX, core.lastY);
    core.ctx.lineTo(x, y);
    core.ctx.stroke();

    core.lastX = x;
    core.lastY = y;
  }
}
function add_factory(event) {
  core.isDrawing = false;

  // Create a new image element and append it to the core.container
  var img = document.createElement('img');
  img.src = 'image/factory.png';
  img.style.position = 'absolute';
  img.style.top = event.clientY - core.container.offsetTop + 'px';
  img.style.left = event.clientX - core.container.offsetLeft + 'px';
  img.style.width = '5px'; // Set the width to 200px
  img.style.height = '5px'; // Set the height to 200px
  img.style.zIndex = '3'; // Set the z-index to 3 (or any higher value)
  img.classList.add('click-img'); // Add a class to the image
  core.container.appendChild(img);
}

//Tool function
function tool_draw(){
  //-----------------------

  // Setup zoom tool
  if(tool.brush == false){
    tool.gomme = false;
    tool.zoom = false;
    tool.brush = true;
    change_mouse_pointer(tool.brush, "image/brush_small.png");
    draw_event(tool.brush)
  }
  else{
    tool.brush = false;
    change_mouse_pointer(tool.brush, "image/brush_small.png");
    draw_event(tool.brush)
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
function reset_draw() {
  //-----------------------

  core.ctx.clearRect(0, 0, core.canvas.width, core.canvas.height);

  //-----------------------
}
