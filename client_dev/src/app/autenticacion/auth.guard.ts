import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SharedUserService } from '../services/shared-user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private sharedUserService: SharedUserService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.sharedUserService.hasToken()) {
      return true; // El usuario está autenticado y puede acceder a la ruta.
    } else {
      // Puedes redirigir al usuario a la página de inicio de sesión o a donde desees.
      // En este ejemplo, redirigimos al usuario a '/login'.
      this.router.navigate(['/login']); // Asegúrate de ajustar la ruta según tus necesidades.
      return false;
    }
  }
}