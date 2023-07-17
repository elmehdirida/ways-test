import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { LetterService } from './services/LetterService.service';

@NgModule({
  imports: [CommonModule,HttpClientModule],
  providers: [LetterService]

})
export class DataAccessModule {

}
