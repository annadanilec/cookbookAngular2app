import { Injectable } from '@angular/core';
import { Recipe } from './../models/recipe';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class ShoppingListService {
    private shoppingList:any = {
      neededIngredients: [],
      recipe: []
    }

    addToShoppingList(recipe:any): any {
      let add = true;
      this.shoppingList.recipe.push(recipe);
      for(let i of recipe.ingredients) {
        add = true;
        if(this.shoppingList.neededIngredients.length == 0) {
          this.shoppingList.neededIngredients.push(i);
        } else {
          for (let j of this.shoppingList.neededIngredients){
            if(i.name == j.name) {
              j.quantity = i.quantity + j.quantity;
              add = false;
            }
          }
          if(add) {
            this.shoppingList.neededIngredients.push(i);
          }
        }
      }
    }

    getShoppingList() {
      return this.shoppingList;
    }
}
