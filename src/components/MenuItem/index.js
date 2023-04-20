import React from "react";
import { useHistory, useLocation } from 'react-router-dom';
import { LinkArea, LinkIcon } from "./styled";

export default ({ icon, link }) => {
    const history = useHistory();
    
    const location = useLocation();
    let isAction = location.pathname === link; // esse cara verifica se a rota é igual.

    // ele usa os dois links.
    const handleLinkClick = (e) => {
        e.preventDefault(); // ele vai negar o evento de clik
        // ele nao recarrega a pagina e em seguida, chama o método push da instância de histórico do 
        // navegador, que adiciona uma nova entrada no histórico e atualiza a URL da página para o
        // link especificado.
        history.push(link);
    }

    return (
        <LinkArea active={isAction} href={link} onClick={handleLinkClick}>
            <LinkIcon src={icon} />
        </LinkArea>
    )

}