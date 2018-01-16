attribute vec3 atribut_poziciya_vershin;

uniform mat4 uniform_matrica_model_vid;
uniform mat4 uniform_matrica_proekcii;

void main(void) {
    gl_Position = uniform_matrica_proekcii * uniform_matrica_model_vid * vec4(atribut_poziciya_vershin, 1.0);
}