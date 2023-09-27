import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms'
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userJson: any;
  public login: boolean = false;
  public renderUsers: any;
  public usuario: string="";
  public password: string="";

  constructor(activateRoute: ActivatedRoute,
    private usersService: UsersService) {



    activateRoute.snapshot.params["id"]

  }
  ngOnInit() {
  }

 
}

