import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 15px;
`;

export const CategoryArea = styled.div`
    margin-top: 20px;
    color: #FFF;
    /*height: 2000px;*/
`;

export const CategoryList = styled.div`
    display:flex;
    margin-top: 10px;
`;

export const ProductArea = styled.div`
    margin-top: 20px;
    margin-botton: 20px
`;

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
`;