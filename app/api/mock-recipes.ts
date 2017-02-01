import { Recipe } from './../models/recipe';

export const RECIPES: Recipe[] = [
  { id: 1,
    cat: 'Breakfast',
    title: 'Scrambled eggs',
    serving: 2,
    image: 'app/images/default.png',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.',
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
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.',
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
]
