import React from "react";
import { Container, CategoryImage } from './styled';

export default ({ data, activeCategory, setActiveCategory }) => {

    const handleCategoryClick = () => {
        setActiveCategory(data.id);
    }

    return (
        <Container
            active={activeCategory}
            id={data.id}
            onClick={handleCategoryClick}
           
            data-tooltip-id="tip-top"
            data-tooltip-content={data.name}
            data-tooltip-place="top"
        >

            <CategoryImage src={data.image} />

        </Container>

    )
}