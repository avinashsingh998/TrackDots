import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Observable, Subject, map, startWith } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

 formFields= {
  name:'',
  subject:'',
  description:''
 }



   feedbackTopics:any = [
    { value: 'overall_experience', label: 'Overall Experience' },
    { value: 'destination_selection', label: 'Destination Selection' },
    { value: 'tour_guides', label: 'Tour Guides' },
    { value: 'accommodation', label: 'Accommodation' },
    { value: 'transportation', label: 'Transportation' },
    { value: 'itinerary', label: 'Itinerary' },
    { value: 'customer_service', label: 'Customer Service' },
    { value: 'booking_process', label: 'Booking Process' },
    { value: 'value_for_money', label: 'Value for Money' },
    { value: 'safety_security', label: 'Safety and Security' },
    { value: 'tour_activities', label: 'Tour Activities' },
    { value: 'communication', label: 'Communication' },
    {value:"other", label:"Other issue"}
  ];
  filteredOptions:Observable<string[]> | undefined;

  constructor(private userService : UserService, private cdr : ChangeDetectorRef) { }

  ngOnInit(): void {

    
  }

  validate(form:NgForm){

    const name = form.controls['name'].value;
    const subject = form.controls['subject'].value;
    const description = form.controls['description'].value;
    if(!name || !subject || !description) Swal.fire("Error", "All Fields are mendatory", "error")

    else 
     this.userService.submitFeedback(name, subject, description).then(result=>{
      if(result.status == 201) Swal.fire("Success", "Your responce has been recorded, we will contack you soon", 'success').then(()=>{
       form.resetForm()
        console.log("then executed")
      })

      else if(result.status == 404 ||  result.status == 500){
        console.log(result.json());
        Swal.fire("Error", "All Fields are mendatory", "error")
      }
      else 
      Swal.fire("Server Error", "Server Not Responding", "error")
    })
    
  }

 

}
