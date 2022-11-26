import React from 'react';
import * as C from './styles';

interface IProps {
    categoryName: string;
    id: number;
    search: (id?: number) => {}
}

export const CategoryComponet = ({categoryName,id, search}: IProps) => {

    return (
        <C.Button onClick={() => search(id)} >{categoryName}</C.Button>
    )

}