import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Output() accept = new EventEmitter<void>();
  @Output() closeModal = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
