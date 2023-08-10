import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { LetterService } from './services/LetterService.service';
import { FormService } from './services/Form.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [LetterService, FormService],
})
export class DataAccessModule {}
