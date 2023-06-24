import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUser!:FormGroup

  constructor(private _userService:UserService) { }

  ngOnInit(): void {

    this.loginUser = new FormGroup({
      uname:new FormControl('',[Validators.required, Validators.minLength(4)]),
      password:new FormControl('',[Validators.required])
    })
  }


  submitForm(form:FormGroup){
    const id = form.value.uname
    const key = form.value.password
    console.log(id, key, form)
    this._userService.loginUser(id, key).then(dt=>{
      if(dt.status == 401){
        Swal.fire('Wrong Credentials',"You are not a authorized user",'error').then(()=>{
          this.loginUser.reset();
        })
      } 
      else if(dt.status==500){
        Swal.fire('Server error',"Internal server error",'error')
      }
    })
  }

}
