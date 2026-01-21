import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogDataService } from '../../services/blog-data';

@Component({
  selector: 'app-blog-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.css',
})
export class BlogDetail implements OnInit {
  blog: Blog | undefined;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private blogDataService: BlogDataService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.blog = this.blogDataService.getBlogById(id);
      this.notFound = !this.blog;
    });
  }
}
