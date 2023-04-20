import React, { useState } from "react";
import { Container, Logo, SearchInput } from './styled';

export default ({ search, onSearch }) => {

    const [inputActive, setInputActive] = useState(false);

    const handleInputFocus = () => {
        // quando o curso passaar por cima 
        setInputActive(true);
    }
    const handleInputBlur = () => {
        // quando tirar o curso. ativar ou nao ativar.
        // e so fecha se o campo estiver vazio.
        if (search == '') {
            setInputActive(false);
        }

    }
    const handleChange = (e) => {
        onSearch(e.target.value);
    }

    return (
        <Container>
            <Logo src="/assets/logo.png" />
            <SearchInput
                type="text"
                placeholder="Digite um produto..."
                value={search}
                onChange={handleChange}
                active={inputActive}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur} />
        </Container>
    )
}