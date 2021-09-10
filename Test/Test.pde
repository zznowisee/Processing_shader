
PShader shader;

void setup(){
  size(600,400,P2D);
  noStroke();
  
  shader = loadShader("shader.frag");
}

void draw(){
  shader.set("u_resolution",float(width),float(height));
  shader.set("u_mouse",float(mouseX),float(mouseY));
  shader.set("u_time",millis()/1000);
  shader(shader);
  
  rect(0,0,width,height);
}

void keyPressed(){
  // Reload shader everytime a key is press
  shader = loadShader("shader.frag");
}
