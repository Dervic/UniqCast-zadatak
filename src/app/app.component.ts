import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  name: string;
  url: string;
  actions: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'HRT1', url: 'https://www.hrt.hr/', actions: ''},
  {id: 2, name: 'Vrijeme', url: 'https://www.vrijeme.net/', actions: ''},
  {id: 3, name: 'Dnevnik', url: 'https://dnevnik.hr/', actions: ''},
  {id: 4, name: 'RTL', url: "https://www.rtl.hr/", actions: ''},
  {id: 5, name: 'Index', url: "https://www.index.hr/", actions: ''},
  {id: 6, name: 'YouTube', url: "https://www.youtube.com/", actions: ''},
  {id: 7, name: 'Google', url: "https://www.google.hr/", actions: ''},
  {id: 8, name: 'Jutarnji', url: "https://www.jutarnji.hr/", actions: ''},
  {id: 9, name: 'IMDB', url: "https://www.imdb.com/", actions: ''},
  {id: 10, name: 'Steam', url: "https://store.steampowered.com/", actions: ''},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'zadatak1';
  displayedColumns: string[] = ['id', 'name', 'url', 'actions'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  data: PeriodicElement[] = ELEMENT_DATA;

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  addColumn() {
    const randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }
}
