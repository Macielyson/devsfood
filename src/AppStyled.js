// os styletes para pagina interira
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: #FF0000;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 80px;
    background-color: #136713;
`;

export const PageBody = styled.div`
    display: flex;
    background-color: #00980d; 
    background-image: url('/assets/bg.png');
    flex: 1; ${{/*pega o restante da pagina*/ }}
    overflow-y: auto; ${{/*apenas no bory que vai haver barra de rolagem*/ }}
    `;