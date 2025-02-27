import {Component, Input, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {LetterService} from "@ways-test/data-access";
import {JsonPipe, NgForOf, NgIf, TitleCasePipe} from "@angular/common";


const ELEMENT_DATA: any[] = [
  {
    "id": 1,
    "senderAddress": "123 Main St, City",
    "receiverAddress": [
      "456 Elm St, City"
    ],
    "contact": [
      "01.01.2023",
      "John Doe"
    ],
    "subject": "Example Subject 1",
    "body": "Lorem ipsum dolor sit amet.",
    "footNote": "Example Footnote 1",
    "navigationId": 2
  },
  {
    "id": 2,
    "senderAddress": "789 Oak St, City",
    "receiverAddress": [
      "321 Pine St, City",
      "654 Birch St, City"
    ],
    "contact": [
      "01.01.2023",
      "Bob Johnson"
    ],
    "subject": "Example Subject 2",
    "body": "Consectetur adipiscing elit.",
    "footNote": "Example Footnote 2",
    "navigationId": 4
  },
  {
    "id": 3,
    "senderAddress": "987 Maple St, City",
    "receiverAddress": [
      "654 Birch St, City"
    ],
    "contact": [
      "01.01.2023",
      "Alice Brown"
    ],
    "subject": "Example Subject 3",
    "body": "Sed do eiusmod tempor incididunt.",
    "footNote": "Example Footnote 3",
    "navigationId": 7
  },
  {
    "id": 4,
    "senderAddress": "456 Elm St, Cityyyy",
    "receiverAddress": [
      "123 Main St, Cityjhjjh",
      "789 Oak St, City"
    ],
    "contact": [
      "01.01.2023",
      "Sarah Davis"
    ],
    "subject": "Example Subject 4",
    "body": "Ut enim ad minim veniam.",
    "footNote": "Example Footnote 4"
  },
  {
    "senderAddress": "Beni Mellal, Modern neibors",
    "receiverAddress": [
      "mohsine hajjar"
    ],
    "subject": "mjiug",
    "body": "uigui",
    "contact": [
      "5.4.1999",
      "Mohsine Hajjar"
    ],
    "footNote": "iguugg",
    "id": 5,
    "navigationId": 26
  },
  {
    "senderAddress": "quartier moderne",
    "receiverAddress": [
      "Beni Mellal",
      "Mghila",
      "Fst"
    ],
    "subject": "Testing",
    "body": "In case you haven’t been paying attention, I’m a big fan of AngularJS. In fact, I’m just starting out with Angular. Over the next few months, you’ll be seeing many articles about Angular, many of which will contain code that is directly inspired by the beautiful angular world of software development. The code above is a fairly simple test to check if an angular app is online or not.",
    "contact": [
      "7.20.2023",
      "Mohsine Hajjar"
    ],
    "footNote": "By me",
    "id": 6,
    "navigationId": 2
  },
  {
    "senderAddress": "Mohsine",
    "receiverAddress": [],
    "subject": "",
    "body": "hajjar",
    "contact": [],
    "footNote": "",
    "id": 7
  },
  {
    "senderAddress": "test",
    "receiverAddress": [],
    "subject": "",
    "body": "test",
    "contact": [
      "7.24.2023",
      ""
    ],
    "footNote": "",
    "id": 8,
    "navigationId": 10
  },
  {
    "senderAddress": "Beni Mellal",
    "receiverAddress": [],
    "subject": "Interview",
    "body": "any",
    "contact": [
      "7.5.2023",
      "Mohsine hajjar"
    ],
    "footNote": "just come!",
    "id": 9
  },
  {
    "senderAddress": "Beni Mellal",
    "receiverAddress": [],
    "subject": "Interview",
    "body": "any",
    "contact": [
      "7.5.2023",
      "Mohsine hajjar"
    ],
    "footNote": "just come!",
    "id": 10,
    "navigationId": 4
  }
];
@Component({
  selector: 'ways-test-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [
    MatTableModule,
    TitleCasePipe,
    NgForOf,
    JsonPipe,
    NgIf
  ]
})
export class TableComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() dataSource: any = ELEMENT_DATA;


  constructor(private letterService: LetterService) {}

  ngOnInit(): void {
    this.initializeColumns(this.dataSource)
  }
      initializeColumns (data: Array<[string, any]>){
        const keySet = new Set<string>();
        data.forEach((item) => {
          Object.keys(item).forEach((key) => {
            keySet.add(key);
          });
        });
        this.displayedColumns = Array.from(keySet)
      }
  protected readonly Array = Array;
}
