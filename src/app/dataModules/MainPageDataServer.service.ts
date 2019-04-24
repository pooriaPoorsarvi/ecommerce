import { PromoModel } from './Promo.model';
import { MainPageDataServerModel } from './MainPageData.model';
import { CategoryModel } from './Category.model';
import { Observable } from 'rxjs';


export class MainPageDataServerService{

  private data : MainPageDataServerModel ;

  constructor(){

    var main_promos = [
      new PromoModel("promo1",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("first cat"),
                    "https://cdn-assets.alltrails.com/uploads/photo/image/20143242/extra_large_7390529a85d0da704b630d3fe371b1e4.jpg"
      ),
      new PromoModel("promo2",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("second cat"),
                    "https://jpdirollphotography.files.wordpress.com/2019/01/dsc_6292-edited-final-lum-mask-100518-c-web-srgb.jpg"
      ),
      new PromoModel("promo3",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("third cat"),
                    "https://cdn-assets.alltrails.com/uploads/photo/image/21732959/extra_large_e9ff46febfc0f6e85fab546c8808945b.jpg"
      ),
    ];

    var side_promo1 = new PromoModel("side1", "/", 0, new Date(), new CategoryModel("side1"), "https://i.pinimg.com/originals/07/82/78/0782787fa5d97e543f4e564579364de2.jpg");
    var side_promo2 = new PromoModel("side2", "/", 0, new Date(), new CategoryModel("side2"), "https://farm8.static.flickr.com/7853/33545849808_e462fe4d05_b.jpg");

    var promos_with_timer = [
      new PromoModel("promo1 xxxxxx",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("first cat"),
                    "https://cdn-assets.alltrails.com/uploads/photo/image/20143242/extra_large_7390529a85d0da704b630d3fe371b1e4.jpg"
      ),
      new PromoModel("promo2 xxxxxx",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("second cat"),
                    "https://jpdirollphotography.files.wordpress.com/2019/01/dsc_6292-edited-final-lum-mask-100518-c-web-srgb.jpg"
      ),
      new PromoModel("promo3 xxxxxx",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("third cat"),
                    "https://cdn-assets.alltrails.com/uploads/photo/image/21732959/extra_large_e9ff46febfc0f6e85fab546c8808945b.jpg"
      ),
      new PromoModel("promo4 xxxxxx",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("first cat"),
                    "https://cdn-assets.alltrails.com/uploads/photo/image/20143242/extra_large_7390529a85d0da704b630d3fe371b1e4.jpg"
      ),
      new PromoModel("promo5 xxxxxx",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("second cat"),
                    "https://jpdirollphotography.files.wordpress.com/2019/01/dsc_6292-edited-final-lum-mask-100518-c-web-srgb.jpg"
      ),
      new PromoModel("promo6 xxxxxx",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("third cat"),
                    "https://cdn-assets.alltrails.com/uploads/photo/image/21732959/extra_large_e9ff46febfc0f6e85fab546c8808945b.jpg"
      ),
    ];


    this.data = new MainPageDataServerModel(main_promos, side_promo1, side_promo2, promos_with_timer);

  }


  getMainPageContent() : Observable <MainPageDataServerModel> {
    return Observable.create(
      (observer) => {
        observer.next(this.data);
      }
    );
  }


}








