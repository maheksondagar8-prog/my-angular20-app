import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular20-app');
  newTodo = '';
  todos = signal<string[]>([]);
  count = signal(0);
  double = computed(() => this.count() * 2);

  users = signal([
    { id: 1, name: 'Asha', role: 'admin' },
    { id: 2, name: 'Ravi', role: 'guest' },
    { id: 3, name: 'Meera', role: 'user' },
  ]);

  // Increment
  increment() { 
    this.count.update(c => c + 1);
  }
  // reset data
  reset() { this.count.set(0); }


  add() {
    if (!this.newTodo.trim()) return;
    this.todos.update(list => [...list, this.newTodo]);
    this.newTodo = '';
  }
  remove(item: string) {
    this.todos.update(list => list.filter(t => t !== item));
  }
}
