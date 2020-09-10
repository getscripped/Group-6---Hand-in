export class Faults{
    constructor(){}

    Fault_ID: number;
    Fault_Description: string;
    Fault_Start_Date: string;
    Fault_End_Date: string;
    Fault_Image: string;
    FT_ID: number;
    FT_Description: string;
    Equipment_ID: number;
    Equipment_Description: string;
    Infrastructure_ID: number;
    Infrastructure_Name: string;
    Status_ID: number;
    Status_Description: string;
    Importance_ID: number;
    Importance_Description: string;
    
    Section_ID: number;
    Section_Name: string;
}

export class PostFault{
    Fault_ID: number;
    Fault_Description: string;
    Fault_Start_Date: string;
    Fault_End_Date: string;
    Fault_Image: string;
    Fault_Type_Description: string;
    Equipment_Description: string;
    Infrastructure_Description: string;
    Status_Description: string;
    Importance_Description: string;
    
    Section_ID: number;
}

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

export class FaultStaff{
    constructor(){}
    FaultLog:Faults;
    Staff:Staff[];
    
}

export class MessageClass{
    constructor(){}
    to: string;
    body: string;
    staffID: number;
}