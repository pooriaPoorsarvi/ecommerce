import { ProductModel } from './Product.model';
import { OrderModel } from './Order.model';

class ProductOrder{
  constructor(public product : ProductModel,
              public count : number){}
}

// tslint:disable-next-line: max-classes-per-file
export class ShoppingCartModel{

  public cumilitive_price : number;
  constructor(public orders : ProductOrder[]){
    this.compute_cost();
  }

  compute_cost(){
    this.cumilitive_price = 0;
    for(let order of this.orders){
      var prod_price = order.product.promo_code ? order.product.main_price * (1-order.product.promo_code.percent) : (order.product.main_price) ;
      this.cumilitive_price += prod_price * order.count;
    }
  }

  findProduct(product : ProductModel) : number{
    var res = -1;
    for (var i = 0 ; i < this.orders.length ; i ++){
      if(this.orders[i].product.uid == product.uid){
        res = i;
        break;
      }
    }
    return res;
  }

  addProduct(product : ProductModel){
    var place = this.findProduct(product);
    if(place != -1){
      this.orders[place].count ++;
    }else{
      this.orders.push(new ProductOrder(product, 1));
    }
    this.compute_cost();
  }

  removeAll(){
    this.orders.splice(0, this.orders.length);
    this.compute_cost();
  }

  removeProduct(product : ProductModel){
    var ind = this.findProduct(product);
    if(ind == -1){
      return;
    }
    if(this.orders[ind].count > 0)
    this.orders[ind].count--;
  }

}

