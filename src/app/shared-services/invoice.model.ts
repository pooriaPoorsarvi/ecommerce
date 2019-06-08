import { ProductModel } from '../dataModules/Product.model';


export class InvoiceModel{

  total_price : number;
  number_of_products : number;
  constructor(public id : number,
              public products : ProductModel[],
              public state : string){
                this.computeTotalPrice();
                this.number_of_products = this.products.length;
              }
  computeTotalPrice(){
    this.total_price = 0;
    for (let product of this.products){
      this.total_price += product.promo_code ? product.main_price*(1-product.promo_code.percent) : product.main_price;
    }
  }


}



