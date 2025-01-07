

export interface Ticket{
    id:string;
    title:string;
    text:string;
    status: 'closed' | 'open';
}