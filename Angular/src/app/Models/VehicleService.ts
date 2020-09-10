export class VehicleService{
    constructor(){}
    Vehicle_Service_ID:number;
    Vehicle_Service_Mileage: number;
    Vehicle_Service_Start_Date:Date;
    Vehicle_Service_End_Date: Date; 
    Vehicle_Service_Description: string;
    Vehicle_ID:number;
    VSD_ID:number;
    Provider_Name:string;
    Provider_ID:number;
}

export class PostVehicleService{
    Vehicle_Service_ID:number;
    Vehicle_Service_Mileage: number;
    Vehicle_Service_Start_Date:Date;
    Vehicle_Service_End_Date: Date; 
    Vehicle_Service_Description: string;
    Vehicle_Service_Document:string;
    VSD_ID:number;
    Provider_Name:string;
    Vehicle_ID:string;
    Provider_ID:number;
    Status_ID:number;
    Vehicle_Registration_Number:Number;
    
}

export class PostNotification{
    Vehicle_Service_ID:number;
    Vehicle_Service_Mileage: number;
    Vehicle_Service_Start_Date:Date;
    Vehicle_Service_End_Date: Date; 
    Vehicle_Service_Description: string;
    Provider_Name:string;
    Vehicle_ID:string;
    Provider_ID:number;
    Vehicle_Registration_Number:Number;
}