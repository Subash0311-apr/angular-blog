import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Blog } from '../../models/blog';
import { BlogDataService } from '../../services/blog-data';

@Component({
  selector: 'app-blog-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.css',
})
export class BlogList implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogDataService: BlogDataService) {}

  ngOnInit(): void {
    this.blogs = this.blogDataService.getAllBlogs();
  }
}

