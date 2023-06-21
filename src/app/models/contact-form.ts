export class ContactForm {

    name:string|undefined;
    contactNumber:string|undefined;
    emailId:string|undefined;
    subject:string|undefined;
    description:string|undefined;

    constructor(name:string, contactNo:string, email:string, subject:string, description:string){

        this.name = name;
        this.contactNumber = contactNo;
        this.emailId = email;
        this.subject = subject;
        this.description = description;
        

    }

   

}
