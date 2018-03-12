attribute vec3 atribut_poziciya_vershin;
attribute vec3 atribut_normali_vershin;
attribute vec2 atribut_koordinaty_tekstury;

uniform mat4 uniform_matrica_model_vid;
uniform mat4 uniform_matrica_proekcii;
uniform mat3 uniform_matrica_normalej;

varying vec2 koordinaty_tekstury;
varying vec3 transformirovannaya_normal;
varying vec4 poziciya;


void main(void) {
    poziciya = uniform_matrica_model_vid * vec4(atribut_poziciya_vershin, 1.0);
    gl_Position = uniform_matrica_proekcii * poziciya;
    koordinaty_tekstury = atribut_koordinaty_tekstury;
    transformirovannaya_normal = uniform_matrica_normalej * atribut_normali_vershin;
}