import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  categories = ['shoes', 'smartphones', 'laptops', 'sports'];
  constructor() {}

  ngOnInit() {}
}
