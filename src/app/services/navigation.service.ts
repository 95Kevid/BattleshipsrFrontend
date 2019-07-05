import {ActivatedRoute, Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  route: ActivatedRoute;
  router: Router

  constructor(
     route: ActivatedRoute,
     router: Router
  ) {
    this.route = route;
    this.router = router;
  }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
