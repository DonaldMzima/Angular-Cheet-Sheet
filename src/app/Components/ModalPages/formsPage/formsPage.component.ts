import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- Import this for pipes like `json`

@Component({
  selector: 'app-forms-page',
  templateUrl: './formsPage.component.html',
  styleUrls: ['./formsPage.component.html'],
})
export class FormsPageComponent implements OnInit {
  myForm: FormGroup;
  formData: any = null;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.formData = this.myForm.value;
      console.log('Form Submitted:', this.formData);
    }
  }
}
