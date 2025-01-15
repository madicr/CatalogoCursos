import { cursos } from './dadosMinhaLista'
import { Titulo } from '../Titulo';

import imagemCurso from '../../imagens/front-end.svg'


import styled from 'styled-components';

const CursosSectionContainer = styled.section`
 background-color:rgb(231, 231, 233);
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const CursosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
const CursoCard = styled.div`
  text-align: center;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 200px; /* Limita a largura total do card */
`;

const CursoNome = styled.p`
  color: #333;
  font-weight: bold;
  font-size: 14px; /* Fonte menor para evitar "estouro" */
  margin-top: 10px; /* Espaçamento entre imagem e texto */
  word-wrap: break-word; /* Quebra o texto longo para caber no card */
  text-align: center;
`;

const ImagemCurso = styled.img`
 max-width: 200px;  // Limita a largura
height: 200px; // Limita a altura
 object-fit: cover; // Faz a imagem cobrir o espaço sem distorcer
 margin: 0 10px;    // Espaçamento entre as imagens, se necessário
`


function MinhaLista() {
    return (
        <CursosSectionContainer>
            <Titulo
                cor="rgb(27, 64, 128)"
                tamanhoFonte="36px"
                alinhamento="center"
            >
                MINHA LISTA
            </Titulo>
            <CursosContainer>
                {cursos.map(curso => (                  
                                     
                    <CursoCard key={curso.id}>
                        <ImagemCurso src={curso.src} alt={curso.nome} />
                        <CursoNome>{curso.nome}</CursoNome>
                    </CursoCard>

                ))}
            </CursosContainer>           
        </CursosSectionContainer>

    );
}

export default MinhaLista;