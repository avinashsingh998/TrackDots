import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ActiveCredentialsService } from '../services/active-credentials.service';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root',
})
export class UserGaurdGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _activeCred: ActiveCredentialsService,
    private _commonServices : CommonService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this._activeCred.user) {
      return true;
    } else {
      this._commonServices.loginFirstWarning()
      this._router.navigate(['/login']);
      return false;
    }
  }
}
