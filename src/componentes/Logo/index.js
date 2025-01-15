
import logo from '../../imagens/logo-curso4.svg';
import styled from 'styled-components'

const LogoContainer = styled.div `
    display:flex;
    font-size: 20px;
`

const LogoImage = styled.img`
    width: 8%;  /* A largura será 50% do tamanho do contêiner pai */
    height: auto; /* A altura será ajustada automaticamente para manter a proporção */
    margin-right: 10px;
    margin-left: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage 
                src={logo} 
                alt="logo" 
            />
            <p>Cursos de <strong>Tecnologia da Informação</strong></p>
        </LogoContainer>
    )
}

export default Logo;