import { Component, ViewChild , ElementRef, viewChild, Output, EventEmitter,output} from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { ControlComponent } from '../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
//@ViewChild('form') form? : ElementRef<HTMLFormElement>;
private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

//@Output() added! : EventEmitter<{title:string , text:string}>;
add = output<{title:string , text:string}>();

  OnSubmit(title: HTMLInputElement , text :HTMLTextAreaElement) {
    // console.dir(title);
    // console.log(title.value);
      
    this.add.emit({title:title.value , text: text.value});
    this.form().nativeElement.reset();
  }
}
