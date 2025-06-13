import { Routes } from '@angular/router';
import { TeacherComponent } from './components/teacher/teacher.component';
import { InsertareditarComponent } from './components/teacher/insertareditar/insertareditar.component';

export const routes: Routes = [{
  path:'rutateacher',component:TeacherComponent,
  children:[
    {
      path:'insertar',component:InsertareditarComponent
    }
  ]
}];
