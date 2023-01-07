import { ISlide } from "~/app/interfaces/islide.interface";

export interface IProduct {
    brand: string;

    category: string;

    description: string;

    discountPercentage: number;

    id: number;

    images: string[];

    price: number;

    rating: number;

    stock: number;

    thumbnail: string;

    title: string;
}

export function getSlidesFromProducts(products: IProduct[]): ISlide[] {
    return products.map((product: any) => {
        return {
            title: product.title,
            thumbnailUrl: product.thumbnail,
        };
    });
}