// fazer uma rota privada, para ter acesso apenas quando eu estiver com o token
import React from "react";
import { Route, useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";


// todas as rotas privadas só vao se tiver um token.
export default ({ children, ...rest }) => {
    const history = useHistory();
    const token = useSelector(state => state.user.token); // pega o valor do token 

    if (!token || token === '') { // se o token estiver falso ou vazio ele manda para login
        history.push('/login'); // adiciona login na url
        return null; // para que nada seja renderizado.
    }

    // caso contrario a funçao renderiza Route
    return (
        // ...res copia tadas as propriedades
        // children o conteudo
        <Route {...rest}> 
            {children}
        </Route>
    );
}