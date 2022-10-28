export type movie = {
    id: number;
    title: string;
    subTitle: string;
    year: number;
    imgUrl: string;
    synopsis: string;
    reviews: review[]; 
}

export type review = {
    id: number;
    text: string;
}
