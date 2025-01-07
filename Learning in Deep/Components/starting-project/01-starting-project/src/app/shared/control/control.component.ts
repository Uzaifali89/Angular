import { afterNextRender, afterRender, Component ,contentChild,ContentChild,ElementRef,HostBinding,HostListener,input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation:ViewEncapsulation.None,
  host:{
    class:"control",
    '(click)':'OnClick()'
  }
})
export class ControlComponent {
 label = input.required();

 //@ContentChild('input') private control? : ElementRef<HTMLInputElement|HTMLTextAreaElement>

 //Signal ContentChild 
  private control = contentChild<ElementRef<HTMLInputElement|HTMLTextAreaElement>>('input');

  constructor(){
    afterRender(()=>{
      console.log("after render");
    });

    afterNextRender(() => {
      console.log("after next render")
    })
  }


 //--Alternative way of host binding
 //@HostBinding() className = 'control';


 //   --Alternative way host listner 
//  @HostListener('click') OnClick(){
//   console.log("Clicked!")
//  }

 OnClick(){
  console.log("Clicked!");
  console.log(this.control());
 }
}
