import { Component , input, Input} from '@angular/core';
import { NewTicketComponent } from '../../new-ticket/new-ticket.component';
import { Ticket } from './tickets.model';
import { TicketComponent } from '../../ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
 // @Input('data') data? : {};
 //data = input({transform:(value : number)=> value + 2})
  tickets: Ticket[] = [];

  OnAdd(tickets: { title: string; text: string }) {
    const ticket: Ticket = {
      id: Math.random().toString(),
      title: tickets.title,
      text: tickets.text,
      status: 'open',
    };

    this.tickets.push(ticket);
  }

  OnCloseTicket(id: string) {
    console.log("OnCloseTicket")
      
    
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id == id) {
        return { ...ticket, status : 'closed' };
      }
      return ticket;
    });

    console.log(this.tickets)
  }
}
