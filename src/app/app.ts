import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test1 } from './components/test1/test1';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular20-app');
}
