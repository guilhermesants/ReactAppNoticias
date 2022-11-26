import styled from 'styled-components';

let text = {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center'
}


export const Button = styled.button`
    background-color: transparent;
    padding-left: 7px;
    padding-right: 7px;
    cursor: pointer;
    border: 0px;
    font-size: 20px;
    &:hover {
        color: #c7c7c7;
    }
`;

