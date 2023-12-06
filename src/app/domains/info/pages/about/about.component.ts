import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/menu/components/counter/counter.component'
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CounterComponent,],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  duration = signal(1000)
  messenger = signal('hola')

  changeDuration(event: Event){
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber)
  }

  changeMessenger(event: Event){
    const input = event.target as HTMLInputElement;
    this.messenger.set(input.value)
  }

}
