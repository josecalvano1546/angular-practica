import { Component, OnInit } from '@angular/core';
import { Persona } from './product.model';
import { personasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apys';
  personas: Persona[] = [];


  constructor(private PersonasService: personasService) {}

  ngOnInit(): void {
    this.fetchPersonas();
  }
  fetchPersonas() {
    this.PersonasService.getAllPersonas()
    .subscribe(personas => {
      this.personas = personas;
      console.log(personas);
       });
    }
}
