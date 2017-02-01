import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let recipes = [
      { id: 1,
        cat: 'Breakfast',
        title: 'Scrambled eggs',
        serving: 2,
        image: 'app/images/default.png',
        ingredients: [
          {
            name: 'eggs',
            quantity: 2,
            value: 'pcs'
          },
          {
            name: 'sausage',
            quantity: 0.5,
            value: 'kg'
          },
          {
            name: 'mashroom',
            quantity: 0.5,
            value: 'kg'
          },
          {
            name: 'tomato',
            quantity: 1,
            value: 'psc'
          }
        ]
      },
      { id: 2,
        cat: 'Dinner',
        title: 'Spagetti',
        serving: 4,
        image: 'app/images/default.png',
        ingredients: [
          {
            name: 'pasta',
            quantity: 0.5,
            value: 'kg'
          },
          {
            name: 'tomato souce',
            quantity: 0.2,
            value: 'kg'
          },
          {
            name: 'pork',
            quantity: 0.5,
            value: 'kg'
          },
          {
            name: 'tomato',
            quantity: 2,
            value: 'psc'
          }
        ]
      }
    ];
    return {recipes};
  }
}
