export class ContactForm {

    name:string|undefined;
    contactNo:string|undefined;
    email:string|undefined;
    subject:string|undefined;
    description:string|undefined;

    constructor(name:string, contactNo:string, email:string, subject:string, description:string){

        this.name = name;
        this.contactNo = contactNo;
        this.email = email;
        this.subject = subject;
        this.description = description;
        

    }



}
