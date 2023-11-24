import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.router);
    console.log(this.activatedRoute);
    this.activatedRoute.data.subscribe((res) => {
      console.log(res);
    });
    console.log(this.activatedRoute.snapshot);
  }
}
