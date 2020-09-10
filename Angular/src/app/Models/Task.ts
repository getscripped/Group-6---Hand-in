export class Task{
    constructor(){}
Task_ID:number;
Task_Type_ID:number;
Task_Type_Description:string;
Importance_ID:number;
Importance_Description:string;
Section_ID:number
Section_Name:string;
Infrastructure_ID:number;
Infrastructure_Name:string;
Equipment_ID:number;
Equipment_Description:string;
Task_Description:string;
Task_Duration:number;


}

export class PostTask{
Task_ID:number;
Task_Type_Description:string;
Importance_Description:string;
Section_Name:string;
Infrastructure_Name:string;
Equipment_Description:string;
Task_Description:string;
Task_Duration:number;
Skill_Description:string;
}

export class Skill{
    constructor(){}
    Skill_ID:number;
    Skill_Description:string;
}

export class SkillArray{
    constructor(){}
    Task_ID:number;
    Skill_ID:number;
    Skill_Description:string;
}

export class TaskSkill{
    constructor(){}
    Task:Task;
    Skill:Skill[];
}