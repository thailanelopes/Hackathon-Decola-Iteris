import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoPageComponent } from './components/contato-page/contato-page.component';
import { DoarPageComponent } from './components/doar-page/doar-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InfoPageComponent } from './components/info-page/info-page.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';

const routes: Routes = [

  {
    path:'',
    component: MenuTemplateComponent,
    children : [
      {
        path:'',
        component: HomePageComponent
      },
      {
        path:'informacoes',
        component: InfoPageComponent
      },
      {
        path:'doacoes',
        component: DoarPageComponent
      },
      {
        path:'contato',
        component: ContatoPageComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
