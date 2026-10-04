import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular20-app');
  count = signal(0);
  double = computed(() => this.count() * 2);

  // Increment
  increment() { 
    this.count.update(c => c + 1); 
  }
  // reset data
  reset() { this.count.set(0); }
}
