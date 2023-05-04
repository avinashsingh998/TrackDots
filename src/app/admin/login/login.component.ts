import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup ;

  constructor() { }

  ngOnInit(): void {
    this.loginForm =  new FormGroup({
      uname :new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9\@\$\&\*]{5,15}$")]),
      password : new FormControl('',[Validators.required])
    });


    $(".fg1 input").on("focus",()=>{
      $('.fg1 label').css("transform","translateX(-5px)")
      $('.fg1 label').css("top","10%")
      $('.fg1 label').css("color","purple")
      $('.fg1 label').css("font-size","14px")
      // $('.fg1 label').css("font-weight","bold")
    
    });

    $(".fg2 input").on("focus",()=>{
      $('.fg2 label').css("transform","translateX(-5px)")
      $('.fg2 label').css("top","10%")
      $('.fg2 label').css("color","purple")
      $('.fg2 label').css("font-size","14px")
      // $('.fg2 label').css("font-weight","bold")
    
    });

    $(".fg1 input").on("blur",()=>{
      if(!this.loginForm.controls?.['uname'].value)

      $('.fg1 label').removeAttr('style');
     
    
    });

    $(".fg2 input").on("blur",()=>{
      if(!this.loginForm.controls?.['password'].value)
        $('.fg2 label').removeAttr('style');
    
    
    });

    
  }

 


  submit(){
    
  }
}
