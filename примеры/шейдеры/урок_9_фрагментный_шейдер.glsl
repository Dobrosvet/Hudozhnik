precision mediump float;

uniform sampler2D uniform_sempler;

uniform vec3 uniform_cvet;

varying vec2 koordinaty_tekstury;


void main(void) {
    vec4 cvet_teksury = texture2D(uniform_sempler, vec2(koordinaty_tekstury.s, koordinaty_tekstury.t));
    gl_FragColor = cvet_teksury * vec4(uniform_cvet, 1.0);
}