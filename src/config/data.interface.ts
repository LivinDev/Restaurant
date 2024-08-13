export interface ProjectData {
  meta: Meta;
  dishes: DishesName;
 
}

export interface Meta {
  title: string;
  description: string;
  lang: string;
  charset: string;
  ldJson: LdJson;
}

export interface LdJson {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  logo: string;
  contactPoint?: {
    "@type": string;
    email: string;
    contactType: string;
  };
  sameAs?: string[];
}


export interface Dish {
  imagePath: string;
  alt: string;
  dishType: string;
}

export interface DishesName {
  dishes: Dish[];
}
