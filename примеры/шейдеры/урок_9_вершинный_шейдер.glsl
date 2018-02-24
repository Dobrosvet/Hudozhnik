attribute vec3 atribut_poziciya_vershin;
attribute vec2 atribut_koordinaty_tekstury;

uniform mat4 uniform_matrica_model_vid;
uniform mat4 uniform_matrica_proekcii;

varying vec2 koordinaty_tekstury;

void main(void) {
    gl_Position = uniform_matrica_proekcii * uniform_matrica_model_vid * vec4(atribut_poziciya_vershin, 1.0);
    koordinaty_tekstury = atribut_koordinaty_tekstury;
}