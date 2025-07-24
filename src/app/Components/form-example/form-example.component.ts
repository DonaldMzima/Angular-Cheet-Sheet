import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  role: string;
  terms: boolean;
}

@Component({
  selector: 'app-form-example',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-example.component.html',
  styleUrl: './form-example.component.css',
})
export class FormExampleComponent {
  formData: FormData = {
    fullName: '',
    email: '',
    password: '',
    role: '',
    terms: false,
  };

  showPassword = false;
  isSubmitting = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  async onSubmit(): Promise<void> {
    if (this.isSubmitting) return;

    try {
      this.isSubmitting = true;
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Form submitted:', this.formData);
      // Reset form after successful submission
      this.formData = {
        fullName: '',
        email: '',
        password: '',
        role: '',
        terms: false,
      };
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      this.isSubmitting = false;
    }
  }
}
