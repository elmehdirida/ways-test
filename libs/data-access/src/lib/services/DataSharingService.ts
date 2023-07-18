import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private letterData: any;

  setLetterData(data: any) {
    this.letterData = data;
  }

  getLetterData() {
    return this.letterData;
  }
}
