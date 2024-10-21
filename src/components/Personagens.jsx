import './Personagens.css';

export default function Personagens(){
    return (
        <div className="personagens">
         
          <div className="container-personagem">
  
            <div className="card">
                <div><img className="img" src="https://i.pinimg.com/originals/31/68/7e/31687ede1e39f243d7276159ce5c99de.gif"></img>
                <p>Karius <span className="atirador">Arqueiro</span></p>
            </div> 
           </div>

           <div className="card"> 
            <div><img src="https://media.giphy.com/media/l41lSQCDNgwMBy0fu/giphy.gif"></img>
            <p>Thorin <span className="mago" style={{paddingLeft: '110px'}}>Mago</span></p>
            </div>
          </div>

            <div className="card"> 
            <div><img src="https://i.redd.it/b4f70sd9rtky.gif"></img>
            <p>Darak <span className="assasino">Guerreiro</span></p>
            </div>
          </div>

            <div className="card"> 
            <div><img src="https://th.bing.com/th/id/R.b64030bf5b203da3e619dedfa0180f33?rik=IIFij81UBQsLUQ&riu=http%3a%2f%2forig12.deviantart.net%2f30cd%2ff%2f2016%2f168%2f8%2f8%2fduelyst__the_scientist_by_adcrusher524-da6lnqf.gif&ehk=%2b9iTaHvc4ZVIJ82VV5b3VzR%2b4aeKW7YCMz%2byrbTCR%2fw%3d&risl=&pid=ImgRaw&r=0"></img>
            <p>Sera <span className="atirador" style={{paddingLeft: '120px'}}>Mago</span></p>
            </div>
          </div>

            <div className="card">
            <div><img src="https://th.bing.com/th/id/OIP.D7PGPzRW4UeDgcQyOUxLKgHaHa?rs=1&pid=ImgDetMain"></img>
            <p>Ragnir  <span className="assasino">Guerreiro</span></p>
            </div>
          </div>

            <div className="card"> 
            <div><img src="https://i.pinimg.com/originals/ca/60/93/ca60933303eb49c130a89bc9857ec596.gif"></img>
            <p>Borin <span className="assasino">Guerreiro</span></p>
            </div>
          </div>

            <div className="card"> 
            <div><img src="https://i.pinimg.com/originals/a4/b9/d1/a4b9d13da63402ef76641566851a3546.gif"></img>
            <p>Selene <span className="atirador">Arqueiro</span></p>
            </div>
          </div>

            <div className="card"> 
            <div><img src="https://i.pinimg.com/originals/ac/a4/a8/aca4a81b598995b7ccd2b7bd2803109c.gif"></img>
            <p>Sylas  <span className="mago" style={{paddingLeft: '120px'}}>Mago</span></p>
            </div>
          </div>

            <div className="card"> 
            <div><img src="https://i.pinimg.com/originals/60/c7/6f/60c76f4d7bae5ec5e51a7c6b33e9b2ae.gif"></img>
            <p>Rurik <span className="assasino">Guerreiro</span></p>
            </div>
          </div>

            <div className="card"> 
            <div><img src="https://i.pinimg.com/originals/73/b4/4c/73b44cab7cd216a662d2d4bdd385cc2a.gif"></img>
            <p>Dragomir <span className="assasino" style={{paddingLeft: '60px'}}>Guerreiro</span></p>
            </div>
          </div>

            <div className="card"> 
            <div><img src="https://th.bing.com/th/id/R.c11860b4b9e9b179b1b8dbc2ce640839?rik=bXBvjf5mUU6Irg&pid=ImgRaw&r=0"></img>
            <p>Baldur <span className="mago" style={{paddingLeft: '110px'}}>Mago</span></p>
            </div>
          </div>

            <div className="card"> 
            <div><img src="https://i.pinimg.com/originals/f6/d0/32/f6d03206eeafa3f8d52fe791bfe60262.gif"></img>
            <p>Ragnir <span className="assasino" style={{paddingLeft: '70px'}}>Guerreiro</span></p>
            </div>
          </div>

            <div className="card"> 
            <div><img src="https://th.bing.com/th/id/R.fe9ecb3423b06e49253822dd55c5e2d8?rik=yZK49DoZGJgixw&pid=ImgRaw&r=0"></img>
            <p>Eldrin <span className="atirador">Arqueiro</span></p>
            </div>
          </div>

            <div className="card"> 
            <div><img src="https://th.bing.com/th/id/R.e331712c9edbeda8bc7a1deec89b904f?rik=FxYRDdhSehMRyw&pid=ImgRaw&r=0"></img>
            <p>Kaedric <span className="mago" style={{paddingLeft: '110px'}}>Mago</span></p>
            </div>
          </div>

            <div className="card"> 
            <div><img src="https://i.pinimg.com/originals/de/cc/64/decc640148693d24cbccfce9262d16ae.gif"></img>
            <p>Lyra <span className="mago" style={{paddingLeft: '130px'}}>Mago</span></p>
            </div>
            </div>
          </div>

          <div className="caracteristicas">
            <h2>Caracteristicas da Classe</h2>
            <div className="info-personagens"> 
            <p><span className="info-guerreiro">⚔</span> Guerreiro (Warrior)
             Descrição: Um combatente corpo a corpo, especializado em combate físico.
             Habilidades: Alta resistência, força, e habilidades com armas de combate corpo a corpo (espadas, machados, etc.).
             Atributos: Geralmente possui alta força e constituição.</p>
             <p><span className="info-mago">🗡</span> Mago (Mage)
            Descrição: Um usuário de magia, que lança feitiços para causar dano ou controlar o campo de batalha.
            Habilidades: Variedade de feitiços ofensivos e defensivos, manipulação de elementos (fogo, gelo, etc.).
            Atributos: Alta inteligência e poder mágico, mas baixa resistência física.</p>
            <p className="arqueiro">🏹 Arqueiro (Ranger)
            Descrição: Especialista em combate à distância, usando arcos e flechas.
           Habilidades: Ataques rápidos, precisão, e em muitos casos, habilidades de furtividade.
           Atributos: Alta destreza e agilidade, com ênfase em habilidades de sobrevivência.</p>
           </div>
          </div>
        </div>
    )
}