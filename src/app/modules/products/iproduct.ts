import { ISlide } from "~/app/interfaces/islide.interface";

export interface IProduct {
    title: string;

    price: number;

    thumbnailUrl: string;

    dummyData: true;
}

export function getSlidesFromProducts(products: IProduct[]): ISlide[] {
    return products.map((product: IProduct) => {
        return {
            title: product.title,
            thumbnailUrl: product.thumbnailUrl,
        };
    });
}