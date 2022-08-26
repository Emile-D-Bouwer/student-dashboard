import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl ,FormGroup, Form} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      
    }
  }
  @Input() error: string | null | undefined;

  @Output() submitEM = new EventEmitter();

}
