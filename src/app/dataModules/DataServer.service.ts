import { Observable } from 'rxjs';
import { MenuOptionModel } from './MenuOption.model';



export class DataServerService{

  private menus : MenuOptionModel[];

  constructor(){
    this.menus = [];
    var list1 = [];
    for(var i = 0 ; i < 50 ; i ++){
      list1.push(new MenuOptionModel("hey yasdasd", [], i%10 == 0 && i != 0))
    }
    this.menus.push(new MenuOptionModel('Digital', list1, true));
    this.menus.push(new MenuOptionModel('Health & Beauty', list1, true));
    this.menus.push(new MenuOptionModel('Office Suppliment', list1, true));
    this.menus.push(new MenuOptionModel('Clothes', list1, true));
    this.menus.push(new MenuOptionModel('Dining Facilities', list1, true));
    this.menus.push(new MenuOptionModel('Toys', list1, true));
    this.menus.push(new MenuOptionModel('Gym', list1, true));
    this.menus.push(new MenuOptionModel('edibels', list1, true));

  }


  getMenus() : Observable <MenuOptionModel[]>{
    return Observable.create(
      (observer) => {
        observer.next(this.menus);
      }
    );
  }

  getPicture() : Observable <string> {
    return Observable.create(
      (observer) => {
        observer.next('https://cdn.pixabay.com/photo/2016/04/02/19/40/moon-1303512_960_720.png');
      }
    );
  }


}



