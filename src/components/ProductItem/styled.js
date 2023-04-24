import styled from "styled-components";
/*
ProductPhotoArea,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductIngredients,
    ProductButtonArea,
    ProductButton
*/
export const Container = styled.div`
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgb(0, 0, 0, 0.16);
    background-color: #fff;
    padding: 10px;
    display: flex;
    align-items: center;
    color: #136713;
    cursor: pointer;
`;

export const ProductPhotoArea = styled.div`
    width: 100px;
`;

export const ProductInfoArea = styled.div`
    flex: 1;
    margin-left: 10px;
    margin-right: 10px;
`;

export const ProductButtonArea = styled.div``;

export const ProductPhoto = styled.img`
    width: 100%;
`;

export const ProductName = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export const ProductPrice = styled.div`
    font-size: 14px;
`;

export const ProductIngredients = styled.div`
    font-size: 15px;
`;

export const ProductButton = styled.img`
    width: 15px;
`; 