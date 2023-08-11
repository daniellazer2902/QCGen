import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormulaireRoutingModule } from './formulaire-routing.module';

import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {QRCodeModule} from 'angularx-qrcode';
import { DialogQrcodeComponent } from './dialog-qrcode/dialog-qrcode.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio'; // Importez le module MatRadioModule


@NgModule({
  imports: [
    CommonModule,
    FormulaireRoutingModule,
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
    ListComponent,
    DialogQrcodeComponent,
    EditComponent
  ],
})
export class FormulaireModule { }
