import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryRepository } from '../models/category.repository';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories: Category[]
  categoryRepository: CategoryRepository
  selectedCategory:Category = {id: -1 , name: ""}

  constructor(){
    this.categoryRepository = new CategoryRepository;
    this.categories = this.categoryRepository.getCategories();
  }

  displayAll = true
  selectCategory(item?: Category){
    
    if(item){
      this.selectedCategory = item
      this.displayAll = false
    }else{
      this.selectedCategory = {id: -1 , name: ""}
      this.displayAll = true
    }
    
    
    
  }

}
