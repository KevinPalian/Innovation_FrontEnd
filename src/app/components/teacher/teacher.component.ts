import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarteacherComponent } from "./listarteacher/listarteacher.component";

@Component({
  selector: 'app-teacher',
  imports: [RouterOutlet, ListarteacherComponent],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
  constructor(public route:ActivatedRoute){}
}
