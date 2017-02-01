import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "categoryFilter"
})

export class CategoryFilterPipe implements PipeTransform {
  transform(recipes: Array<any>, condition: {[cat: string]: any}): Array<any>{
    if(!recipes) {
      return null;
    }
    return recipes.filter(recipe=>{
      for(let cat in condition){
        if(recipe[cat] == condition[cat] || condition[cat] == ''){
          return true;
        } else if(recipe[cat] !== condition[cat]){
          return false;
        }
      }
      return true;
    })
  }
}
