import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'pictures', loadChildren: './pages/pictures/pictures.module#PicturesPageModule' },
  { path: 'full-info', loadChildren: './pages/full-info/full-info.module#FullInfoPageModule' },
  { path: 'author', loadChildren: './pages/author/author.module#AuthorPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
