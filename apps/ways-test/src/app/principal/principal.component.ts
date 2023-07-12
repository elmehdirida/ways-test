import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {
  DateBlockComponent,
  InputUiComponent,
  LinesComponent,
  SliderUiComponent,
  TextAreaComponent
} from "@ways-test/ui";
import {MatCardModule} from "@angular/material/card";
import { DatepickerComponent } from "../../../../../libs/ui/src/lib/Datepicker/Datepicker.component";

@Component({
    selector: 'ways-test-principal',
    standalone: true,
    templateUrl: './principal.component.html',
    styleUrls: ['./principal.component.css'],
    imports: [CommonModule, SliderUiComponent, InputUiComponent, NgOptimizedImage, MatCardModule, TextAreaComponent, LinesComponent, DateBlockComponent, DatepickerComponent]
})
export class PrincipalComponent {
  sender: string="Sender address";
  subject: string="Subject (optional)";
  footnote : string = "Footnote (optional)"
  body: string = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.  ";

  list : string[] =[
    "Test GmbH",
    " Wallstraße 8 Frankfurt",
    " GERMANY",
  ]
  contactInfo : any[] =[
    "01.01.2023",
    "Max Mustermann"
  ]

}
