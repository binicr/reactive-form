import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms'
import { Validators } from "@angular/forms";

@Component({
    selector: 'app-input-form',
    templateUrl: './input-form.component.html',
    styleUrls: ['./input-form.component.css']
})
export class InputFormComponent {
    constructor(private fb: FormBuilder) { }
    // with Form builder Injector service.
    loginForm = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        emailAddress: ['', Validators.required],
        address: this.fb.group({
            houseName: [''],
            streetName: ['', Validators.required],
            pincode: ['', Validators.minLength(6)]
        })
    })

    // Without Form builder
    // loginForm= new FormGroup({
    //     firstName :new FormControl(''),
    //     lastName:new FormControl(''),
    //     address : new FormGroup({
    //         houseName:new FormControl(''),
    //         streetName:new FormControl(''),
    //         pincode:new FormControl('')
    //     }),
    //     emailAddress :new FormControl('')
    // })

    onSubmit() {
        console.log(this.loginForm.value);
    }
    update() {
      console.log(this.loginForm.value);
    //  usage of pathValue 
        // this.loginForm.patchValue({
        //     firstName:"xxxx",
        //     address:{
        //         streetName:"xyz"
        //     }
        // });
    }
}