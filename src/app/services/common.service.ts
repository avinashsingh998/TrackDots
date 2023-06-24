import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  appearenceDuration:number = 2000


  constructor() { }


  
  loginFirstWarning(){
    Swal.fire({
      background:'#5EFFCA',
      html: `<h4 style='color:red; padding:0px'> Login First </h4>
      <style>
        .timer {
           width:100%;
           height:5px;
           padding:0px;
           margin:0px;
           border:.5px solid black;
           background-color:white;
           animation: my-animation linear ${this.appearenceDuration}ms;
            }

            @keyframes my-animation {
              from {
                width: 100%;
              }
              to {
                width: 0;
              }
            }

      </style>
       <p class = 'timer'></p>`,
      position: 'top-end',
      timer: this.appearenceDuration,
      showConfirmButton: false,
    });

  }
}
