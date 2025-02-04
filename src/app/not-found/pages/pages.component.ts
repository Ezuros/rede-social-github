import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FeedComponent } from 'src/app/feed/pages/feed/feed.component';
import { ServiceService } from '../services/service.service';
import { ConfirmarLogoutComponent } from 'src/app/navs/nav-bar/confirmar-logout/confirmar-logout.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {


  constructor(
    private dialog: MatDialog,
    private service: ServiceService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  signOut(): void {
    const dialogRef = this.dialog.open(ConfirmarLogoutComponent)
    dialogRef.afterClosed().subscribe(
      (a: boolean) => {
        if (a === true) {
          this.service.signOut()
          this.route.navigate(['/'])
        }
      }
    )
  }

  OnNotError() {
    this.dialog.open(FeedComponent)
  }

}
