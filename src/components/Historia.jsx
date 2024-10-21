import './Historia.css'

export default function Historia(){
return (
    <div className="historia">
    <div className="sobre-historia"> 
      <h4 style={{ paddingTop: '20px' }}>Criação de Personagens</h4>
      <p>Personalização: Os jogadores podem criar personagens únicos com atributos, habilidades, classes e raças que determinam suas capacidades e estilo de jogo.
      História: Cada personagem tem um histórico ou uma motivação pessoal que guia suas ações dentro do jogo.</p>
     <h4>Sistema de Progressão (Ups):</h4>
     <p>À medida que os jogadores completam missões, derrotam inimigos e exploram masmorras, eles ganham pontos de experiência (XP) que permitem melhorar suas habilidades. Cada personagem possui uma árvore de talentos única, onde os jogadores podem escolher caminhos específicos para se especializarem, como aprimorar ataques de fogo de Alyssa ou fortalecer a capacidade de cura de Serena.
     O sistema de runas permite que os jogadores encontrem pedras mágicas espalhadas pelo mundo, que podem ser usadas para desbloquear habilidades raras ou temporariamente aumentar atributos como força, inteligência e resistência.</p>
     <h4>PvP (Jogador vs Jogador)</h4>
     <p>O PvP acontece em arenas designadas nos reinos de Eldoria. Os jogadores podem se enfrentar em batalhas de equipes ou duelos individuais, testando suas habilidades contra outros Guardiões. Cada arena é ambientada em locais icônicos do mundo, como florestas antigas, ruínas desmoronadas e fortalezas mágicas.
     As batalhas PvP oferecem recompensas valiosas, como armas lendárias e melhorias de runas, que os jogadores podem usar para fortalecer seus personagens nas missões principais.</p>
     <h4>Sistema de Facções</h4>
     <p>Os jogadores podem se alinhar com uma das três grandes facções de Eldoria: Os Filhos da Luz, Os Guardiões das Sombras, ou Os Mercadores do Caos. Cada facção oferece bônus únicos e missões específicas, além de influenciar as batalhas PvP entre facções por controle de territórios.</p>
     <h4>Missões Co-op</h4>
     <p>Jogadores podem formar grupos para enfrentar chefes de masmorras e realizar missões cooperativas. Essas masmorras contêm desafios mais difíceis, exigindo estratégia e trabalho em equipe para derrotar criaturas como dragões, demônios e o exército de Morak'thul.</p>
     <p>Conflito Final: Conforme os Guardiões encontram as runas e se tornam mais poderosos, eles devem enfrentar Morak'thul e seus generais em uma série de batalhas épicas. No final, os jogadores serão testados ao máximo, com escolhas que podem determinar o destino de Eldoria. As alianças formadas ao longo do jogo influenciarão o desfecho final, permitindo que cada jornada seja única.</p>
     <h4>Itens e Equipamentos</h4>
     <p>Lutas por Recompensas: Derrotar inimigos ou completar missões geralmente recompensa os jogadores com equipamentos e itens que melhoram seu desempenho.
     Personalização de Equipamento: Armas, armaduras e acessórios podem ser equipados ou modificados para melhorar o personagem.</p>
     </div>
     <div className="video">
        <h4>Veja o video abaixo</h4>
     <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/cp80me9zh8g?si=U2LP4eiYQ-CIxsJd" // Substitua VIDEO_ID pelo ID real
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Video YouTube"
      ></iframe>
     </div>
    </div>
)
}