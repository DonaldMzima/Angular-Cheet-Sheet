import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  standalone: true,
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  // Angular form example code
  public angularFormCode: string = `
<!-- Angular Reactive Form -->
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <label for="name">Name:</label>
  <input id="name" formControlName="name" type="text" />

  <label for="email">Email:</label>
  <input id="email" formControlName="email" type="email" />

  <button type="submit">Submit</button>
</form>

export class ExampleComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
  `;

  // React form example code
  public reactFormCode: string = `
import React, { useState } from 'react';

function ExampleComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  )`;

  constructor() {}

  ngOnInit() {}
}
