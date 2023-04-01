
#version 330 core
out vec4 color;

in vec2 UV;
uniform sampler2D myTextureSampler;

void main()
{
    // TODO: pub with your code...
    float newY = mod(UV.y, 0.66666777);
    color = texture2D(myTextureSampler, vec2(UV.x, newY)).rgba;
}
