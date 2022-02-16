
/** Instantiates all global variables in the project **/

/** VARIABLES **/

const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl2');

const keys = [];
const mouse = {};
mouse.x = 0;
mouse.y = 0;
mouse.down = false;

/** EVENT HANDLERS **/

addEventListener('load', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  gl.viewport(0, 0, canvas.width, canvas.height);
  demo();
});

addEventListener('resize', () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  gl.viewport(0, 0, canvas.width, canvas.height);
});

addEventListener('keydown', ({keyCode}) => {
  keys[keyCode] = true;
});

addEventListener('keyup', ({keyCode}) => {
  keys[keyCode] = false;
});

addEventListener('mousemove', ({x, y}) => {
  mouse.x = x;
  mouse.y = y;
});

addEventListener('mousedown', () => {
  mouse.down = true;
});

addEventListener('mouseup', () => {
  mouse.down = false;
});