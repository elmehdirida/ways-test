import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {DividerComponent} from "../dividers/Divider/divider.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatBadgeModule} from "@angular/material/badge";

@Component({
  selector: 'ways-test-expansion-panel',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, MatIconModule, DividerComponent, MatTabsModule, MatBadgeModule],
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css'],
})
export class ExpansionPanelComponent {
  @Input() elementsCount =0
  @Input() panelTitle ="title"
  @Input() content =" this is the content "
  panelOpenState = false;
}
