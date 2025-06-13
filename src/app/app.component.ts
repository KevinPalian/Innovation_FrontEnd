import { Component } from '@angular/core';
import { TeacherComponent } from './components/teacher/teacher.component';

@Component({
  selector: 'app-root',
  imports: [TeacherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Innovation';
}
