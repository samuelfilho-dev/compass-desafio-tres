export interface Product {
    id: string,
    name: string,
    sku: string,
    description: string,
    largeDescription: string,
    price: number,
    discrountPrice: number,
    isNew: boolean,
    imageLink: string,
    otherImageLink: string,
    createDate: Date,
    updateDate: Date,
    categories: string[]
}