import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../services/teacher.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Teacher } from '../../../models/teacher';

@Component({
  selector: 'app-listarteacher',
  imports: [MatTableModule, CommonModule],
  templateUrl: './listarteacher.component.html',
  styleUrl: './listarteacher.component.css'
})
export class ListarteacherComponent implements OnInit{
  dataSource:MatTableDataSource<Teacher>=new MatTableDataSource()
  displayedColumns:string[]=["c1","c2","c3","c4","c5"]

  constructor(private tS:TeacherService){}

  ngOnInit():void{
    this.tS.list().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data)
    })
  }
}
