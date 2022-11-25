import styled from 'styled-components';

export const Area = styled.div`
    background-color: #f1f1f1;
    height: 380px;
    width: 300px;
    border-radius: 25px;
    margin-top: 10px;
    margin-left: 7px;
    margin-right: 7px;
    display: inline-block;
    /* -webkit-box-shadow: 9px 7px 5px rgba(50, 50, 50, 0.77);
    -moz-box-shadow:    9px 7px 5px rgba(50, 50, 50, 0.77);
    box-shadow:         9px 7px 5px rgba(50, 50, 50, 0.77); */
`;

export const Title = styled.p`
    margin-left: 7;
    padding-left: 10px;
    padding-top: 5px; 
`;

export const NewsDate = styled.p`
    padding-left: 115px;
`;

export const Button = styled.button`
    size: 30px;
    background-color: transparent;
    padding-left: 7px;
    padding-right: 7px;
    cursor: pointer;
    border: 0px;
    font-size: 20px;
    padding-left: 100px;
    padding-top: 20px;
    &:hover {
        color: #eba417;
    }
`;