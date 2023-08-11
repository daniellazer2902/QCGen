import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export interface Selections {
  id?: string;
  libelle?: string;
  code?: string;
  isReponse?: boolean;
}

export interface Questions {
  id?: string;
  libelle?: string;
  type?: string;
  selections?: Selections[];
}

export interface Form {
  id?: string;
  titre?: string;
  description?: string;
  questions?: Questions[];
}

export interface Reference{
  code?: string;
  libelle?: string;
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  MODE: Reference = {};
  formulaire: Form = {};
  typeList: Reference[] = [{code: 'CHECKBOX', libelle: 'Checkbox'}, {code: 'RADIO', libelle: 'Radio'}];
  formForm: FormGroup = new FormGroup({});
  newSelectionValue: string = '';
  newTitleValue: string = '';
  newQuestion: Questions = {};

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const idFormulaire = params['idFormulaire'];
      if (idFormulaire) this.MODE = {code: 'MODIFIER', libelle: 'Modification'};
      else this.MODE = {code: 'CREER', libelle: 'Création'};
    });

    this.formForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.formulaire = {
      questions: [],
      titre: '',
      description: ''
    }

    
  }

  updateSelection(question: any, selection: any, event?: any) {
    if (question.type === 'CHECKBOX') {
      selection.isReponse = event.checked;
    } else if (question.type === 'RADIO') {
      question.selections.forEach((s: any) => {
        s.isReponse = (s.id === selection.id);
      });
    }
  }

  addSelection(question: any, value: string) {
    const newSelection: any = {
      id: 'Selec'+value,
      libelle: value,
      isReponse: false
    };

    question.selections.push(newSelection);
    this.newSelectionValue = '';
  }


  addTitle(question: any, value: string) {
    question.libelle = value;
    this.newTitleValue = '';
  }
  redirect() {
    this.router.navigate(['/formulaire']);
  }
  
  addQuestion() {
    this.newQuestion = {
      id: 'newQuestionId',
      libelle: '',
      selections: []
    }
    this.formulaire.questions!.push(this.newQuestion);
    this.newQuestion = {};
  }

}
