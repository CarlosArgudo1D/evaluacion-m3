import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [],
  templateUrl: './pagina2.component.html',
  styleUrl: './pagina2.component.css'
})
export class Pagina2Component {

  constructor(private router: Router){}

  goPagina3() {
    this.router.navigate(['/pagina3']);
  }

  goPagina1(){
    this.router.navigate(['/pagina1']);
  }
}
