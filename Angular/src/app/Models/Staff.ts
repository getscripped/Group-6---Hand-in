export class Staff{
    constructor(){}
Staff_ID:number;
Farm_ID:number;
Staff_Name:string;
Staff_Surname:string;
Staff_Phone_Number:string;
Staff_DoB:string;
Staff_Photo:string;
Staff_Address:string;
Is_Active:boolean;

}

export class Skill{
    
    Staff_ID:number;
    Skill_ID:number;
    Skill_Description:string;
}
export class PostStaff{
    Staff_ID:number;
    Farm_ID:number;
    Staff_Name:string;
    Staff_Surname:string;
    Staff_Phone_Number:string;
    Staff_DoB:string;
    Staff_Photo:string;
    Staff_Address:string;
    Is_Active:string; 
}

export class StaffSkill{
    constructor(){}
    Staff:Staff;
    Skill:Skill[];
}
