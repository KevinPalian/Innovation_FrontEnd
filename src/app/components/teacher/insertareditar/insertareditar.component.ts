import { Component, OnInit } from '@angular/core';
import { Teacher } from '../../../models/teacher';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TeacherService } from '../../../services/teacher.service';
import { Router } from  '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-insertareditar',
  imports: [MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatSliderModule
  ],
  templateUrl: './insertareditar.component.html',
  styleUrl: './insertareditar.component.css'
})
export class InsertareditarComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  teacher: Teacher = new Teacher();
  value:number = 20;
  tipos:{value:string;viewValue:string}[]=[
    {value:"1",viewValue:"1 año"},
    {value:"2",viewValue:"2 años"},
    {value:"3", viewValue:"3 años"},
    {value: "4", viewValue: "4 años" },
    { value: "5", viewValue: "5 años" },
    { value: "6", viewValue: "6 años" },
    { value: "7", viewValue: "7 años" },
    { value: "8", viewValue: "8 años" },
    { value: "9", viewValue: "9 años" },
    { value: "10", viewValue: "10 años" },
    { value: "11", viewValue: "11 años" },
    { value: "12", viewValue: "12 años" },
    { value: "13", viewValue: "13 años" },
    { value: "14", viewValue: "14 años" },
    { value: "15", viewValue: "15 años" }
  ]

  constructor(
    private tS:TeacherService,
    private formBuilder:FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      especialidad: ['',Validators.required],
      experiencia: ['',Validators.required],
      descripcion: ['',Validators.required],
      notapromedio: ['',Validators.required],
    });
  }

  aceptar() {
    if(this.form.valid) {
      this.teacher.SpecialistTeacherProfile = this.form.value.especialidad;
      this.teacher.ExperienceTeacherProfile = this.form.value.experiencia;
      this.teacher.DescriptionTeacherProfile = this.form.value.descripcion;
      this.teacher.AverageGradeTeacherProfile = this.form.value.notapromedio;
      this.tS.insert(this.teacher).subscribe(()=>{
        this.tS.list().subscribe((data)=>{
          this.tS.setList(data);
        });
      });
      this.router.navigate(['rutateacher'])
      alert('Profesor registrado con éxito');
    } else {
      alert('Por favor, complete todos los campos del formulario');
    }

  }
}
