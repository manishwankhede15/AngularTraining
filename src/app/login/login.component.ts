import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup = new FormGroup({
  username: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required]),
});

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  submit() {
    //if (this.form.valid) {
    //  this.submitEM.emit(this.form.value);
   // }
   console.debug(this.loginForm.valid);
   if (this.loginForm.valid) {
   this.router.navigateByUrl("home");
    }
  }
}
