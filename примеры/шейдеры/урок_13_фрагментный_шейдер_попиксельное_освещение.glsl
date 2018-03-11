precision mediump float;



uniform bool uniform_svet_vkljuchon;
uniform bool uniform_tekstyry_vkljucheny;

uniform vec3 uniform_cvet_fonovogo_osveshheniya;



varying vec2 koordinaty_tekstury;
varying vec3 transformirovannaya_normal;
varying vec4 poziciya;

uniform vec3 uniform_koordinaty_istochnika_tochechnogo_osveshheniya;
uniform vec3 uniform_cvet_istochnika_tochechnogo_osveshheniya;

uniform sampler2D uniform_sempler;


void main(void) {
    vec3 sila_osveshheniya;
    if (!uniform_svet_vkljuchon) {
        sila_osveshheniya = vec3(1.0, 1.0, 1.0);
    } else {
        vec3 napravlenie_osveshheniya = normalize(uniform_koordinaty_istochnika_tochechnogo_osveshheniya -
            poziciya.xyz);

        float sila_napravlennogo_osveshheniya = max(dot(transformirovannaya_normal, napravlenie_osveshheniya), 0.0);
        sila_osveshheniya = uniform_cvet_fonovogo_osveshheniya + uniform_cvet_istochnika_tochechnogo_osveshheniya *
            sila_napravlennogo_osveshheniya;
    }

    vec4 cvet_fragmenta;
    if (uniform_tekstyry_vkljucheny) {
        cvet_fragmenta = texture2D(uniform_sempler, vec2(koordinaty_tekstury.s, koordinaty_tekstury.t));
    } else {
        cvet_fragmenta = vec4(1.0, 1.0, 1.0, 1.0);
    }
    gl_FragColor = vec4(cvet_fragmenta.rgb * sila_osveshheniya, cvet_fragmenta.a);
}

