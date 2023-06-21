import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import Swal from 'sweetalert2';
import * as fileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { Router } from '@angular/router';



@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  ordercount = 0;
  orders:any[]=[];
  filteredOrder:any[] = [];
  flag!:string;

  filters:any = {
    status:{
      value:"all",
      array:[ "initiated", "pending", "completed"]
    },
    location:{
      value:"all",
      array:["India", "International"]
    }
  }

  constructor(private _adminService:AdminServiceService, private router : Router) { }

  ngOnInit(): void {

    const res = this._adminService.getOrders();

    res.then((data)=>{
      console.log(data, " this is the data")
      if(data){
        this.orders = data;
      this.filteredOrder = this.orders;
      this.ordercount = this.filteredOrder.length;
      }
      else{
        this.flag = "There is no any order for you"
      }
    }).catch((err)=>{
      console.log(err)
      this.flag = "Internal server error";
      this.router.navigate(['/admin/login'])

  })
    
    }

    
  

  update(i:any){
    // this._adminService.orders[i].remark = this.orders[i].remark;
    // console.log("done")
  }

  updateStatus(i:any){
    // console.log(i)
    // console.log("done status")
    // this._adminService.orders[i].status = this.orders[i].status;

  }

  updateOrders(){

    this.filteredOrder = this.orders.filter((ele:any)=>{
      console.log(this.filters.status.value==ele.status);
      return (this.filters.status.value=="all"?true:this.filters.status.value==ele.status) && (this.filters.location.value=="all"?true:this.filters.location.value=='India'?ele.location.toLowerCase().includes('india'):!ele.location.toLowerCase().includes('india'))
    })
    this.ordercount = this.filteredOrder.length;

  }

  resetFilters(){
    this.filters.status.value = 'all';
    this.filters.location.value = "all";
    this.updateOrders();
  }
// buyovzomylgnpbnr


  downloadReport(){
    Swal.fire({
        title:"Select", 
        text:"Choose the File type of report",
        icon:"question",
        showCancelButton:true,
        showConfirmButton:true,
        showDenyButton:true,
        showLoaderOnConfirm:true,
        confirmButtonText:"Download PDF",
        cancelButtonText:"Close",
        denyButtonText:"Download Excel"
      }).then((res)=>{
        if(res.isConfirmed) this.downloadPDF();

        else if(res.isDenied) this.downloadExcel();
        
      })

  }


  downloadPDF(){
    let doc = new jsPDF();

   

    const header = ['Id', "Customer", "Date" , "Status", "location", "Remark"];
    const config:any = {
      head: ['Id', "Customer", "Date" , "Status", "location", "Remark"], 
      body: [
       "kuchh bhi", "fdjskh","afdskjh"
      ],
      startY: 20, 
      styles: {
        head: { fontSize: 12, bold: true },
        body: { fontSize: 10 }, 
      },
      theme: 'grid', // Optional: Specify the table theme ('striped', 'grid', 'plain')
      margin: { top: 10 }, // Margin around the table
    };

    let data = "";
    doc.setFontSize(12)
    doc.setPage(this.filteredOrder.length/10);
    // doc.html(document.getElementById("Datatable") || "no record found")
    // console.log(document.getElementById("Datatable"))

    for(const elem of this.filteredOrder) data += elem.id+" "+elem.status+" "+elem.date+"  "+elem.location+"\n";

    doc.text(data, 20, 20)
    


  

    // for(let i=0;i<this.filteredOrder.length; i++) doc.text([this.filteredOrder[i].id, this.filteredOrder[i].status], 20, i*20 );
    doc.save("reportOrders.pdf")
    console.log("PDF Downloaded")
  }

  downloadExcel(){
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.filteredOrder);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
    fileSaver.saveAs(data, 'report.xlsx' + '_export_' + new  Date().getTime() + '.xlsx');
 
    console.log("Excel Downloaded")
  }

}
