import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'loginForm',
    templateUrl: './login.component.html'
})
export class LoginFormComponent implements OnInit{
    loginForm: any;

    constructor(private formBuilder: FormBuilder, private router: Router){

    }

    ngOnInit(){
        this.loginForm = this.formBuilder.group({
            username: [''],
            password: ['']
        });
    }

    login(){
        if(this.loginForm.value.username === 'Pikachu' && this.loginForm.value.password === 'Pikachu'){
            this.router.navigateByUrl('/pokemon/all');
        }
        console.log('Données du formulaire... ', this.loginForm.value);
    }
}