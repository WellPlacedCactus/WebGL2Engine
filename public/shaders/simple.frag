#version 300 es

precision highp float;

in vec3 fPosition;
in vec3 fNormal;

out vec4 finalColor;

uniform vec3 cameraPosition;

vec3 white = vec3(1.0, 1.0, 1.0);

float calculateLight()
{
  vec3 normal = normalize(fNormal);
  vec3 positionToLight = normalize(cameraPosition - fPosition);
  float light = dot(normal, positionToLight);
  return light;
}

void main()
{
  finalColor = vec4(white * calculateLight(), 1.0);
}