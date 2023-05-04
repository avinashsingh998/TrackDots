import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  subjectControl = new FormControl('');

  options:any = [
    'Booking Experience',
  'Customer Service',
  'Accommodation Quality',
  'Transportation Quality',
  'Tour Packages Quality',
  'Website Navigation',
  'Price and Value',
  'Destination Information',
  'Travel Planning Assistance',
  'Other'
  ];
  filteredOptions:Observable<string[]> | undefined;

  constructor() { }

  ngOnInit(): void {

    this.filteredOptions = this.subjectControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  validate(form:NgForm){
    
  }

  private _filter(value: string): string[] {
    const filterValue = this._normalizeValue(value);
    return this.options.filter((street: string) => this._normalizeValue(street).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

}
