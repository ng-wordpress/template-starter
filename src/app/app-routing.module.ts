import { NgModule, Injector, APP_INITIALIZER } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { WpRoutes } from './routes.services';
import { PageComponent } from './page/page.component';
import { PostComponent } from './post/post.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [PageComponent, CategoryComponent, PostComponent],
  entryComponents: [PageComponent, CategoryComponent, PostComponent],
  exports: [RouterModule],
  providers: [
    { provide: APP_INITIALIZER, useFactory: configServiceFactory, deps: [Injector, WpRoutes], multi: true }
  ]
})
export class AppRoutingModule { }

export function configServiceFactory(injector: Injector, routesService: WpRoutes): Function {
  return () => {
    return routesService.generateRoutes().toPromise().then(myRoutes => {
      console.log(myRoutes);
      const router: Router = injector.get(Router);
      const config = router.config;
      for (const key of Object.keys(myRoutes)) {
        const val = myRoutes[key];
        let fun: any = PageComponent;
        if (val.type === 'post') {
          fun = PostComponent;
        } else if (!val.type && val.taxonomy === 'category') {
          fun = CategoryComponent;
        }
        config.push({
          path: key,
          component: fun,
          data: val
        });
      }
      router.resetConfig(config);
    });
  };
}
