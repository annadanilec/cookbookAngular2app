import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Recipe } from './../../models/recipe';
import { RecipesService } from './../../services/recipes.service';
import { ShoppingListService } from './../../services/shopping-list.service';


@Component({
  moduleId: module.id,
  selector: 'recipe-detail',
  templateUrl: 'recipe-details.component.html',
  styleUrls: [ 'recipe-details.component.css' ]
})

export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  public infoMessage: boolean = false;

  constructor(
    private recipesService: RecipesService,
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  addToShoppingList(recipe: any): any {
    this.shoppingListService.addToShoppingList(recipe);
    this.infoMessage = true;
    setTimeout(function() {
        this.infoMessage = false;
    }.bind(this), 1000);
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.recipesService.getRecipe(+params['id']))
      .subscribe(recipe => this.recipe = recipe);
  }

  return(): void {
    this.location.back();
  }

  goBack(): void {
    this.location.back();
  }

  print(): void {
    let printContents: any;
    let popupWin: any;
    printContents = document.getElementById('printRecipe').innerHTML;
    popupWin = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWin.document.open();
    popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</html>');
    popupWin.document.close();
  }
}
