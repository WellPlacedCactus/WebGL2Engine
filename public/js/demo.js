
/** Uses engine to run a demo **/

const vsSource = `#version 300 es

layout(location = 0) in vec2 vPosition;
layout(location = 1) in vec3 vColor;

out vec2 fPosition;
out vec3 fColor;

void main()
{
  gl_Position = vec4(vPosition, 0.0, 1.0);
  fPosition = vPosition;
  fColor = vColor;
}

`;

const fsSource = `#version 300 es

precision highp float;

in vec2 fPosition;
in vec3 fColor;

out vec4 finalColor;

void main()
{
  finalColor = vec4(fColor, 1.0);
}

`;

const positions = [
   0.0,  0.5,
   0.5, -0.5,
  -0.5, -0.5
];

const colors = [
  0.0, 0.0, 1.0,
  0.0, 1.0, 0.0,
  1.0, 0.0, 0.0
];

const indices = [ 0, 1, 2 ];

const demo = () => {
  const renderer = new Renderer();
  const shader = new Shader(vsSource, fsSource);
  const loader = new Loader();
  const triangle = loader.loadModel(positions, colors, indices);

  const loop = () => {
    renderer.prepare();

    shader.bind();
    renderer.render(triangle);
    shader.unbind();

    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};