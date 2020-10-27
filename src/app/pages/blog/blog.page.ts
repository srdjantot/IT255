import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'met-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss']
})
export class BlogPage implements OnInit {

  constructor(public blogService: BlogService) { }

  ngOnInit(): void {
  }

}
