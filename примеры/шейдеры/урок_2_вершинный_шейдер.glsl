attribute vec3 atribut_poziciya_vershin;
attribute vec4 atribut_cvet_vershin;

uniform mat4 uniform_matrica_model_vid;
uniform mat4 uniform_matrica_proekcii;

varying vec4 cvet;

void main(void) {
    gl_Position = uniform_matrica_proekcii * uniform_matrica_model_vid * vec4(atribut_poziciya_vershin, 1.0);
    cvet = atribut_cvet_vershin;
}