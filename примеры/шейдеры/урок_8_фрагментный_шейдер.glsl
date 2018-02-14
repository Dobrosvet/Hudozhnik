precision mediump float;

uniform sampler2D uniform_sempler;

uniform float uniform_prozrachnost;

varying vec2 koordinaty_tekstury;
varying vec3 sila_osveshheniya;

void main(void) {
    vec4 cvet_teksury = texture2D(uniform_sempler, vec2(koordinaty_tekstury.s, koordinaty_tekstury.t));
    gl_FragColor = vec4(cvet_teksury.rgb * sila_osveshheniya, cvet_teksury.a * uniform_prozrachnost);
}