import { Observable } from "rxjs";

export interface ILoadingGuard {
    isLoading$: Observable<boolean>;
};