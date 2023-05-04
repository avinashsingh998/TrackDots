import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,  Validators } from '@angular/forms';
import { ContactForm } from 'src/app/models/contact-form';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formObject!:ContactForm;

  contactForm!:FormGroup;
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
  namePattern = "^[a-zA-Z\ ]{2,}$";
  contactPattern = "^[0-9]{10,10}";

  constructor() { }

  ngOnInit(): void {
   this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern(this.namePattern), Validators.maxLength(30)]),
      contactNo: new FormControl('', [Validators.required, Validators.pattern(this.contactPattern)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]),
      subject: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(40)]),
      
    });
  }

  submit(){

    this.formObject = new ContactForm(
      this.contactForm.controls?.['name'].value,
      this.contactForm.controls?.['contactNo'].value,
      this.contactForm.controls?.['email'].value,
      this.contactForm.controls?.['subject'].value,
      this.contactForm.controls?.['description'].value
      
    )
    this.contactForm.reset();
    Swal.fire("Done","Your responce has been recorded, We will contact within 2 hours","success")

    console.log(this.formObject)


    
  }

}