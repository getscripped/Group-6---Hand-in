export class Parameters{
    constructor(){}

    startDate: string;
    endDate: string;
}

export class Faults{
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