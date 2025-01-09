export interface SampleDataType {
    ID: number;
    Col1: number | string;
}

export const SampleData: SampleDataType[] = [
    { ID: 1, Col1: 1 },
    { ID: 2, Col1: 8 },
    { ID: 3, Col1: 5 },
    { ID: 4, Col1: '-' },   // 欠損値
    { ID: 5, Col1: 3 },
    { ID: 6, Col1: '-' },   // 欠損値
    { ID: 7, Col1: 6 },
    { ID: 7, Col1: 12 },
]