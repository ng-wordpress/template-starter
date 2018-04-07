import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { WpPages, WpPosts, WpTags, WpCategories } from '@ng-wordpress/api';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class WpRoutes {

  baseUrl: string;
  listSubject: BehaviorSubject<any[]>;

  constructor(private pages: WpPages, private posts: WpPosts,
  private categories: WpCategories, private tags: WpTags, private sanitizer: DomSanitizer) {
    this.baseUrl = window['siteUrl'] || 'http://localhost:4200/';
    this.listSubject = new BehaviorSubject(null);
  }

  public get routes(): BehaviorSubject<any[]> {
    return this.listSubject;
  }

  public generateRoutes(): Observable<any[]> {
    return Observable.forkJoin([
      this.pages.getList(),
      this.posts.getList(),
      this.categories.getList(),
      this.tags.getList()
    ]).map((data: any[]) => {
      console.log(data);
      return data.reduce((a, b) => {
        return a.concat(b);
      });
    }).map(data => {
      const routes = [];
      data.map(page => {
        page.route = this.getRoute(page.link);
        if (page.title) {
          page.title.safe = this.sanitizer.bypassSecurityTrustHtml(page.title.rendered);
        }
        if (page.content) {
          page.content.safe = this.sanitizer.bypassSecurityTrustHtml(page.content.rendered);
        }
        routes[page.route] = page;
      });
      this.listSubject.next(routes);
      return routes;
    });
  }

  getRoute(url: string) {
    return url.substring(this.baseUrl.length, url.length - 1);
  }

}
