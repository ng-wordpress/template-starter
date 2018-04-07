import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgWordpressApiModule } from '@ng-wordpress/api';
import { WpRoutes } from './routes.services';
import { PageComponent } from './page/page.component';
import { PostComponent } from './post/post.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgWordpressApiModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    WpRoutes
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
