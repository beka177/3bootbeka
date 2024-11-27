import { defineStore } from 'pinia'

export const useCategoryStore = defineStore('category', () => {
    const categories = [
        'Video Card',
        'CPU',
        'MotherBoard',
        'RAM',
    ];
    return {
        categories,
    }
})