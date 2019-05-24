import { MakerModel } from './Maker.model';
import { ProductModel } from './Product.model';
import { PromoModel } from './Promo.model';


/*
This model was made in order to have a standard way of showing the data in the index page
*/

export class MainPageDataServerModel{

  constructor(public main_promos : PromoModel[],
              public side_promo1 : PromoModel,
              // public side_promo2 : PromoModel,
              public promo_with_time : PromoModel[],
              public products_popular ? : ProductModel[],
              public products_latest ? : ProductModel[],
              public products_recommanded ? : ProductModel[],
              public alternating_promo ? : PromoModel[],
              public products_cat_1 ?  : ProductModel[],
              public small_important_recommendation ? : ProductModel[],
              // All the above should be mandetory and we have made them optional only for now
              public products_cat_2 ? : ProductModel[],
              public products_cat_3 ? : ProductModel[],
              public products_cat_4 ? : ProductModel[],
              public products_cat_5 ? : ProductModel[],
              public products_cat_6 ? : ProductModel[],
              public speacial_brands ? : MakerModel,
              public promos_main_quartile1? : PromoModel[],
              public promos_main_quartile2? : PromoModel[],
              public promos_binary ? : PromoModel[],
              public promos_lone ? : PromoModel[],
              ){}




}



