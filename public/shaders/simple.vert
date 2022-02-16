#version 300 es

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