
/** Uses engine to run a demo **/

const demo = async () => {
  const renderer = new Renderer();
  const loader = new Loader();
  const shader = new Shader(
    await loader.loadTextFromFile('./shaders/simple.vert'),
    await loader.loadTextFromFile('./shaders/simple.frag'),
  );
  const camera = new Camera();
  const model = loader.loadModel(
    cube.positions,
    cube.normals,
    cube.indices
  );
  const entities = [];

  entities.push(new Entity(
    [0, 0, 0],
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0]
  ));

  const range = 50;
  const margin = 5;

  for (let z = -range; z < range; z += margin) {
    for (let x = -range; x < range; x += margin) {
      if (Math.random() < 0.5) {
        for (let y = 0; y < randint(0, 5); y++) {
          entities.push(new Entity(
            [x, y * 4, z],
            [0, 0, 0],
            [1, 1, 1],
            [1, 1, 1]
          ));
        }
      }
    }
  }

  const moveInDirection = (e, dir, mag) => {
    e.position[0] += mag * Math.cos(dir);
    e.position[2] += mag * Math.sin(dir);
  };

  const loop = () => {
    if (keys[87]) {
      moveInDirection(entities[0], camera.theta + Math.PI, 0.1);
    }
    entities[0].rotation[1] = -camera.theta;

    camera.move();
    camera.orbit(entities[0]);

    renderer.prepare();

    // entities[0].rotation[0] += 0.01;
    // entities[0].rotation[1] += 0.01;

    shader.bind();
    shader.setMatrix('proj', renderer.getProj());
    shader.setMatrix('view', camera.getView());
    shader.setVec3('lightPosition', [camera.x, camera.y, camera.z]);
    renderer.render(model, entities, shader);
    shader.unbind();

    requestAnimationFrame(loop);
  };

  requestAnimationFrame(loop);
};