import { IProduct } from "../products-list/iproduct.types";

export type IProductQuickView = Omit<IProduct, "dummyData">;

// export interface IProductQuickView {
//     title: string;

//     price: number;

//     thumbnailUrl: string;
// }

// type IProductQuickView = Omit<IProduct, "name" | "age">;