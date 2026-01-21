import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {
  private blogs: Blog[] = [
    {
      id: 1,
      title: 'Getting Started with Angular',
      summary: 'Learn the fundamentals of Angular and build your first interactive component.',
      content: `Angular is a powerful and modern web framework that helps developers build scalable, 
maintainable web applications. In this guide, we\'ll explore the core concepts including components, 
services, dependency injection, and routing. Angular uses TypeScript, which provides strong typing 
and better tooling support for large projects. Whether you\'re building a simple blog or a complex 
enterprise application, Angular provides the tools and patterns you need to succeed.`,
      createdDate: new Date('2026-01-15')
    },
    {
      id: 2,
      title: 'TypeScript Best Practices',
      summary: 'Master advanced TypeScript patterns and improve your code quality and maintainability.',
      content: `TypeScript is a superset of JavaScript that adds static typing to the language. 
When used correctly, TypeScript can catch errors at compile time rather than runtime, making your 
applications more reliable. In this article, we\'ll cover interfaces, generics, type guards, and 
utility types. We\'ll also discuss how to write clean, maintainable TypeScript code that scales well 
with your project. Following TypeScript best practices will help you and your team write safer, 
more predictable code.`,
      createdDate: new Date('2026-01-10')
    },
    {
      id: 3,
      title: 'Reactive Programming with RxJS',
      summary: 'Understand observables, operators, and reactive patterns for handling asynchronous data.',
      content: `RxJS is a library for reactive programming using observables. It provides a powerful way 
to handle asynchronous operations and event handling. Observables are lazy, composable, and cancellable. 
In this guide, we\'ll explore common operators like map, filter, and mergeMap. We\'ll also discuss the 
subscriber pattern and how to properly manage subscriptions to prevent memory leaks. Reactive programming 
with RxJS enables you to write cleaner, more maintainable code when dealing with complex asynchronous flows.`,
      createdDate: new Date('2026-01-05')
    }
  ];

  getAllBlogs(): Blog[] {
    return this.blogs;
  }

  getBlogById(id: number): Blog | undefined {
    return this.blogs.find(blog => blog.id === id);
  }
}
