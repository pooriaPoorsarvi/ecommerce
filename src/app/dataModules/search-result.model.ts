

export class SearchResultModel <T>{



  constructor(public value : T,
              public relevance : number,
              public date : Date,
              public popularity : number,
              ){}


}


