#version 300 es

precision highp float;

in vec2 fPosition;
in vec3 fColor;

out vec4 finalColor;

void main()
{
  finalColor = vec4(fColor, 1.0);
}