import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/interfaces/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'met-blog-entry',
  templateUrl: './blog-entry.page.html',
  styleUrls: ['./blog-entry.page.scss']
})
export class BlogEntryPage implements OnInit {
  blog: Blog;

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        let id = Number(params.get('id'));
        this.blog = this.blogService.findBlog(id)
        if (!this.blog) {
          this.router.navigate(['/invalid-blog', id]);
        }
      });
  }

}
