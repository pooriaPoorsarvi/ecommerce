

export class AddressModel{
  // TODO make these strings into enums
  // TODO check if you need phone for all or not
  constructor(public name : string,
              public province : string,
              public city : string,
              public zip : string,
              public address : string,
              public phone : number,
              public lat : number,
              public lang : number){}
}

