import { Injectable } from '@angular/core';
import { Blog } from '../interfaces/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  blogs: Blog[] = [];

  constructor() {
    for (let i = 0; i < 10; i++) {
      this.blogs.push({
        id: i + 1,
        title: `Blog ${i + 1}`,
        author: 'Met student',
        date: new Date(),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis blanditiis quasi vero, porro ad placeat. Inventore, perspiciatis quia quas temporibus quod enim? Molestias iure, distinctio quae fuga excepturi doloribus nisi?"
      });
    }
  }

  findBlog(id: number): Blog {
    return this.blogs.find(blog => blog.id === id);
  }
}
