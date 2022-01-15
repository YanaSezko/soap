import { makeAutoObservable } from "mobx"

export default class ProductStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Мыло' },
            { id: 2, name: 'Шампунь' }
        ]
        this._brands = [
            { id: 1, name: 'Чёрная глина' },
            { id: 1, name: 'Красная глина' },
            { id: 1, name: 'Голубая глина' },
        ]
        this._products = [
            { id: 1, name: 'Цитрусовое', price: 100, rating: 5, img: 'https://www.crushpixel.com/big-static18/preview4/natural-chamomile-handmade-soap-orande-2796007.jpg' },
            { id: 2, name: 'Хвойное', price: 100, rating: 5, img: 'https://pinka.in.ua/image/cache/catalog/soaps/hvoine/hvoine3-740x400.jpg' },
            { id: 3, name: 'Цветочное', price: 100, rating: 5, img: 'https://sver4ok.ru/UserFiles/Image/TOVARY/KOSMETIKA/NATURALNOE-MYLO/MYLO-RUCHNOI-RABOTY/naturalnoe-mylo-image-01.jpg' }
        ]

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }

    setProducts(products) {
        this._products = products
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get products() {
        return this._products
    }
}