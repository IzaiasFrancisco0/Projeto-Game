import React from 'react';
import {useState} from 'react';
import './Container.css';
import Historia from './Historia.jsx';
import Personagens from './Personagens';
import Suporte from './Suporte'

export default function Container() {
    const [secao, setSecao] = useState('secao-historia');


    const mostrarSecao = () => {
     switch(secao){
        case 'secao-historia':
            return (
                <section id="secao-historia">
                <Historia />
              </section>
            )
            case 'secao-personagens':
            return (
                <section id="secao-personagens">
                <Personagens />
               </section>
            )
            case 'secao-suporte':
                return (
                    <section id="secao-suporte">
                   <Suporte />
                   </section>
                )
                default: 
                return null;
     }
    }
  return (
    <div className="container">
        <nav>
          <img src="https://png.pngtree.com/png-vector/20220714/ourmid/pngtree-elaborately-carved-handle-and-wavy-blade-of-a-shield-and-keris-vector-png-image_37738338.png"></img>
          <ul> 
            <li><a onClick={() => setSecao('secao-historia')}>História do Jogo</a></li>
            <li><a onClick={() => setSecao('secao-personagens')}>Ver Personagens</a></li>
           <li><a onClick={() => setSecao('secao-suporte')}>Conta</a></li>   
          </ul>
          <button className="btn-jogar">Jogar</button>
        </nav>

      {mostrarSecao()}
    </div>
  );
}


