export type FilterState = {
    limit: number,
    offset: number,
    categoryId?: number,
    title?: string,
    price_min: string,
    price_max: string,
}

export type PriceValues = Pick<FilterState,"price_min"|"price_max">

export type SearchTitleType ={
    title: string
}