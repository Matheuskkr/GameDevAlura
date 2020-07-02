
function setup() {
  
  createCanvas(windowWidth, windowHeight);
  
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  jogo.setup();
  
  frameRate(40);
  
  somDoJogo.loop();
  
  somDoJogo.setVolume(0.1);
  
  cenas = {
    jogo,
    telaInicial
  };  
}

function keyPressed(){
  jogo.keypressed(key);
}

function draw() {
  
  cenas[cenaAtual].draw();
   
}

