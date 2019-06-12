
export function changeField(obj : any, before : string, after : string){
  if(obj.hasOwnProperty(before) && !obj.hasOwnProperty(after)){
    obj[after] = obj[before];
    delete obj[before];
  }else{
    console.log("something went wrong with changeField");
  }
  return obj;
}

export function addField(obj : any, val : any, after : string){
  if(!obj.hasOwnProperty(after)){
    obj[after] = val;
  }else{
    console.log("something went wrong with addField");
  }
  return obj;
}


export function deleteField(obj : any, before : string){
  if(obj.hasOwnProperty(before)){
    delete obj[before];
  }else{
    console.log("something went wrong with deleteField");
  }
  return obj;
}


