import { Task } from './events/task.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  tasks : Task[] = [];
  newTask: string;

  saveTask(){
    if(this.newTask){
      let task = new Task();
      task.name = this.newTask;
      task.isCompleted = true;
      this.tasks.push(task);
      this.newTask = "";
    }else{
      alert('Please enter a Task');
    }
  }

  done(id:number){
    this.tasks[id].isCompleted = !this.tasks[id].isCompleted;
  }
}
