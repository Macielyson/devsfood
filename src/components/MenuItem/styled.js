import styled from "styled-components";

export const LinkArea = styled.a`
    display: flex;
    background-color: ${props => props.active ? '#0B4D0B' : 'transparent'};
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const LinkIcon = styled.img`
    height: auto;
    width: 34px;
`;