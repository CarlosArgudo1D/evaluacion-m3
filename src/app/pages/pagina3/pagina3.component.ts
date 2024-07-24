import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [],
  templateUrl: './pagina3.component.html',
  styleUrl: './pagina3.component.css'
})
export class Pagina3Component {

  constructor(private router: Router){}

  goPagina1() {
    this.router.navigate(['/pagina1']);
  }

  goPagina2(){
    this.router.navigate(['/pagina2']);
  }

}
