export class Equipment{
    constructor(){}
Equipment_ID: number;
Equipment_Type_Description: string;
Infrastructure_Name: string;
Section_Name: string;
Equipment_Description: string;
Equipment_Condition: string;
Equipment_Cost: number;
Is_Active: string;

}


export class PostEquipment{
Equipment_Id:number;
Equipment_Type_ID: number;
Infrastructure_ID: number;
Section_ID: number;
Equipment_Description: string;
Equipment_Condition: string;
Equipment_Cost: number;
Is_Active: string;
Farm_ID:number;
}

export class EquipmentType{
    Equipment_Type_ID : number;
    Equipment_Type_Description: string;
}