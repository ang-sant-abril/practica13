import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() texto: string;
  @Output() accion: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setAccion(e: boolean) {
    this.accion.emit(e);
  }

}
