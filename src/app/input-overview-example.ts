import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
/**
 * @title Basic Inputs
 */
@Component({
  selector: 'input-overview-example',
  styleUrls: ['input-overview-example.css'],
  templateUrl: 'input-overview-example.html',
})
export class InputOverviewExample implements OnInit {
  addOnBlurCC = true;
  addOnBlurBCC = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  CCs: string[] = [];
  BCCs: string[] = [];
  selectedFiles: File[] = [];

  //announcer = inject(LiveAnnouncer);
  emailForm: FormGroup;
  //matcher = new ErrorStateMatcher();

  attachments: string[] = [];
  ccAddresses: string[] = [];
  bccAddresses: string[] = [];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      objectControl: ['', [Validators.required]],
      commentControl: ['', [Validators.required]],
    });
  }
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
