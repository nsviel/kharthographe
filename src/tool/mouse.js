function init_mouse(){
  //-----------------------

  define_pencil()
  add_mouse_event()

  //-----------------------
}

function define_pencil(){
  //-----------------------

  core.ctx = core.canvas.getContext('2d');
  core.ctx.strokeStyle = '#ff0000';
  core.ctx.lineJoin = 'round';
  core.ctx.lineCap = 'round';
  core.ctx.lineWidth = 5;

  //-----------------------
}

function add_mouse_event(){
  //-----------------------

  core.canvas.addEventListener('mousedown', function(event) {
    core.isDrawing = true;
    core.lastX = event.clientX - core.canvas.offsetLeft;
    core.lastY = event.clientY - core.canvas.offsetTop;
  });

  core.canvas.addEventListener('mousemove', function(event) {
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
  });

  core.canvas.addEventListener('mouseup', function(event) {
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
  });

  //-----------------------
}

// Function to reset line
function reset_draw() {
  //-----------------------

  core.ctx.clearRect(0, 0, core.canvas.width, core.canvas.height);

  //-----------------------
}
