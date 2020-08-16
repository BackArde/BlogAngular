import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Post } from '../models/post.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  dateNow: Date = new Date();
  @ViewChild('btnPost') botonEnviar: ElementRef;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  dateNowISO = this.dateNow.toISOString();

  onSubmit(formValue) {
    console.log(formValue);
    let nuevoPost: Post = formValue;
    nuevoPost.fecha = this.dateNow;
    this.dataService.agregarPost(nuevoPost);
    this.router.navigate(['/blog']);
  }
}
