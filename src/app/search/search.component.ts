import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { City } from '../interface/city';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() emiter = new EventEmitter<City[]>();
  
  @ViewChild('spain') spain!: ElementRef;
  @ViewChild('UK') uk!: ElementRef;
  @ViewChild('portugal') portugal!: ElementRef;

  term: string = '';
  list: City[] = [];
  selectedCountry: string = '';
  disabled: boolean = true;


  constructor( private dataService: DataService ) { }

  ngOnInit(): void {
  }
  

  seugest(){
    this.dataService.universities(this.selectedCountry, this.term)
      .subscribe( (list) => {
        this.emiter.emit(list);
        console.log(list);
      })
  }

  getSpain(){
    this.disabled = false;
    this.selectedCountry = this.spain.nativeElement.value;
    this.spain.nativeElement.classList.add('btn-success');
    this.uk.nativeElement.classList.remove('btn-success');
    this.portugal.nativeElement.classList.remove('btn-success');
  }

  getUK(){
    this.disabled = false;
    this.selectedCountry = this.uk.nativeElement.value;
    this.uk.nativeElement.classList.add('btn-success');
    this.spain.nativeElement.classList.remove('btn-success');
    this.portugal.nativeElement.classList.remove('btn-success');
  }

  getPortugal(){
    this.disabled = false;
    this.selectedCountry = this.portugal.nativeElement.value;
    this.portugal.nativeElement.classList.add('btn-success');
    this.spain.nativeElement.classList.remove('btn-success');
    this.uk.nativeElement.classList.remove('btn-success');
  }

}
