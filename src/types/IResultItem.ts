import {ISelectValue} from "./ISelectValue";

export interface IResultItem {
    type: string,
    value: ISelectValue[],
    styles: {
        color: string,
        background: string,
    },
    units: string,
    middleValue: string,
    minmax: number[],
    step: number,
}