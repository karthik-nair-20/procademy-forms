import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'procademyForms';
  defaultCountry = 'india';
  firstname:string ='';
  lastname:string ='';
  defaultGen = 'Male';
  email:string ='';
  gen:string ='';
  country:string='';


  gender = [
    {id:'1', value: 'Male'},
    {id:'2' , value:'Female'},
    {id:'3' , value:'Other'}
  ];

  @ViewChild('myForm') form?: NgForm;



  onSubmit(){
    console.log(this.form);

    this.firstname = this.form?.value.personalDetails.firstname;
    this.lastname = this.form?.value.personalDetails.lastname;
    this.email = this.form?.value.personalDetails.email;
    this.gen = this.form?.value.gender;
    this.country = this.form?.value.country;



    this.form?.reset();
  }

  setDfaultValues(){
    // this.form!.value.personalDetails.firstname = 'Karthik';
    // this.form!.value.personalDetails.lastname = 'Nair';
    // this.form!.value.personalDetails.email = 'herbolax77@gmail.com';

    // this.form!.setValue({
    //   country:'',
    //   gender:'',
    //   hobbies:'',
    //   personalDetails:{
    //     email:'herbolax77@gmail.com',
    //     firstname:'Karthik',
    //     lastname:'Nair'
    //   }
    // })

    this.form?.form.patchValue({
      personalDetails: {
        email:'herbolax78@gmail.com',
        firstname:'karthik',
        lastname:'nair'
      }

    })
  }


}

