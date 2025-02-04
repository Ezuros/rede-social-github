import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { ServicesService } from '../admin/services/services.service';

@Injectable({
  providedIn: 'root'
})
export class AccessBlockedGuard implements CanActivate {
  constructor(
    private servicesServices: ServicesService,
    private auth: AuthService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.currentUser.pipe(
      map(user => {
        this.servicesServices.getUserById(user?.uid as string).subscribe(
          a => {
            if (a.blocked === true) {
              this.router.parseUrl('/')
            }
          }
        )
        return true;
      })
    )
  }

}
