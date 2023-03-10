import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthentificationBackofficerService} from "../../service/authentification-backofficer.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  connexionForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private authentification:AuthentificationBackofficerService,private http:HttpClient) {

  }

  ngOnInit(): void {
    this.connexionForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.connexionForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.connexionForm.invalid) {
      return;
    }
    this.authentification.
    login(this.connexionForm.value)
  }

}
