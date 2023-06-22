import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActiveCredentialsService } from 'src/app/services/active-credentials.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  verifyOtp:boolean = false
  registrationForm!:FormGroup
  otpValidator!:FormGroup
  private emailPattern = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$';
  private namePattern = '^[a-zA-Z ]{2,}$';
  private passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,}$/;


  constructor(private _userService:UserService, private userCred:ActiveCredentialsService) { }

  ngOnInit(): void {
    
  

    this.registrationForm = new FormGroup({
      name:new FormControl('', [Validators.required, Validators.pattern(this.namePattern)]),
      email:new FormControl('',[Validators.required, Validators.pattern(this.emailPattern)]),
      password:new FormControl('',[Validators.required, Validators.pattern(this.passwordPattern), Validators.minLength(6), Validators.maxLength(15)]),
      verifyPassword:new FormControl('', [Validators.required, this.passwordMismatchValidator()])
    })

    this.otpValidator = new FormGroup({
      otp:new FormControl('', [Validators.required])
    })

    

  }



  registerUser(form:FormGroup){
    const formdata = {
      name:form.value.name,
      email:form.value.email,
      password:form.value.password
    }

    console.log(formdata)

    this._userService.sendNewUserCredentials(formdata).then((data)=>{
      this.userCred.tempUserId = data.id;
      this.verifyOtp = true;

      setTimeout(() => {
        this.verifyOtp = false;
        this.userCred.tempUserId = undefined;
      }, 50*60000);


    }).catch(err=>{
      console.log("This is error ", err)
    })
  }



  verifyUser(form:FormGroup){

    const otp = form.value.otp
    this._userService.validateOtp_and_CreateUser(otp)

    
  }

  passwordMismatchValidator(): ValidatorFn { return  (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = this.registrationForm?.value.password
    const verifyPassword = control.value;

    // console.log(password, verifyPassword)
    // console.log(password && verifyPassword && password !== verifyPassword)
    // console.log(password , verifyPassword , password !== verifyPassword)
  
    if (password && verifyPassword && password !== verifyPassword) {
      return { 'passwordMismatch': true };
    }
  
    return null;
  };

}



}
