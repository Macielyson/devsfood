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

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch} />
            {/*processo de exibiçao*/}
            {categories.length > 0 &&
                <CategoryArea>
                    Selecione uma caregoria
                    <CategoryList>
                        <CategoryItem title="Todas as categorias" image="food-and-restaurant.png" />
                    </CategoryList>
                </CategoryArea>
            }
        </Container>
    );
}