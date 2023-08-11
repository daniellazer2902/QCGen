import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentification',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'formulaire',
        loadChildren: () => import('./features/formulaire/formulaire.module').then(m => m.FormulaireModule),
      },
      {
        path: 'authentification',
        loadChildren: () => import('./features/authentification/authentification.module').then(m => m.AuthentificationModule),
      },
      {
        path: 'evaluation',
        loadChildren: () => import('./features/evaluation/evaluation.module').then(m => m.EvaluationModule),
      }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
