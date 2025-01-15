import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'    
import { cursos } from './dadosPesquisa'
const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    const [cursosPesquisados, setCursosPesquisados] =useState([])


    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre o curso no catálogo.</Subtitulo>
            <Input
                placeholder="Escreva o nome do curso"
                onBlur={ evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = cursos.filter( curso => curso.nome.includes(textoDigitado))
                    setCursosPesquisados(resultadoPesquisa)
                }  }
            />
            { cursosPesquisados.map( curso => (
                <Resultado> 
                    <img src={curso.src} />
                    <p>{curso.nome}</p>
                    <p>{curso.categoria}</p>
                    
                </Resultado>
            ))}

        </PesquisaContainer>

    )
}

export default Pesquisa