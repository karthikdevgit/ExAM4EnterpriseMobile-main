import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {


// answerOptions: null

// helpText: null

// isMandatory: false

// questionId: "a0d4x000006BmppAAC"

// questionName: "Day 1 - Point of Contact Name:"

// questionType: "Text"

// sectionName: "Day 1 H&S"
  
  feedbackQuestions;
  feedbackFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private modal: ModalController) {

    // this.feedbackFormGroup = this.formBuilder.group({
    //   email: ["", isMandatory ? Validators.required : ""],
    //   userSolution: ["", [Validators.required]]
    // });
  }

  ngOnInit() {
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

}
