import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  posts: Post[];
  constructor() {
    this.posts = [];
  }

  agregarPost(pPost: Post) {
    this.posts.push(pPost);
  }

  getAllPosts(): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.posts);
    })
  }

  getPostsByCategoria(pCategoria: string): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      let postsFiltrados = this.posts.filter(post => {
        return post.categoria === pCategoria
      })
      resolve(postsFiltrados);
    })
  }
}

