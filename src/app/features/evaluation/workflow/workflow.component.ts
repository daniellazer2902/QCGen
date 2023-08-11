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
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {

  editForm: FormGroup = new FormGroup({});
  formulaire: Form = {};

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      prenomNom: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.formulaire = {
      id: '1', 
      titre: 'Titre du formulaire', 
      description: 'Description du formulaire',
      questions: [
        {
          id: '1',
          libelle: 'Question 1',
          type: 'CHECKBOX',
          selections: [
            {
              id: '1',
              libelle: 'Selection 1',
              isReponse: false
            },
            {
              id: '2',
              libelle: 'Selection 2',
              isReponse: false
            }
          ]
        },
        {
          id: '2',
          libelle: 'Question 2',
          type: 'RADIO',
          selections: [
            {
              id: '21',
              libelle: 'Selection 1',
              isReponse: false
            },
            {
              id: '22',
              libelle: 'Selection 2',
              isReponse: false
            }
          ]
        }
      ]
    };
  }

  redirect() {
    if(this.editForm.invalid) {
      return
    }

    this.router.navigate(['/evaluation/resultat']);
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

}
