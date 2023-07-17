import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {PrincipalComponent} from "./principal/principal.component";
import { MatNativeDateModule } from '@angular/material/core';
import { DataAccessModule, LetterService } from '@ways-test/data-access';

@Component({
  standalone: true,
  imports: [ RouterModule, PrincipalComponent, MatNativeDateModule , DataAccessModule],
  selector: 'ways-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private letterService : LetterService) {}
  ngOnInit(): void {
    this.letterService.getletters().subscribe(data => console.log(data));
  }
  title = 'ways-test';
}