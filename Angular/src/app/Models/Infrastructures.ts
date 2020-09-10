export class Infrastructure{
    constructor(){}
Infrastructure_ID: number;
Section_Name: string;
Infrastructure_Type_Description: string;
Infrastructure_Size: string;
Infrastructure_Location: string;
Infrastructure_Name: string;
Is_Active: number;

}

export class PostInfrastructure{
    Infrastructure_Id: number;
    Section_ID: number;
    Infrastructure_Type_ID: number;
    Infrastructure_Name: string;
    Infrastructure_Location: string;
    Infrastructure_Size: string;
    Is_Active: number;
    Farm_ID:string;
    }