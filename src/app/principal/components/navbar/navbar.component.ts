import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginGitComponent } from 'src/app/auth/pages/login-git/login-git.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginGitComponent, {
      width: '400px',
      height: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    })

  }


}
