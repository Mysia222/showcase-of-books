import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
})
export class SortPipe implements PipeTransform {
  comparePrice(bookA, bookB) {
    return bookA.price - bookB.price;
  }
 transform(value: any, sort: string) {
  
console.log(sort)

  if(sort === "SortPrice: Lowest to Highest") {

    return value.sort(this.comparePrice);

  }
 if (sort === "SortPrice: Highest to Lowest") {
    
    return value.sort(this.comparePrice).reverse();

  }
  if (sort == undefined || sort == "No sort") {
    return value;
  }
 }
}