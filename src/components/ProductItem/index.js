import React from "react";
import {
    Container,
    ProductPhotoArea,
    ProductPhoto,
    ProductInfoArea,
    ProductName,
    ProductPrice,
    ProductIngredients,
    ProductButtonArea,
    ProductButton

} from './styled';

export default ({data}) => {
    // em style a area de formatao do produto em se esta ok
    return (
        < Container >
            <ProductPhotoArea>
                <ProductPhoto src={data.image} />
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{data.name}</ProductName>
                <ProductPrice>R$ {data.price}</ProductPrice>
                <ProductIngredients>{data.ingredientes}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src='/assets/next.png' />
            </ProductButtonArea>
        </Container >
    )
}