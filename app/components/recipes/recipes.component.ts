import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Models
import { Recipe } from './../../models/recipe';
//Services
import { RecipesService } from './../../services/recipes.service';
import { ShoppingListService } from './../../services/shopping-list.service';


@Component({
  moduleId: module.id,
  selector: 'my-recipes',
  templateUrl: 'recipes.component.html',
  styleUrls: [ 'recipes.component.css' ]
})


export class RecipesComponent implements OnInit {
  recipes: Recipe[];
  categories = [
    {name: 'Breakfast'},
    {name: 'Dinner'},
    {name: 'Lunch'},
    {name: 'Snack'},
    {name: 'Dessert'},
    {name: 'Supper'}
  ];
  selectedCategory = '';
  public infoMessage: any = {
    index: -1,
    category: ''
  }

  constructor(
    private router: Router,
    private recipesService: RecipesService,
    private shoppingListService: ShoppingListService
  ) {}

    getRecipes(): void {
      this.recipes = this.recipesService.getRecipes();
    }

    ngOnInit(): void {
      this.getRecipes();
    }

    addToShoppingList(recipe: any, index: number, category: string): any {
      this.shoppingListService.addToShoppingList(recipe);
      this.infoMessage.index = index;
      this.infoMessage.category = category;
      setTimeout(function() {
          this.infoMessage.index = -1;
          this.infoMessage.category = ''
      }.bind(this), 1000);
    }
    selectCategory(category:{name:string}){
      this.selectedCategory = category.name;
    }
    clearCategory(){
      this.selectedCategory = '';
    }
}
