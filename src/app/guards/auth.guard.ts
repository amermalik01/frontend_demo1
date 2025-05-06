import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {

  const _route = inject(Router)

  let isLoggedIn = sessionStorage.getItem("isLoggin");

  if(isLoggedIn === 'false'){
    console.log("is redirecting to login page");
    _route.navigate(['login']);

    return false;
    
  }
  return true;
};
