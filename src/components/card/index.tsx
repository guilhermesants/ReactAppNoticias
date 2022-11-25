import React from 'react';
import {Area, Title, Button, NewsDate} from './styles';

  interface IPropsCard {
    url: string;
    title: string;
    date: string;
    image: string;
}

export const Card = ({url, title, date, image}: IPropsCard) => {


    const FormatTitulo = (text: string) => {
        return text.length > 30 ? text.substring(0, 30).toLowerCase() + '...' : text.toLowerCase();
    }

    return (
        <Area>
            <NewsDate>{date}</NewsDate>
            <Title>{FormatTitulo(title)}</Title>

            <img src={image} style={{width: '300px', height:'200px'}} />
            <a href={url} >
            <Button onClick={() => null} >Ver Notícia</Button>
            </a>
        </Area>
    )
}