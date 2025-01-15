import styled from "styled-components"

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: ${props => props.corFundo ||'rgb(207, 224, 244)'};
    color: ${props => props.cor ||'rgb(90, 90, 90)' };
    font-size: ${props => props.tamanhoFonte || '18px;' };
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`

