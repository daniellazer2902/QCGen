import {RouterModule, Routes} from '@angular/router';

import { WorkflowComponent } from './workflow/workflow.component';
import { NgModule } from '@angular/core';
import { ResultatComponent } from './resultat/resultat.component';

export const routes: Routes = [
  {
    path: '',
    component: WorkflowComponent
  },
  {
    path: 'resultat',
    component: ResultatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EvaluationRoutingModule {
}
