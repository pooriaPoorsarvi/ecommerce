import { PromoModel } from './Promo.model';
import { MainPageDataServerModel } from './MainPageData.model';
import { CategoryModel } from './Category.model';
import { Observable } from 'rxjs';
import { ProductModel } from './Product.model';
import { MakerModel } from './Maker.model';


export class MainPageDataServerService{

  static lorem_ipsum  = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in dui condimentum, hendrerit metus ac, cursus enim. Donec in sollicitudin risus, sed accumsan mi. Donec diam metus, accumsan in volutpat ac, egestas quis ipsum. Aliquam aliquam auctor tellus, eget lacinia mi tempor vitae. Fusce porttitor felis dolor, eget efficitur nibh egestas sit amet. Maecenas non massa id turpis consectetur fringilla eu eget dolor. In congue augue id justo scelerisque, nec suscipit nibh consectetur. Donec a consectetur massa. Vestibulum dapibus pellentesque felis, sed dapibus lacus condimentum quis. Donec maximus ante sed dictum gravida. Cras facilisis dui eu metus finibus ullamcorper placerat eget ex. Donec vitae neque ipsum. Nullam nec finibus arcu.

  Praesent luctus et lectus nec venenatis. Ut euismod accumsan mi a porttitor. Proin eget libero sit amet lectus tincidunt convallis. In justo nisl, rhoncus vitae tellus et, vehicula pharetra lorem. Donec eu faucibus massa. Sed elit turpis, finibus et laoreet nec, dictum et velit. Donec malesuada ac elit nec dapibus. Aenean vel dapibus leo. Praesent condimentum et massa non finibus. Phasellus quis dictum orci. Nulla a ornare massa, ac maximus massa. Nunc tempus ex et gravida posuere.

  Sed ac arcu vehicula, ullamcorper metus eu, tincidunt dolor. Etiam eget ullamcorper urna. Donec in finibus nisl. In et luctus odio, vehicula pellentesque libero. Nulla et mollis augue. Curabitur congue libero diam. Morbi libero nulla, cursus sit amet est non, tincidunt dapibus velit. Vestibulum tincidunt quis lorem vitae tincidunt. Cras ullamcorper vitae arcu sit amet ultricies. Etiam quis tellus ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin blandit in felis ac malesuada. Etiam in ipsum quis est efficitur rhoncus vel ut enim. Etiam sodales volutpat eros nec bibendum. Phasellus eu semper nisi.

  Suspendisse facilisis odio et euismod fringilla. Quisque nulla est, finibus in ipsum ac, porta tempus neque. Maecenas posuere tortor massa. Quisque dictum lobortis neque sed fringilla. Duis ac mi eu turpis interdum convallis sed eu velit. Etiam mollis tincidunt eros, vitae mattis mi fermentum sit amet. Vestibulum eu lacus dui. Vestibulum tempor semper risus, at vestibulum lorem dapibus sed. Sed pretium placerat lorem sed elementum. Sed mattis enim eu massa suscipit ultricies.

  Cras ex velit, imperdiet id lacus ac, luctus maximus felis. Quisque sit amet erat ut velit hendrerit scelerisque ut nec erat. Integer aliquet ligula eu est congue maximus. Praesent et fringilla libero, nec ultrices magna. Cras dignissim enim at mi pharetra posuere. Suspendisse rutrum nisi euismod libero faucibus, vitae commodo neque dapibus. Mauris ac elit odio. Pellentesque faucibus dui in purus fringilla viverra. Phasellus augue lacus, hendrerit ac rhoncus sed, porta vitae leo. Nulla ac aliquet urna. Mauris tempus ac ipsum at semper. Aliquam in auctor enim. Etiam sed ligula at dolor accumsan sollicitudin. Fusce cursus metus eu leo pulvinar venenatis. Praesent tempus dui non nibh rutrum, ut egestas tellus commodo. Vestibulum sit amet vestibulum ante, vel sagittis purus.`;

  // TODO add some controls in the backend for the sizes of the images and also handle which images have to be transparent
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

    var side_promo1 = new PromoModel("side1", "/", 0, new Date(), new CategoryModel("side1"), "https://www.airfrance.fr/FR/common/common/img/tbaf/news/PRG/immersion-fantasmagorique-dans-la-nature-autour-de-prague/PRG-immersion-fantasmagorique-dans-la-nature-autour-de-prague-1_1-1024x1024.jpg");
    var side_promo2 = new PromoModel("side2", "/", 0, new Date(), new CategoryModel("side2"), "https://photo.szmigiel.design/wp-content/uploads/2017/02/panoramic-stawy-milickie-szmigieldesign-_MG_2070-Pano-Edit.jpg");
















    var dummyMaker = new MakerModel("this is a sample maker name", []);
    var prod1 = new ProductModel("this is a sample name",
                                  420,
                                  MainPageDataServerService.lorem_ipsum,
                                  221,
                                  dummyMaker,
                                  new CategoryModel("This is a sample category name"),
                                  100,
                                  ["http://pluspng.com/img-png/money-png--1663.png"],
                                  ["This is a sample main feature",
                                  "This is a sample main feature",
                                  "This is a sample main feature",
                                  "This is a sample main feature",
                                  ]
                                  );
    var promos_with_timer = [
      new PromoModel("promo1 xxxxxx",
                     "/",
                     0,
                     new Date("January 1, 2020 12:00:00"),
                     new CategoryModel("first cat"),
                    "",
                    prod1,
      ),
      new PromoModel("promo2 xxxxxx",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("second cat"),
                    "",
                    prod1,
      ),
      new PromoModel("promo3 xxxxxx",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("third cat"),
                    "",
                    prod1,
      ),
      new PromoModel("promo4 xxxxxx",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("first cat"),
                    "",
                    prod1
      ),
      new PromoModel("promo5 xxxxxx",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("second cat"),
                    "",
                    prod1
      ),
      new PromoModel("promo6 xxxxxx",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("third cat"),
                    "",
                    prod1,
      ),
      new PromoModel("promo7 xxxxxx",
                     "/",
                     0,
                     new Date(),
                     new CategoryModel("third cat"),
                    "",
                    prod1,
      ),
    ];


    // this.data = new MainPageDataServerModel(main_promos, side_promo1, side_promo2, promos_with_timer);
    this.data = new MainPageDataServerModel(main_promos, side_promo1, promos_with_timer);



    this.data.promos_main_quartile1 = [
      new PromoModel("promo3",
                   "/",
                   0,
                   new Date(),
                   new CategoryModel("third cat"),
                  "https://static.wixstatic.com/media/b8faca_6f555564e0f844248871cf3f5d065989~mv2_d_2048_2048_s_2.jpg/v1/fill/w_2048,h_2048,al_c,q_90/file.jpg"
    ),
    new PromoModel("promo3",
                   "/",
                   0,
                   new Date(),
                   new CategoryModel("third cat"),
                  "http://papers.co/wallpaper/papers.co-ob69-lake-mountain-river-nature-40-wallpaper.jpg"
    ),
    new PromoModel("promo3",
                   "/",
                   0,
                   new Date(),
                   new CategoryModel("third cat"),
                  "http://papers.co/wallpaper/papers.co-my27-nature-river-lake-mountain-tree-vacation-flare-40-wallpaper.jpg"
    ),
    new PromoModel("promo3",
                   "/",
                   0,
                   new Date(),
                   new CategoryModel("third cat"),
                  "http://papers.co/wallpaper/papers.co-ak72-alien-blue-earth-space-planet-dark-40-wallpaper.jpg"
    ),
    ] ;
    this.data.products_popular = [
      prod1,
    ];
    var prod2 = new ProductModel("this is a sample name",
                                  21566,
                                  MainPageDataServerService.lorem_ipsum,
                                  221,
                                  dummyMaker,
                                  new CategoryModel("This is a sample category name"),
                                  100,
                                  ["http://pluspng.com/img-png/money-png--1663.png"],
                                  ["This is a sample main feature",
                                  "This is a sample main feature",
                                  "This is a sample main feature",
                                  "This is a sample main feature",
                                  ]
                                  );
    this.data.products_popular.push(...[prod2,prod2,prod2,prod2]);
    this.data.products_recommanded = this.data.products_popular.slice();
  }


  getMainPageContent() : Observable <MainPageDataServerModel> {
    return Observable.create(
      (observer) => {
        observer.next(this.data);
      }
    );
  }


}








