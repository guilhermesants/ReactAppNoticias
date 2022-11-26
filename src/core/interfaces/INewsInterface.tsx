// interface Isource {
//     id: string;
//     name: string
// }

type Category = {
    idCategory: number;
    name: string;
}

export interface INewsInterface {
    id?: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    category: Category;
    idCategory: number;
}