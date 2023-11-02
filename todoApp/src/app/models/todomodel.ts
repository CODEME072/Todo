export interface Todo {
    "id"?:string ,
    "task": string,
    "completed": false,
    "priority": string,
    "dueDate": Date,
    "notes": string,
    "category": string,
    "assignee": string
}