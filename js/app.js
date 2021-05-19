new Vue({
    el: '#global',
    data: {
        products: [1, 2, 3],
        counter: 0
    },
    computed: {
        getProduct() {
            return this.counter;
        }
    }
})