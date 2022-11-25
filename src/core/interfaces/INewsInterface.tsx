interface Isource {
    id: string;
    name: string
}

export interface INewsInterface {
    id?: string;
    source?: Isource;
    author?: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}