import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Output() feactureSelected= new EventEmitter<string>()

  onSelect(feacture: string){
    this.feactureSelected.emit(feacture);
  }
}
