import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root', // se transforma em uma tag html, vem com o app no começo usualmente
  templateUrl: './app.component.html',
  // template: '<p>template</p>', por colocar esse template assim ou importar igual ta no templateurl
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: String = 'Minhas Tarefas';
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    })

    this.load();
  }

  clear() {
    this.form.reset();
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.save();
    this.clear();
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index != -1) this.todos.splice(index, 1);
    this.save();
  }

  markAsDone(todo: Todo) {
    todo.done = true;
    this.save();
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
    this.save();
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  load() {
    const data = localStorage.getItem('todos') || '';
    this.todos = JSON.parse(data);
  }
}
