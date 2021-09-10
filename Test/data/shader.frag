#ifdef GL_ES
precision mediump float;
#endif

#define PROCESSING_COLOR_SHADER
#define PI 3.14159265359

uniform vec2 u_resolution;
uniform vec3 u_mouse;
uniform float u_time;

float plot(vec2 uv, float pct){
  return smoothstep(pct - 0.02, pct, uv.y) -
         smoothstep(pct, pct + 0.02, uv.y);
}

void main(){
  vec2 uv = gl_FragCoord.xy / u_resolution;

  float y = pow(uv.x,5.);
  vec3 color = vec3(y);
  float pct = plot(uv, y);
  color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);
  gl_FragColor = vec4(color,1.); 
}