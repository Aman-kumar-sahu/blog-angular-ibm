import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DisplayComponent } from './display/display.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page/page.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{path:"",component:HomeComponent},{path:'test',component:TestComponent},
{path:"display",component:DisplayComponent},{path:"card",component:CardComponent},{path:"page/:id",component:PageComponent},
{path:'**',component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
