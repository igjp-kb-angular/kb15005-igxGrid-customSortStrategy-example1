import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { IgxGridModule, ISortingStrategy} from '@infragistics/igniteui-angular';
import { SampleDataType, SampleData } from './sampleData';
import { CustomSortingStrategy } from '../lib/CustomSortingStrategy'; // CustomSortingStrategyをインポートします。

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IgxGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'kb15005-app1';
  public data: SampleDataType[] = SampleData;
  public col1CustomSortingStrategy: ISortingStrategy = new CustomSortingStrategy(); // CustomSortingStrategyオブジェクトを作成し、col1CustomSortingStrategyに代入します。

  constructor() {}

  ngOnInit() {
  }
}
