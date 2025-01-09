import { ISortingStrategy, SortingDirection } from '@infragistics/igniteui-angular';

export class CustomSortingStrategy implements ISortingStrategy {
    protected static _instance: CustomSortingStrategy | null = null;

    // コンストラクターをpublicに変更します。
    public constructor() { }

    public static instance(): CustomSortingStrategy {
        return this._instance || (this._instance = new this());
    }

    public sort(
        data: any[],
        fieldName: string,
        dir: SortingDirection,
        ignoreCase: boolean,
        valueResolver: (obj: any, key: string, isDate?: boolean) => any,
        isDate?: boolean,
        isTime?: boolean
    ) {
        const key = fieldName;
        const reverse = (dir === SortingDirection.Desc ? -1 : 1);
        // isDateおよびisTimeがnullのときはfalseを設定するように変更します。
        const cmpFunc = (obj1: any, obj2: any) => this.compareObjects(obj1, obj2, key, reverse, ignoreCase, valueResolver, isDate ?? false, isTime ?? false);
        return this.arraySort(data, cmpFunc);
    }

    public compareValues(a: any, b: any): number {
        const an = (a === null || a === undefined || a === '-');    // '-'をnullやundefinedと同じとして扱う処理を追加します
        const bn = (b === null || b === undefined || b === '-');    // '-'をnullやundefinedと同じとして扱う処理を追加します
        if (an) {
            if (bn) {
                return 0;
            }
            return -1;
        } else if (bn) {
            return 1;
        }
        return a > b ? 1 : a < b ? -1 : 0;
    }

    protected compareObjects(
        obj1: any,
        obj2: any,
        key: string,
        reverse: number,
        ignoreCase: boolean,
        valueResolver: (obj: any, key: string, isDate?: boolean, isTime?: boolean) => any,
        isDate: boolean,
        isTime: boolean
    ) {
        let a = valueResolver.call(this, obj1, key, isDate, isTime);
        let b = valueResolver.call(this, obj2, key, isDate, isTime);
        if (ignoreCase) {
            a = a && a.toLowerCase ? a.toLowerCase() : a;
            b = b && b.toLowerCase ? b.toLowerCase() : b;
        }
        return reverse * this.compareValues(a, b);
    }

    protected arraySort(data: any[], compareFn?: (arg0: any, arg1: any) => number): any[] {
        return data.sort(compareFn);
    }
}