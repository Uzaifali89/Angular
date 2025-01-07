import { Component , input , signal , output} from '@angular/core';
import { Ticket } from '../dashboard/tickets/tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
 data = input.required<Ticket>();
 close = output();
 isVisible = signal(false);

 OnToggle(){
   //this.isVisible.set(!this.isVisible);
   this.isVisible.update((wasVisible)=>!wasVisible);
 }

 OnClose(){
  
  this.close.emit();
  console.log('Pressed closed button')
 }
  
}
