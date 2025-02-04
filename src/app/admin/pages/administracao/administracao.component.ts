import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginGitComponent } from 'src/app/auth/pages/login-git/login-git.component';
import { LoginAdminComponent } from '../../components/login-admin/login-admin.component';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-administracao',
  templateUrl: './administracao.component.html',
  styleUrls: ['./administracao.component.css'],

})
export class AdministracaoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(LoginAdminComponent, {
      width: '400px',
      height: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

}
