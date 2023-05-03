import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('click', function(event) {
     
      if (event.target !== document.getElementById("navbar1") && event.target != document.getElementById("toogleSidebar1")  && event.target != document.getElementById("toogleSidebar2") ) {
        setTimeout(()=>$("nav").removeClass('open'),50)
        // console.log("called")
      }

      if (event.target != document.getElementById("toogleSidebar2") ) {
        setTimeout(()=>$(".custDD").slideUp(400),50)
        // console.log("called")
      }


    });
    

    
  }

  toggleSidebar(){
    $("nav").toggleClass('open');

    

  }

  toogleDD(){
    $(".custDD").slideToggle(400);
  }


 
  
  
}
