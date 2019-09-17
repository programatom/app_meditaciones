import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-categoria',
  templateUrl: './toolbar-categoria.component.html',
  styleUrls: ['./toolbar-categoria.component.scss'],
})
export class ToolbarCategoriaComponent implements OnInit {

  @Output() dismiss: EventEmitter<any> = new EventEmitter();
  @Output() download: EventEmitter<any> = new EventEmitter();
  @Input("downloadIconColor") downloadIconColor:string;
  @Input("downloading") downloading:boolean;
  @Input("categoria") categoria:string;
  constructor() { }



  ngOnInit() {

  }

  toggle(){
    this.download.emit();
  }

  dismissClick(){
    this.dismiss.emit(null);
  }

}
