export class ScheduledTask{
    constructor(){}
    Schedule_ID: number;
    Staff_Name: string;
    Schedule_End_Date : Date;
    Schedule_Start_Date: Date;
    Task_Description: string;
    Day_Description: string;
    Status_Description: string;
}

export class PostScheduledTasks{
    Schedule_ID: number;
    Staff_ID: number;
    Schedule_End_Date : Date;
    Schedule_Start_Date: Date;
    Task_ID: number;
    Day_ID: number;
    Status_ID: number;
    Farm_ID: number;
}