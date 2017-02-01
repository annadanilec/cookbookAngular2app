import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from './../../models/recipe';
import { ShoppingListService } from './../../services/shopping-list.service';



@Component({
  moduleId: module.id,
  selector: 'shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  recipes: Recipe[];

  private shoppingList:any= {
    neededIngredients: []
  }

  constructor(
    private router: Router,
    private shoppinglistService: ShoppingListService) {
      this.shoppingList = shoppinglistService.getShoppingList();
    }

    print(): void {
      let printContents: any;
      let popupWin: any;
      printContents = document.getElementById('printList').innerHTML;
      popupWin = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
      popupWin.document.open();
      popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + printContents + '</html>');
      popupWin.document.close();
    }

    ngOnInit(): void {
    }
}
