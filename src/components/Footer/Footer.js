import styled from "styled-components"

export const Footer = styled.div `
position: fixed;
bottom: 0px;
width: 100%;
height: 50px;
font-size: 16px;
display: flex;
justify-content: center;
align-items: center;
background: ${props => props.theme.colors.light_gray};
z-index: 3;
`
