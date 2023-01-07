import { IProduct } from "../iproduct";

export type IProductQuickView = Omit<IProduct, "dummyData">;

export function getQuickViewsFromProducts(products: IProduct[]): IProductQuickView[] {
    return products.map((product: IProduct) => {
        const { dummyData, ...quickView } = product;
        return quickView;
    });
}

// export interface IProductQuickView {
//     title: string;

//     price: number;

//     thumbnailUrl: string;
// }

// type IProductQuickView = Omit<IProduct, "name" | "age">;