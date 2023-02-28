import { Category } from "./category";

export class CategoryRepository{
    private categories: Category[];

    constructor(){
        this.categories = [
            {id: 1, name: "Fantastik"},
            {id: 2, name: "Macera"},
            {id: 3, name: "Bilim Kurgu"},
            {id: 4, name: "Korku/Gerilim"}
        ]
    }

    getCategories(): Category[]{
        return this.categories;
    }
}