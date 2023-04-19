import { combineReducers } from 'redux'; // funçao para combinar varios reducers
import UserReducer from './UserReducer'; // arquivo q contem o reducecer para o estado do usuario

// exporta um objeto que é o resultado de chamar a função combineReducers
// com um objeto que tem uma chave user e um valor que é o reducer UserReducer.
// Isso significa que o estado da aplicação tem uma propriedade user que é gerenciada
// pelo reducer UserReducer.
export default combineReducers({
    user: UserReducer
});