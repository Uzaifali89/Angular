import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DestroyRef,
  Inject,
  OnDestroy,
  OnInit,
  effect,
  inject,
  signal
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent
  implements OnInit, AfterViewInit
{
  currentStatus = signal< 'online' | 'offline' | 'unknown'>('online')  //Literal Types .. Its only allow specific string value instead of all string .
  
  private destroyRef = inject(DestroyRef);
  constructor() {

    effect(()=>{
      console.log(this.currentStatus() )
    });
  }

  ngOnInit() {
    console.log('NG ON INIT');
    const interval = setInterval(() => {
      const random_time = Math.random(); // return 0 - 1 like 0.999999

      if (random_time < 0.5) {
        this.currentStatus.set('online');
      } else if (random_time < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 3000);

    this.destroyRef.onDestroy(()=>{
      clearInterval(interval);
    })
  }

  ngAfterViewInit() {
    console.log('After view Init');
  }

  // ngAfterViewChecked() {
  //   console.log('After view Checked');
  // }

  
  // ngOnDestroy() {
  //    console.log('OnDestroy');
  //    clearTimeout(this.interval);
  // }

  
 
}
