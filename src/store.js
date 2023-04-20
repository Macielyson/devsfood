import { createStore } from 'redux';// funçao, que cria a store, uma estrutura de dados que contem todos os estados da aplicaçao
import { persistStore, persistReducer } from 'redux-persist'; // permitem que o estado da store seja armazenado e recuperado de forma persistente em um local de armazenamento.
import storage from 'redux-persist/lib/storage'; //  é um objeto que especifica onde o estado persistido será armazenado

import rootReducer from './reducers'; //combinerReducers

const persistConfig = { //  é um objeto que contém as configurações da persistência
    key: 'root', //  chave única que identifica o estado persistido
    storage, //o objeto storage que usaremos para armazenar o estado
    whitelist: ['user'] // o nome dos reducers que quero manter salvo.
};

const persistedReducer = persistReducer(persistConfig, rootReducer); //  é um reducer que é criado usando a função persistReducer

// Em seguida, criamos a store com o persistedReducer e depois criamos o 
// persistor, que é um objeto que permite que a store persista seu estado.
let store = createStore(persistedReducer);
let persistor = persistStore(store);

export { store, persistor };