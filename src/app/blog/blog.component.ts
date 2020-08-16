import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  Posts: Post[];
  constructor(private dataService: DataService) {
    this.Posts = [ ];
  }

  async ngOnInit() {
    this.Posts = await this.dataService.getAllPosts();
  }

  async buscarCategoria($event) {
    if ($event.target.value === 'todos') {
      this.Posts = await this.dataService.getAllPosts();
    } else {
      this.Posts = await this.dataService.getPostsByCategoria($event.target.value);
    }

  }
}
