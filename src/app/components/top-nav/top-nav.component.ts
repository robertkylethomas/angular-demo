import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent implements OnInit {
  constructor(
    private routeConfig: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.routeConfig);
    console.log(this.activatedRoute);

    this.activatedRoute.data.subscribe(console.log);
  }
}
