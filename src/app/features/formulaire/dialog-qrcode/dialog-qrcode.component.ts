import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  link: string;
}

@Component({
  selector: 'app-dialog-qrcode',
  templateUrl: './dialog-qrcode.component.html',
  styleUrls: ['./dialog-qrcode.component.scss'],
})
export class DialogQrcodeComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
