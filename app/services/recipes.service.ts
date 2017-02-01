import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Recipe } from './../models/recipe';
import { RECIPES } from './../api/mock-recipes';

@Injectable()
export class RecipesService {

  getRecipes(): Recipe[] {
    return RECIPES;
  }

  recipes = RECIPES;

  addRecipe(recipe: any){
    this.recipes.push(recipe);
  }

  getRecipe(id: number): Recipe[] {
    return this.getRecipes();
  }
}
