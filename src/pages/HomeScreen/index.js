import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import {
    Container,
    CategoryArea,
    CategoryList,
    ProductArea,
    ProductList,
    ProductpaginationArea,
    ProductPaginationItem

} from './styled';
import Header from '../../components/Header';
import api from '../../api';

import CategoryItem from '../../components/CategoryItem';

import ReactTooltip from '../../components/CategoryItem';
import ProductItem from '../../components/ProductItem';

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalPages, setTotalPages] = useState(0); // total de paginas
    const [activeCategory, setActiveCategory] = useState(0);  // essa é uma state de funcionamento;
    const [activePage, setActivePage] = useState(0); // pagina atual

    const getProducts = async () => {
        const prods = await api.getProducts();
        if (prods.error == '') {
            setProducts(prods.result.data);
            setTotalPages(prods.result.pages);
            setActivePage(prods.result.page)
        }
    }

    useEffect(() => {
        // no react nao é indicado colocar async no useEffect direto.
        const getCategories = async () => {
            const cat = await api.getCategories();
            // ele pega faz a verificaçao e joga na state categories.
            if (cat.error === '') {
                setCategories(cat.result); // array de resultado.
            }

            ReactTooltip.rebiuld(); // ele vai reler as categorias
        };
        getCategories();
    }, []);
    // corrigir o scrou estrutural.

    //monitorando a categoria para quando for mudado a listagem muda
    useEffect(() => {
        // antes da requisiçao ele zera o array;

        setProducts([]);
        getProducts();
    }, [activeCategory, activePage]);
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
                                name: 'Todas as categorias',
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
            {products.length > 0 &&
                <ProductArea>
                    <ProductList>
                        {products.map((item, index) => (
                            <ProductItem key={index} data={item} />
                        ))}
                    </ProductList>
                </ProductArea>
            }
            {totalPages > 0 &&
                <ProductpaginationArea>
                    {/*ele cria um array com uma determinada quantidade de posiçoes. fill = seta valores 0. map percorrer*/}
                    {Array(5).fill(0).map((item, index) => (
                        <ProductPaginationItem
                            key={index}
                            active={activePage}
                            current={index + 1}
                            onClick={() => setActivePage(index + 1)}
                        >
                            {index + 1}
                        </ProductPaginationItem>
                    ))}
                </ProductpaginationArea>
            }
        </Container>
    );
}