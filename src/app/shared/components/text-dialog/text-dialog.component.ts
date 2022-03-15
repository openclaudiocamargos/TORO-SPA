import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-text-dialog',
  templateUrl: './text-dialog.component.html',
  styleUrls: ['./text-dialog.component.css']
})
export class TextDialogComponent implements OnInit {
  dialogValueForm: FormGroup =
    this.formBuilder.group({
        value: ['', Validators.required]
    });
  isSubmitted = false;

  constructor(public dialogRef: MatDialogRef<TextDialogComponent>, private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  get formControls() { return this.dialogValueForm.controls; }

  ngOnInit(): void {
  }
  
  onOkClick(): void {
    this.isSubmitted = true;
    if(this.dialogValueForm.invalid){
      return;
    }

    this.dialogRef.close(this.dialogValueForm.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
