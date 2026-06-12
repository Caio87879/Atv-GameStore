import { FlatList, Image } from 'react-native';
import Jogo from '../componentes/Jogo';
import imagemArk from '../imgs/ArkAsa.jpg';
import imagemGenshin from '../imgs/Genshin.jpg';
import imagemHonkai from '../imgs/Honkai.jpg';
import imagemOverwatch from '../imgs/Overwatch 2.jpg';

export default function Home({ navigation }) {

  const jogos = [
      {
        id: '1',
        nome: 'Ark Ascended',
        categoria: 'Sobrevivência/Exploração.',
        plataforma: 'Xbox, PlayStation e PC.',
        data: '25 de outubro de 2023',
        descricao: 'Renasça em uma nova experiência de sobrevivência de dinossauros além dos seus sonhos mais loucos... enquanto ARK é reimaginado do zero para a próxima geração de tecnologia de videogame com Unreal Engine 5! Você acorda em uma ilha misteriosa, seus sentidos dominados pela luz ofuscante do sol e pelas cores brilhantes refletindo em todas as superfícies ao seu redor, as águas azuis de uma ilha verdejante batendo em seus pés descalços. Um rugido profundo ecoa na selva enevoada, colocando você em ação, e você se levanta – não com medo, mas intrigado. Você está pronto para formar uma tribo, domar e criar centenas de espécies de dinossauros e outras criaturas primitivas, explorar, criar, construir e lutar até chegar ao topo da cadeia alimentar? Seu novo mundo o aguarda... atravesse o espelho e junte-se a ele!',
        imagem: imagemArk
      },
      {
        id: '2',
        nome: 'Honkai Star rail',
        categoria: 'Gacha/Rpg/Estratégia.',
        plataforma: 'Xbox, PlayStation, mobile e PC.',
        data: '26 de abril de 2023',
        descricao: 'Honkai: Star Rail é um RPG de fantasia espacial baseado em turnos desenvolvido e publicado pela HoYoverse.',
        imagem: imagemHonkai
      },
      {
        id: '3',
        nome: 'Genshin Impact',
        categoria: 'Gacha/Rpg/Estratégia.',
        plataforma: 'Xbox, PlayStation, mobile e PC.',
        data: '28 de setembro de 2020',
        descricao: 'O jogo apresenta um ambiente de mundo aberto fantástico e um sistema de combate baseado em ação, utilizando magia elemental, troca de personagens e um sistema de monetização gacha para que os jogadores obtenham novos personagens, armas e outros recursos. O jogo só pode ser jogado com conexão à internet e possui um modo multijogador limitado, permitindo até quatro jogadores por mundo.',
        imagem: imagemGenshin
      },
      {
        id: '4',
        nome: 'Overwatch 2',
        categoria: 'Battle-Shooter.',
        plataforma: 'Xbox, PlayStation, nintendo e PC.',
        data: '4 de outubro de 2022',
        descricao: 'Uma diferença notável no jogo padrão foi a mudança de 6v6 para 5v5, o que removeu uma vaga de Tanque em cada equipe. Na Fila por Função, cada equipe agora é composta por um herói Tanque, dois heróis de Dano e dois heróis de Suporte. Ao mesmo tempo, um novo modo de jogo chamado Push foi lançado, complementando o formato de equipe atualizado e substituindo o Assault .',
        imagem: imagemOverwatch
      },
      {
        id: '5',
        nome: 'Mobile Legends: Bang Bang',
        categoria: 'Moba 5 vs 5.',
        plataforma: 'mobile e PC.',
        data: '14 de julho de 2016',
        descricao: 'Mobile Legends: Bang Bang é um jogo designado para aparelhos móveis do gênero Multiplayer Online Battle Arena em terceira pessoa. Ele possui alguns modos de jogo permanentes como: Clássico, Ranqueado, Rixa e VS I.A., além de modos temáticos, como sobrevivência e rixa sombria que são adicionados ao jogo esporadicamente.',
        imagem: imagemHonkai
      },
      {
        id: '6',
        nome: 'Sea of Thieves',
        categoria: 'ação e aventura em mundo aberto e multijogador (MMO)',
        plataforma: 'Xbox, PlayStation e mobile.',
        data: '20 de março de 2018',
        descricao: 'Explore um vasto mundo aberto de ilhas intocadas, navios naufragados e artefatos misteriosos. Procure tesouros perdidos, enfrente os Capitães Esqueletos amaldiçoados e proteja a preciosa carga da Companhia de Comércio. Cace, pesque e encare centenas de objetivos opcionais!',
        imagem: imagemHonkai
      },
      {
        id: '7',
        nome: 'Dead by Daylight',
        categoria: 'ação, suspense e sobrevivência',
        plataforma: 'Xbox, PlayStation e PC.',
        data: '14 de junho de 2016',
        descricao: 'Dead by Daylight é um jogo de terror, sobrevivência e ação multijogador 4x1 em que você joga como o Assassino ou um dos quatro Sobreviventes.',
        imagem: imagemHonkai
      },
      {
        id: '8',
        nome: 'Destiny 2',
        categoria: 'PVP/Online',
        plataforma: 'Xbox, PlayStation e PC.',
        data: ' 6 de setembro de 2017',
        descricao: 'Destiny 2 é um jogo eletrônico de tiro em primeira pessoa online desenvolvido pela Bungie e publicado pela Activision. Foi lançado para PlayStation 4 e Xbox One em 6 de setembro de 2017, seguido por uma versão para Microsoft Windows no mês seguinte.[1][2] É a continuação de Destiny (2014) e de suas expansões subsequentes. Situado em um mundo de "ficção científica mítica", o jogo apresenta um ambiente multiplayer de "mundo compartilhado" com elementos de RPG. Como no original, as atividades no Destiny 2 são divididas entre os tipos de jogo jogador contra ambiente (PvE) e jogador contra jogador (PvP).',
        imagem: imagemHonkai
      },
      {
        id: '9',
        nome: 'Honor Kings',
        categoria: 'Moba 5 vs 5',
        plataforma: 'Mobile e PC.',
        data: '8 de março de 2023',
        descricao: 'Honor of Kings é um jogo de arena de batalha online multijogador (MOBA) para dispositivos móveis com partidas rápidas (15 a 20 minutos) . É necessário ter uma conta Tencent QQ ou WeChat para jogar. Após uma atualização em 24 de setembro de 2020, os jogadores podem adicionar amigos e convidar pessoas de diferentes plataformas para guildas.',
        imagem: imagemHonkai
      },
         {
        id: '10',
        nome: 'Grounded',
        categoria: 'Gacha/Rpg/Estratégia.',
        plataforma: 'Xbox, PlayStation e PC.',
        data: '27 de setembro de 2022',
        descricao: 'O mundo é um lugar vasto, bonito e perigoso - especialmente quando você tem o tamanho de uma formiga. Explore, construa e sobreviva em equipe nesta aventura de cooperação.',
        imagem: imagemHonkai
      }
    ];

  return (
    <FlatList
      data={jogos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Jogo
          jogo={item}
          navigation={navigation}
        />
      )}
    />
  );
}