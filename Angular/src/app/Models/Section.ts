export class Sections{
    constructor(){}

Section_ID: number;
Section_Name: string;
Section_Location: string;
Section_Size: string;
Is_Active: string;
Farm_Name: string;
Section_Type_Description: string;
}

export class PostSection{
    Section_ID: number;
    Section_Name: string;
    Section_Location: string;
    Section_Size: string;
    Is_Active: string;
    Farm_ID: string;
    Section_Type_Description: string;
}

export class ReportParameters{
    constructor(){}

    select: number;
}

export class Log{
    Audit_Log_ID : number;
    User_ID : number;
    Farm_ID : number;
    User_Action : string;
    Action_DateTime : string;
    Affected_ID : number;
}