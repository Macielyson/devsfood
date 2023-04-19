import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // O Provider é um componente do React que permite que os componentes do aplicativo acessem a store Redux.
import { PersistGate } from 'redux-persist/integration/react'; //é um componente do React que é usado para exibir uma tela de carregamento ou outra tela enquanto o estado persistido é carregado na store.

import { store, persistor } from './store';
import './index.css';
import App from './App';

ReactDOM.render( // ReactDOM.render é chamado, que renderiza o componente App dentro da div com o id root no DOM

  < Provider store={store} >
    {/*O Provider é usado para envolver o componente PersistGate e passar a store Redux para o aplicativo através 
         de suas propriedades.*/}
    < PersistGate loading={null} persistor={persistor} >
      {/*O componente App é envolvido em um PersistGate, que recebe o persistor e a tela de carregamento
        (neste caso, definida como null), para garantir que o estado persistido seja carregado antes do
        componente App ser renderizado.*/}
      <App />
    </PersistGate >
  </Provider >,
  document.getElementById('root')
);