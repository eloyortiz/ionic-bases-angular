import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [
  ]
})
export class PostComponent implements OnInit {


  // PROPIEDAD RECIBIDA DESDE COMPONENTE EXTERIOR
  @Input() mensaje: any;
  
  // PROPIEDAD DE TIPO NUMERICO EMITADA A UN COMPONENTE EXTERIOR
  @Output() clickPost = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickPost.emit(this.mensaje.id);
  }

}
