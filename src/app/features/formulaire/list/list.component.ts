import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogQrcodeComponent } from '../dialog-qrcode/dialog-qrcode.component';
import { Router } from '@angular/router';

export interface ActionElement {
  libelle: string;
  code: string;
  icon: string;
}

export interface FormElement {
  id?: string;
  titre: string;
  description: string;
  actions: ActionElement[];
  isOpen?: boolean;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  actions: ActionElement[] = [];
  formsList: FormElement[] = [];
  displayedColumns: string[] = ['titre', 'description', 'actions'];
  
  constructor(public dialog: MatDialog, private router: Router) {}

  ngOnInit(): void {
    this.actions = [
      {
        libelle: 'QrCode',
        code: 'QRCODE',
        icon: 'camera_enhance'
      },
      {
        libelle: 'Modifier',
        code: 'MODIFIER',
        icon: 'edit'
      },
      // {
      //   libelle: 'Cloturer',
      //   code: 'CLOTURER',
      //   icon: 'cancel'
      // },
      // {
      //   libelle: 'Envoyer',
      //   code: 'ENVOYER',
      //   icon: 'send'
      // },
      {
        libelle: 'Résultat',
        code: 'RESULTAT',
        icon: 'format_list_bulleted'
      },
      // {
      //   libelle: 'Vérifier',
      //   code: 'VERIFIER',
      //   icon: 'verified_user'
      // },
    ];

    this.formsList = [
      {
        titre: "Questionnaire 1",
        description: "Description du questionnaire 1",
        actions: this.actions,
        id: "1"
      },
      {
        titre: "Questionnaire 2",
        description: "Description du questionnaire 2",
        actions: this.actions
      },
      {
        titre: "Questionnaire 3",
        description: "Description du questionnaire 3",
        actions: this.actions
      },
      {
        titre: "Questionnaire 4",
        description: "Description du questionnaire 4",
        actions: this.actions
      },
      {
        titre: "Questionnaire 5",
        description: "Description du questionnaire 5",
        actions: this.actions
      },
      {
        titre: "Questionnaire 6",
        description: "Description du questionnaire 6",
        actions: this.actions
      },
      {
        titre: "Questionnaire 7",
        description: "Description du questionnaire 7",
        actions: this.actions
      },
    ];
  }

  addForm() {
    this.redirectForm('create');
  }

  triggerActions(el: FormElement, code: string) {
    switch (code) {
      case 'QRCODE':
        this.showModal(el);
        break;
    
      case 'MODIFIER':
        this.redirectForm('edit', el.id);
        break;

      case 'CLOTURER':
        break;

      case 'ENVOYER':
        break;

      case 'RESULTAT':
        break;

      case 'VERIFIER':
        break;

      default:
        break;
    }
  }

  showModal(element: FormElement): void {
    const url = `http://172.20.10.2:4200/evaluation/${element.id}`;

    this.dialog.open(DialogQrcodeComponent, {
      data: {
        link: url,
      },
    });
  }

  redirectForm(path: string, id: string = '') {
    this.router.navigate([`/formulaire/${path}/${id}`]);
  }
}
