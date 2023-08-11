import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowComponent } from './workflow/workflow.component';
import { EvaluationRoutingModule } from './evaluation-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { QRCodeModule } from 'angularx-qrcode';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { ResultatComponent } from './resultat/resultat.component';



@NgModule({
  imports: [
    CommonModule,
    EvaluationRoutingModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    QRCodeModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRadioModule
  ],
  declarations: [
    WorkflowComponent,
    ResultatComponent
  ],
})
export class EvaluationModule { }
