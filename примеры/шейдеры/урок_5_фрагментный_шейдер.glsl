precision mediump float;

uniform sampler2D uniform_sempler;

varying vec2 koordinaty_tekstury;

void main(void) {
    gl_FragColor = texture2D(uniform_sempler, vec2(koordinaty_tekstury.s, koordinaty_tekstury.t));
}