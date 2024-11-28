import { defineStore } from "pinia";
import { ref } from "vue";


export const useCartStore = defineStore('cart', () => {
    const carts = ref([{
        productId: 1,
        count: 1,
    }])   

    const findIndexProductCartById = (id) => {
        return carts.value.findIndex((product) => product.productId == id);
    }

    const updateCountCartById = (id, count = 1) => {
        const index = findIndexProductCartById(id);
        if (index != -1){
            carts.value[index].count = count;
        }
    }

    const addToCard = (id) => {
        const index = findIndexProductCartById(id);
        if (index != -1){
            updateCountCartById(id, carts.value[index].count + 1);
        } else {
            carts.value.push(
                {
                    productId: id,
                    count: 1,
                }
            )
        }

    }
    return {
        addToCard,
        updateCountCartById,
        findIndexProductCartById,
        defineStore,
    }
});

