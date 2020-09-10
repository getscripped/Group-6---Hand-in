export class Parameters{
    constructor(){}

    startDate: string;
    endDate: string;
}

export class Log{
    Audit_Log_ID : number;
    User_ID : number;
    Farm_ID : number;
    User_Action : string;
    Action_DateTime : string;
    Affected_ID : number;
}