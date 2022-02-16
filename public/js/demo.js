
/** Uses engine to run a demo **/

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

const demo = async () => {
  const renderer = new Renderer();
  const loader = new Loader();
  const shader = new Shader(
    await loader.loadTextFromFile('./shaders/simple.vert'),
    await loader.loadTextFromFile('./shaders/simple.frag'),
  );
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