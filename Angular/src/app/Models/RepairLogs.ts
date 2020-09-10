export class RepairLog{
    constructor(){}
    Vehicle_Repair_ID: number;
    Vehicle_Registration_Number: string;
    VRD: string;
    Vehicle_ID:number;
    VRD_ID: number;
    Vehicle_Repair_Date_Ended : Date;
    Vehicle_Repair_Date_Started: Date;
    Provider_Name: string;
    Vehicle_Repair_Cost: string;
    Status_Description: string;
}

export class PostRepairLog{
    Vehicle_Repair_Id: number;
    Vehicle_ID: string;
    VRD_ID: number;
    Vehicle_Repair_Document: string;
    Vehicle_Repair_Date_Ended : Date;
    Vehicle_Repair_Date_Started: Date;
    Vehicle_Repair_Cost: string;
    Status_ID: number;
    Provider_ID:number;
    Farm_ID:number;
    }

    export class PostNotification{
        Vehicle_Repair_ID:number;
        Vehicle_Repair_Date_Started:Date;
        Vehicle_Repair_Cost: string; 
        //Providers:string;
        Vehicle_ID:string;
        Provider_ID:number;
    }