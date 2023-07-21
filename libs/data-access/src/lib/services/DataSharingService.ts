import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private letterData: any;

  deleteLetterData() {
    this.letterData = undefined;
  }
}
