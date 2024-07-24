import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router){}

  goPagina1() {
    this.router.navigate(['/pagina1']);
  
  
  }
  goPagina2(){
  this.router.navigate(['/pagina2'])
  }

  goPagina3(){
    this.router.navigate(['/pagina3'])
  }

}
