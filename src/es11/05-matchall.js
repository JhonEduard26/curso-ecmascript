const regex = /\b(Apple)+\b/g

const fruit = 'Apple Banana Kiwi Pineapple Berry Apple Strawberry Apple'

for (const match of fruit.matchAll(regex)) {
  console.log(match)
}