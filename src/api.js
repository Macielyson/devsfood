// aqui ficara as configuraçoes de API. paraca voce queira mudar pro firebase por exemplo da certo

// a base da minha api
let BASE = 'https://api.b7web.com.br/devsfood/api';

// todos metos todas as consultas da api
export default {
    // caso voce queira mudar para o firebase. nao tem problema voce vai mudar apenas aqui 
    getCategories: async () => {
        // requisiçao GET /categories
        const res = await fetch(BASE + '/categories');
        // pega resposta e tranfoma em json.
        const json = await res.json();
        return json;
    }
}