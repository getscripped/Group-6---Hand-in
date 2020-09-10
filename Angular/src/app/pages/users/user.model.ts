export class User {
  id: number;
  username: string;
  password: string;  
  profile: UserProfile;
  work: UserWork;
  contacts: UserContacts;
  social: UserSocial;
  settings: UserSettings;
  skills: UserSkills;
}

export class UserProfile {  
  idNumber:number;
  name: string;
  surname: string;  
  DoB: Object;
  address:string;
  gender: string;
  image: string;
}

export class UserWork {
  company: string;
  position: string;
  salary: number;
}

export class UserContacts{
  email: string;
  phone: string;
  address: string;  
}

export class UserSocial {
  facebook: string;
  twitter: string;
  google: string;
}

export class UserSettings{
  isActive: boolean;
  isDeleted: boolean;
  registrationDate: Date;
  joinedDate: Date;
}

export class UserSkills{
  plumbing: boolean;
  mechanic: boolean;
  hardware: boolean;
  electricity: boolean;
}