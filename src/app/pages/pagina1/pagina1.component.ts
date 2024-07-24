import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina1',
  standalone: true,
  imports: [],
  templateUrl: './pagina1.component.html',
  styleUrl: './pagina1.component.css'
})
export class Pagina1Component {

  constructor(private router: Router){}

  goPagina2() {
    this.router.navigate(['/pagina2']);
  
  
  }
  goPagina3(){
  this.router.navigate(['/pagina3'])
  }
}
