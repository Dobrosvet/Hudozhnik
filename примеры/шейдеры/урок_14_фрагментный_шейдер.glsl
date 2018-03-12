precision mediump float;

varying vec2 koordinaty_tekstury;
varying vec3 transformirovannaya_normal;
varying vec4 poziciya;

uniform float uniform_blesk_materiala;

uniform bool uniform_bliki_vklucheny;
uniform bool uniform_svet_vkljuchon;
uniform bool uniform_tekstyry_vkljucheny;

uniform vec3 uniform_cvet_fonovogo_osveshheniya;

uniform vec3 uniform_koordinaty_istochnika_tochechnogo_osveshheniya;
uniform vec3 uniform_cvet_istochnika_tochechnogo_osveshheniya;
uniform vec3 uniform_cvet_istochnika_rasseyannogo_osveshheniya;

uniform sampler2D uniform_sempler;


void main(void) {
    vec3 sila_osveshheniya;
    if (!uniform_svet_vkljuchon) {
        sila_osveshheniya = vec3(1.0, 1.0, 1.0);
    } else {
        vec3 napravlenie_osveshheniya = normalize(uniform_koordinaty_istochnika_tochechnogo_osveshheniya -
            poziciya.xyz);
        vec3 normal = normalize(transformirovannaya_normal);

        float sila_otrazhonnogo_osveshheniya = 0.0;
        if(uniform_bliki_vklucheny) {
            vec3 poziciya_kamery = normalize(-poziciya.xyz);
            vec3 napravlenie_otrazheniya = reflect(-napravlenie_osveshheniya, normal);

            sila_otrazhonnogo_osveshheniya = pow(max(dot(napravlenie_otrazheniya, poziciya_kamery), 0.0),
            uniform_blesk_materiala);
        }

        float sila_rasseyannogo_osveshheniya = max(dot(normal, napravlenie_osveshheniya), 0.0);
        sila_osveshheniya = uniform_cvet_fonovogo_osveshheniya +
            uniform_cvet_istochnika_tochechnogo_osveshheniya * sila_otrazhonnogo_osveshheniya +
            uniform_cvet_istochnika_rasseyannogo_osveshheniya * sila_rasseyannogo_osveshheniya;
    }

    vec4 cvet_fragmenta;
    if (uniform_tekstyry_vkljucheny) {
        cvet_fragmenta = texture2D(uniform_sempler, vec2(koordinaty_tekstury.s, koordinaty_tekstury.t));
    } else {
        cvet_fragmenta = vec4(1.0, 1.0, 1.0, 1.0);
    }
    gl_FragColor = vec4(cvet_fragmenta.rgb * sila_osveshheniya, cvet_fragmenta.a);
}

