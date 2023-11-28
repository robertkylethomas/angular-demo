import { Component, OnInit } from '@angular/core';
import { fadeInOutAnimation } from './app.animations';
import { ActivatedRoute, Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// v1 Enter and Leave
// const enterTransition = transition(':enter', [
//   style({ opacity: 0 }),
//   animate('500ms ease-in', style({ opacity: 1 })),
// ]);

// const leaveTransition = transition(':leave', [
//   style({ opacity: 1 }),
//   animate('500ms ease-in', style({ opacity: 0 })),
// ]);

// const fadeIn = trigger('fadeIn', [enterTransition]);
// const fadeOut = trigger('fadeOut', [leaveTransition]);

// v2

const open = state('open', style({ opacity: 1 }));
const closed = state('closed', style({ opacity: 0 }));
const fadeInOut = trigger('fadeInOut', [
  open,
  closed,
  transition('* <=> *', [animate('1s ease-out')]),
]);

// v3
// const fadeInOut = trigger('fadeInOut', [state('in')]);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // animations: [fadeIn, fadeOut],
  // animations: [fadeInOut],
})
export class AppComponent implements OnInit {
  title = 'AngularRouteAnimations';
  isShown = false;

  formGroup: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
  });

  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  fadeInOut() {
    this.isShown = !this.isShown;
  }

  onAnimationStart(event: any) {
    console.log('Animation start');
    console.log(event);
  }

  onAnimationEnd(event: any) {
    console.log('Animation end');
    console.log(event);
  }

  ngOnInit() {}
}
