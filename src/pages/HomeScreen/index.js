import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoryArea, CategoryList } from './styled';
import Header from '../../components/Header';
import api from '../../api';

import CategoryItem from '../../components/CategoryItem';

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('teste');
    const [categories, setCategories] = useState([]);

    // essa é uma state de funcionamento;
    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        // no react nao é indicado colocar async no useEffect direto.
        const getCategories = async () => {
            const cat = await api.getCategories();
            // ele pega faz a verificaçao e joga na state categories.
            if (cat.error === '') {
                setCategories(cat.result); // array de resultado.
            }
        };
        getCategories();
    }, []);

    //monitorando a categoria para quando for mudado a listagem muda
    useEffect(() => {

    }, [activeCategory]);
    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {/*processo de exibiçao*/}
            {categories.length > 0 &&
                <CategoryArea>
                    Selecione uma caregoria ({activeCategory})
                    <CategoryList>
                        {/*listando todos*/}
                        <CategoryItem
                            data={{
                                id: 0,
                                title: 'Todas as categorias',
                                image: '/assets/food-and-restaurant.png'
                            }}

                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                        />

                        {/*listando os da api*/}
                        {categories.map((item, index) => (
                            <CategoryItem
                                key={index}
                                data={item}
                                activeCategory={activeCategory} // ele vai armazenar o id da categoria que ta ativa
                                setActiveCategory={setActiveCategory} // passando uma funçao para trocar de categoria.
                            />
                        ))}
                    </CategoryList>
                </CategoryArea>
            }
        </Container>
    );
}