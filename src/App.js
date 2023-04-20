import React from 'react';
// BrowserRouter é um componente do React que permite que o aplicativo use o roteamento de navegador para controlar a navegação do usuário.
// O Switch é um componente do React que renderiza apenas uma rota por vez e o Route é um componente do React que define uma rota específica.
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux'; // permite que o componente acesse o estado armazenado na store Redux.

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

import { Container, Menu, PageBody } from './AppStyled';
import MenuItem from './components/MenuItem';

import PrivateRoute from './components/PrivateRoute';
import Cart from './components/Cart'

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        // trabanalho agpra de fato com a tela de home.
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem icon="/assets/store.png" link="/" />
                    <MenuItem icon="/assets/order.png" link="/orders" />
                    <MenuItem icon="/assets/profile.png" link="/profile" />
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>

                        <PrivateRoute path="/orders">
                            <div>TELA DE PEDIDOS</div>
                        </PrivateRoute>
                        <PrivateRoute path="/profile">
                            <div>TELA DE PERFIL</div>
                        </PrivateRoute>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                <Cart /> {/*esse carrinho idedependente e pode ser colocado em qualque lugar menos detro das rotas se nao todas as rotas vao ter carrinho*/}
            </Container>
        </BrowserRouter>
    );
}