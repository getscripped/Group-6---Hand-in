export class Maintenance{
    constructor(){}

    Maintenance_ID: number;
    Maintenance_Description: string;
    Maintenance_Start_Date: string;
    Maintenance_End_Date: string;
    Maintenance_Image: string;
    MT_ID: number;
    MT_Description: string;
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

export class PostMaintenance{
    Maintenance_ID: number;
    Maintenance_Description: string;
    Maintenance_Start_Date: string;
    Maintenance_End_Date: string;
    Maintenance_Image: string;
    Maintenance_Type_Description: string;
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

export class MaintenanceStaff{
    constructor(){}
    MaintenanceLog:Maintenance;
    Staff:Staff[];
    
}