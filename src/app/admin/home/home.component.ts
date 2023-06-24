import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback';
import { Ticket } from 'src/app/models/ticket';
import { ActiveCredentialsService } from 'src/app/services/active-credentials.service';
import { AdminAuthService } from 'src/app/services/admin-auth.service';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
@Injectable({ providedIn: 'root' })
export class HomeComponent implements OnInit {
  feedbacks!: Feedback[];
  tickets!: Ticket[];
  comment!:string;
  placeholder:string = "Put a comment here"

  constructor(
    private adminService: AdminServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminService
      .getFeedbacks()
      .then((data) => {
        this.feedbacks = [...data];
        this.feedbacks.reverse();

        // console.log('this is feedback', this.feedbacks);
      })
      .catch((err) => {
        console.log(err);
        this.router.navigate(['admin/login']);
      });


      this.adminService.getTickets().then((data:any)=>{
        this.tickets = [...data];
         this.tickets.reverse().sort((obj1, obj2)=>{
          if(obj1.closed == obj2.closed) return 0;
          else if (obj1.closed) return 1;
          else return -1;
        });
        console.log(this.tickets, "these are the tickets")
      }).catch(err=>{
        console.log(err)
      })
  }

  markAsRead(id: string) {
    this.adminService
      .updateFeedback(id)
      .then((data: any) => {
        if (data) {
          const objec = this.feedbacks.find((onj) => {
            return onj._id == id;
          });
          if (objec) {
            objec.read = true;
          }
          
        }
      })
      .catch((err) => [console.log(err)]);
  }



  resolved(ticket:Ticket){

    ticket.closed = true;

    console.log(ticket)
    if(ticket.comment.length==0) Swal.fire("Warning","Comment is necessary before closing a ticket","warning")
    else this.adminService.updateTicket(ticket).then(dt=>{
      if(dt) {
        console.log(dt);
       const ticketRef =  this.tickets.find(tic=>{
          return tic._id == ticket._id
        })

        if(ticketRef){
          ticketRef.closed = true;
          ticketRef.comment = ticket.comment;
          this.tickets.sort((obj1, obj2)=>{
            if(obj1.closed == obj2.closed) return 0;
            else if (obj1.closed) return 1;
            else return -1;
          });
        }

      }
    })
    
  }
}
