import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px 10px;    
    background-image:linear-gradient(275.38deg, #38405F 0%, rgba(56, 64, 95, 0) 57.92%);
    @media (max-width: 1000px) {
        padding: 20px 10px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-left: 10px;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    grid-gap: 10px;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Link = styled.a`
    color:#37405F;
    margin-bottom: 10px;
    font-size: 16px;
    text-decoration: none;
    &:hover {
        color: #C69B7B;
        transition: 500ms ease-in;
    }
`;

export const Title = styled.p`
    font-size: 18px;
    color:#37405F;
    margin-bottom: 10px;
`;

export const Il = styled.p`
    color:#37405F;
    margin-bottom: 5px;
    font-size: 16px;
    text-decoration: none;
    
`;

export const Img = styled.div`
width: 100px;
`;