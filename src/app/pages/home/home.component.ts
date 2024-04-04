import { Component } from '@angular/core';

const ROW_HIGHT: { [id: number]: number } = {
  1: 400,
  2: 335,
  3: 350,
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cols = 3;
  rowHeight = ROW_HIGHT[this.cols];
  category: string | undefined;

  constructor() {}

  ngOnInit() {}

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HIGHT[this.cols];
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }
}
