class Heroi {
    constructor(nomeHeroi, idadeHeroi, tipoHeroi) {
      this.nomeHeroi = nomeHeroi;
      this.idadeHeroi = idadeHeroi;
      this.tipoHeroi = tipoHeroi;
      this.ataqueUsado = "";
    }
  
     ataque() {
      if (this.tipoHeroi === "Mago") {
        this.ataqueUsado = "Magia";
      } else if (this.tipoHeroi === "guerreiro") {
        this.ataqueUsado = "espada";
      } else if (this.tipoHeroi === "monge") {
        this.ataqueUsado = "artes marciais";
      } else if (this.tipoHeroi === "ninja") {
        this.ataqueUsado = "shuriken";
      }
    }
  }
  
  let escrever = new Heroi("Ryoku", 27, "ninja");
  escrever.ataque();
  console.log(`O ${escrever.tipoHeroi} atacou usando ${escrever.ataqueUsado}`);