
/** Representation of a third person camera using spherical coords **/

class Camera {

  constructor() {
    this.x = 0;
    this.y = 0;
    this.z = 5;

    this.rho = 5;
    this.phi = 0;
    this.theta = 0;

    this.phiMin = Math.PI / 8;
    this.phiMax = Math.PI;

    this.lastX = 0;
    this.lastY = 0;

    this.sens = 0.005;
  }

  orbit() {

    const dx = mouse.x - this.lastX;
    const dy = mouse.y - this.lastY;

    this.lastX = mouse.x;
    this.lastY = mouse.y;

    if (!mouse.down) return;

    this.theta += dx * this.sens;
    this.phi -= dy * this.sens;

    if (this.phi < this.phiMin) this.phi = this.phiMin;
    if (this.phi > this.phiMax) this.phi = this.phiMax;

    this.x = this.rho * Math.cos(this.theta) * Math.sin(this.phi);
    this.z = this.rho * Math.sin(this.theta) * Math.sin(this.phi);
    this.y = this.rho * Math.cos(this.phi);
  }

  getView() {
    const m = mat4.create();
    const v = vec3.create();
    mat4.lookAt(m, [this.x, this.y, this.z], [0, 0, 0], [0, 1, 0]);
    return m;
  }
}