

export class BrandService{
  BRAND_NAME : string = "BRAND NAME";
  EMPTY_USERS_PROFILE_PIC : string = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  BRAND_LOGO : string = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png";
  FOOTER_INFO : {name : string, address : string[]}[] = [
    {name : 'Get In Contact', address : ['/']},
    {name : 'Customer Services', address : ['/']},
    {name : 'Get To Know Us', address : ['/']},
    {name : 'Job Oppurtunities', address : ['/']},
  ];


  BACK_END_ROOT = "http://ecommerce.us-east-1.elasticbeanstalk.com/";

  API_URL = "api/v1/";

  USERS_URL = "user/";

  REGISTER_URL = "register/"


  getRegisterUrl() : string {
    return this.BACK_END_ROOT + this.API_URL + this.USERS_URL + this.REGISTER_URL;
  }


}

