import { AuthGuardService } from './auth-guard.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SecondChildComponent } from './second-child/second-child.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'first',
    component: FirstComponent,
    children: [
      {
        path: 'first-child/:name', component: FirstChildComponent
      },
      {
        path: 'second-child', component: SecondChildComponent
      }
    ]
  },
  {
    path: 'second',
    component: SecondComponent,
    canActivate: [AuthGuardService]

  },
  {
    path: '', redirectTo: '/first', pathMatch: 'full'
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
