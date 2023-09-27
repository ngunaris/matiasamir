import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  @Input()
  data: string = "Cualquier mensaje"

  @Output()
  eventoEnviarData = new EventEmitter<string>()

  @ViewChild('valores')
  input!:ElementRef<HTMLInputElement>

  enviarData(valor:string){
    this.eventoEnviarData.emit(valor)
    this.input.nativeElement.value = ""
  }
}
