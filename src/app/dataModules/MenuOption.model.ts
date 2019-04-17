export class MenuOptionModel{



  constructor(public name : string,
              public submenus : MenuOptionModel[], 
              public hasSub : boolean){}


}


