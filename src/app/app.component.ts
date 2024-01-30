import { Component, OnInit, inject } from '@angular/core';
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
import {
  Observable,
  catchError,
  debounce,
  debounceTime,
  finalize,
  map,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface ValidEsimPhone {
  Manufacturer: string;
  Model: string;
  numberOfEsims: string;
}

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
  httpClient = inject(HttpClient);
  phoneTypes$: Observable<ValidEsimPhone[]> = this.httpClient.get(
    '../assets/esim.phones.json'
  ) as Observable<ValidEsimPhone[]>;

  manufacturers$: Observable<string[]> = this.phoneTypes$.pipe(
    map((esimPhones: ValidEsimPhone[]) => this.filterManufacturers(esimPhones))
  );

  filterManufacturers(esimPhones: ValidEsimPhone[]): string[] {
    const manufacturer: string[] = esimPhones
      .map((esim) => esim.Manufacturer.trim())
      .filter(
        (value, index, current_value) => current_value.indexOf(value) === index
      );
    return manufacturer;
  }

  selectThing(val: any) {
    console.log(val);
  }

  constructor() {}

  ngOnInit() {}
}
