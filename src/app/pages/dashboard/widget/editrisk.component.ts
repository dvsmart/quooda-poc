import { Input, Component } from "@angular/core";

@Component({
    selector: 'app-edit-risk',
    template: 'Detail: {{ rowdata.id }} <hr/> name: {{ rowdata.name }}',
    styles: [`
      :host {
        display: block;
        padding: 24px;
        color: red;
        background: rgba(0,0,0,0.1);
      }
    `]
  })
  export class EditRiskComponent {
    @Input() rowdata: any;
  }
  