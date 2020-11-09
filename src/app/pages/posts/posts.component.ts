import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: [
  ]
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
    this.mensajes = this.dataService.getPosts();
    // .subscribe( (posts: any[]) => {
    //   this.mensajes = posts;
    // });
  }

  escuchaClick( id: number ){
    console.log('Click en: ', id);
  }

}
