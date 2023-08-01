import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from "@angular/material/list";

@Component({
  selector: 'ways-test-side-nav-divider',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './side-nav-divider.component.html',
  styleUrls: ['./side-nav-divider.component.css'],
})
export class SideNavDividerComponent {}
