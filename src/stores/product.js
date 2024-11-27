import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

export const useProductStore = defineStore('product', () => {
    const products = ref([
        {
            id: 1,
            name: "M1",
            img: 'https://api.technodom.kz/f3/api/v1/images/800/800/263653_1.jpg',
            price: 100,
            category: 'MotherBoard',
            description: 'qwertyuioplkjhgfdsazxcvbnm',
            publish_at: '10.10.12',
        },
        {
            id: 2,
            name: "R2",
            img: 'https://api.technodom.kz/f3/api/v1/images/800/800/263653_1.jpg',
            price: 120,
            category: 'RAM',
            description: 'qwertyuioplkjhgfdsazxcvbnm',
            publish_at: '10.10.20',
        },
        {
            id: 3,
            name: "C3",
            img: 'https://api.technodom.kz/f3/api/v1/images/800/800/263653_1.jpg',
            price: 130,
            category: 'CPU',
            description: 'qwertyuioplkjhgfdsazxcvbnm',
            publish_at: '12.10.12',
        },
    ]);

    const productsFilteredByCategoryName = (category, searchText) => {
        if (category) {
            return products.value.filter((product) => product.category === category);
        }
        if (searchText) {
            return products.value.filter((product) => product.name.toLowerCase().includes(searchText.toLowerCase()));
        }
        return products.value;
    };

    return {
        products,
        productsFilteredByCategoryName,
    };
});
