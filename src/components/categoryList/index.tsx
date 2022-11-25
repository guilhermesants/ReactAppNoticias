import React from 'react';
import * as C from './styles';

interface IProps {
    categoryName: string;
    categoryNameTranslated: string;
    search: (name?: string) => {}
}

export const CategoryComponet = ({categoryName,categoryNameTranslated, search}: IProps) => {

    return (
        <C.Button onClick={() => search(categoryName)} >{categoryNameTranslated}</C.Button>
    )

}