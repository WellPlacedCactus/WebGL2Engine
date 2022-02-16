
/** Used to render models and generate projection matrix **/

class Renderer {

  constructor() {
    this.fov = 90.0;
    this.aspect = canvas.width / canvas.height;
    this.zNear = 0.001;
    this.zFar = 1000.0;
  }

  prepare() {
    gl.clearColor(0.4, 0.5, 0.6, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }

  render(model) {
    gl.bindVertexArray(model[0]);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, model[1]);
    gl.enableVertexAttribArray(0);
    gl.enableVertexAttribArray(1);
    gl.drawElements(gl.TRIANGLES, model[2], gl.UNSIGNED_SHORT, 0);
    gl.disableVertexAttribArray(1);
    gl.disableVertexAttribArray(0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    gl.bindVertexArray(null);
  }
}