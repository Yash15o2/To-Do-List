import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  title: string = 'Task List';
  previousText: any = '';
  updatedText: string = '';
  constructor() {}
  ngOnInit(): void {}

  displayInput = false;
  displayEdit = false;
  displayImage = true;

  list: any[] = [];

  showInputWindow() {
    this.displayInput = true;
    this.displayEdit = false;
  }

  showEditWindow(name: string) {
    this.displayEdit = true;
    this.displayInput = false;
    this.previousText = name;
  }

  hideWindow() {
    this.displayInput = false;
    this.displayEdit = false;
  }

  addTask(task: string) {
    if (task == '') {
      task = 'My task';
    }
    this.list.push({ id: this.list.length, name: task });
    this.emptyStateCheck();
    this.hideWindow();
  }

  removeTask(id: number) {
    this.list = this.list.filter((task) => task.id !== id);
    this.emptyStateCheck();
  }

  editTask(currentText: string) {
    for (var i = 0; i <= this.list.length; i++) {
      if (this.list[i].name == this.previousText) {
        this.list[i].name = currentText;
        break;
      }
    }
    this.hideWindow();
  }

  emptyStateCheck() {
    if (this.list.length == 0) {
      this.displayImage = true;
    } else {
      this.displayImage = false;
    }
  }
}
