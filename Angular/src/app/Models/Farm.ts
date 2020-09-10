export class Farm{
    constructor(){}
    Farm_ID:number;
    Farm_Type: string;
    Farm_Size:number;
    Farm_Name:string;
    Farm_Address: string;
    Farm_Email: string; 
    Farm_ContactNumber: string;
    Farm_Number: string;
    Farm_Avg_Health_Score: number;
    Province_ID:number;
    Province_Description: string;
    Farm_Type_Description:string;
    Is_Active: string;
    Foreman_Email:string;
    Foreman_Name:string;
}

export class PostFarm{
    Farm_ID:number;
    Farm_Type_ID: string;
    Farm_Size:number;
    Farm_Name:string;
    Farm_Address: string;
    Farm_ContactNumber:number;
    Farm_Email: string; 
    Farm_Number: string;
    Province_ID: string;
    Is_Active: string;
}

export class PostForeman{
    User_ID:number;
    Farm_ID:number;
    EmailAddress:string;
    Foreman_Name:string;
}