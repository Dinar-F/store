export type ProductType ={
    id: number,
    title: string,
    price: number,
    description: string,
    category: {
        id: number,
        name: string,
        image: string
    },
    images: string[],
}

export type CategoryType = {
    id: number,
    name: string,
    image: string,
}

export type CardProps = {
    product: ProductType,
}