import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp4Component } from './components/comp4/comp4.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'route1',
    component: Comp1Component,
    data: {
      next: 'route2',
    },
  },
  {
    path: 'route2',
    component: Comp2Component,
    data: {
      back: 'route1',
      next: 'route3',
    },
  },
  {
    path: 'route3',
    component: Comp3Component,
    data: {
      back: 'route2',
      next: 'route4',
    },
  },
  {
    path: 'route4',
    component: Comp4Component,
    data: {
      back: 'route3',
    },
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
