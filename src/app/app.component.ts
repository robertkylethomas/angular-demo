import { Component, OnInit } from '@angular/core';
import { fadeInOutAnimation } from './app.animations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInOutAnimation],
})
export class AppComponent implements OnInit {
  title = 'AngularRouteAnimations';

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {}
}
