export interface KeyWords {
    newKeyWord: string
    id: string
    content: string
};

export interface Filters {
    numberOfFilters: number
    id: number
    isExpand: boolean
};

export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
};