import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { user } from 'src/app/auth/models/user';
import { InviteDialogComponent } from 'src/app/feed/components/invite-dialog/invite-dialog.component';
import { ServicesService } from 'src/app/usuario/services/services.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent {
  public username?: string;
  userInfos?: user;

  constructor(
    public dialog: MatDialog,
    private service: ServicesService,
    private serviceService: ServicesService
  ) {}

  ngOnInit(): void {
    this.getUsername();
    this.getUser();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(InviteDialogComponent, {
      width: '400px',
      height: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      //location.reload()
    });
  }

  collapsed = true;

  getUsername(): void {
    this.service.getUsername().subscribe((a) => {
      this.username = a;
    });
  }

  getUser(): void {
    this.serviceService.getUser().subscribe((a) => {
      this.userInfos = a;
    });
  }
}
