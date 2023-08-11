import {RouterModule, Routes} from '@angular/router';

import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { EditComponent } from './edit/edit.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create',
    component: EditComponent
  },
  {
    path: 'edit/:idFormulaire',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormulaireRoutingModule {
}
