export interface KeyWords {
    newKeyWord: string
    id: string
    content: string
};
export interface FilterItem {
    id: number;
    text: string;
    checked: boolean;
    category: string;
}

export interface Filters {
    id: number;
    title: string;
    isExpand: boolean;
    items: FilterItem[];
}
export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
};

export interface OfferArray {
    id: string;
    position: string;
    specialization: string;
    gross_salary: string;
    work_type: string;
    company_name: string;
    location: string;
    logo: string;
    skills: Array<{
        skill: string;
        level: string;
    }>;
    keywords: string[];
};