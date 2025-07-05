import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements  OnInit{
  title = 'innovation';

  ngOnInit(): void {}
  
  role: string = '';
  username: string = '';
  constructor(private loginService: LoginService, private router:Router) {}

  eliminar(){
    sessionStorage.clear();
    console.log("se cerró sesión con éxito!!")
  }

 

  verificar() {
    this.role = this.loginService.showRole();
    this.username = this.loginService.showUsername();
    return this.loginService.verificar();
  }
  isAdmin() {
    return this.role === 'ADMIN';
  }

  isVendor() {
    return this.role === 'VENDEDOR';
  }
}
