class ShoppingCart{
    constructor(){
        this.products = []
    }

    getItems() {
         return this.products;
    }

    addItem(itemName, quantity, price){
        return this.products.push({name: itemName, quantity: quantity, pricePerUnit: price})

    }
    clear() {
        return this.products = []
    }

    productCosts() {
       return this.products.map((product) => product.quantity * product.pricePerUnit)
    }
    
    total() {
        if(this.products.length > 0) {
            return this.productCosts().reduce((accumulator, currentProduct) => {return  accumulator + currentProduct})
        } else {
            return 0;
        }
    }
}

module.exports = ShoppingCart

