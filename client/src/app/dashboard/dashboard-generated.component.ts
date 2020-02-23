/*
  This file is automatically generated. Any changes will be overwritten.
  Modify dashboard.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { HeadingComponent } from '@radzen/angular/dist/heading';
import { CardComponent } from '@radzen/angular/dist/card';
import { ProgressBarComponent } from '@radzen/angular/dist/progressbar';
import { GaugeComponent } from '@radzen/angular/dist/gauge';
import { SparklineComponent } from '@radzen/angular/dist/sparkline';
import { ImageComponent } from '@radzen/angular/dist/image';
import { ButtonComponent } from '@radzen/angular/dist/button';
import { GridComponent } from '@radzen/angular/dist/grid';
import { LabelComponent } from '@radzen/angular/dist/label';
import { SelectBarComponent } from '@radzen/angular/dist/selectbar';
import { ChartComponent } from '@radzen/angular/dist/chart';
import { SchedulerComponent } from '@radzen/angular/dist/scheduler';
import { GoogleMapComponent } from '@radzen/angular/dist/googlemap';

import { NorthwindService } from '../northwind.service';
import { SecurityService } from '../security.service';

export class DashboardGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('heading8') heading8: HeadingComponent;
  @ViewChild('heading9') heading9: HeadingComponent;
  @ViewChild('card0') card0: CardComponent;
  @ViewChild('heading0') heading0: HeadingComponent;
  @ViewChild('heading1') heading1: HeadingComponent;
  @ViewChild('progressbar0') progressbar0: ProgressBarComponent;
  @ViewChild('heading3') heading3: HeadingComponent;
  @ViewChild('heading4') heading4: HeadingComponent;
  @ViewChild('card3') card3: CardComponent;
  @ViewChild('heading12') heading12: HeadingComponent;
  @ViewChild('gauge0') gauge0: GaugeComponent;
  @ViewChild('card1') card1: CardComponent;
  @ViewChild('heading2') heading2: HeadingComponent;
  @ViewChild('heading5') heading5: HeadingComponent;
  @ViewChild('sparkline0') sparkline0: SparklineComponent;
  @ViewChild('heading6') heading6: HeadingComponent;
  @ViewChild('heading7') heading7: HeadingComponent;
  @ViewChild('card2') card2: CardComponent;
  @ViewChild('heading10') heading10: HeadingComponent;
  @ViewChild('image0') image0: ImageComponent;
  @ViewChild('heading11') heading11: HeadingComponent;
  @ViewChild('card4') card4: CardComponent;
  @ViewChild('button1') button1: ButtonComponent;
  @ViewChild('heading13') heading13: HeadingComponent;
  @ViewChild('grid0') grid0: GridComponent;
  @ViewChild('card5') card5: CardComponent;
  @ViewChild('selectbar0') selectbar0: SelectBarComponent;
  @ViewChild('Sales') sales: HeadingComponent;
  @ViewChild('chart0') chart0: ChartComponent;
  @ViewChild('card7') card7: CardComponent;
  @ViewChild('heading15') heading15: HeadingComponent;
  @ViewChild('scheduler0') scheduler0: SchedulerComponent;
  @ViewChild('card6') card6: CardComponent;
  @ViewChild('heading14') heading14: HeadingComponent;
  @ViewChild('googlemap0') googlemap0: GoogleMapComponent;

  router: Router;

  cd: ChangeDetectorRef;

  route: ActivatedRoute;

  notificationService: NotificationService;

  dialogService: DialogService;

  dialogRef: DialogRef;

  _location: Location;

  _subscription: Subscription;

  northwind: NorthwindService;

  security: SecurityService;

  totalSales: any;

  salesTarget: any;

  customers: any;

  employeeOfTheMonthName: any;

  employeeOfTheMonth: any;

  getEmployeesResult: any;

  getEmployeesCount: any;

  salesFor2016: any;

  selectedYear: any;

  salesData: any;

  salesFor2017: any;

  salesFor2018: any;

  orders: any;

  parameters: any;

  constructor(private injector: Injector) {
  }

  ngOnInit() {
    this.notificationService = this.injector.get(NotificationService);

    this.dialogService = this.injector.get(DialogService);

    this.dialogRef = this.injector.get(DialogRef, null);

    this.router = this.injector.get(Router);

    this.cd = this.injector.get(ChangeDetectorRef);

    this._location = this.injector.get(Location);

    this.route = this.injector.get(ActivatedRoute);

    this.northwind = this.injector.get(NorthwindService);
    this.security = this.injector.get(SecurityService);
  }

  ngAfterViewInit() {
    this._subscription = this.route.params.subscribe(parameters => {
      if (this.dialogRef) {
        this.parameters = this.injector.get(DIALOG_PARAMETERS);
      } else {
        this.parameters = parameters;
      }
      this.load();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }


  load() {
    this.totalSales = 49234;

    this.salesTarget = 80000;

    this.customers = [134, 193, 156, 123, 192, 155, 132, 163, 143, 182, 192, 233, 129, 183, 233, 150, 113, 233, 323, 354, 433, 425, 365, 322, 280, 321, 393, 436,530,553,576];

    this.employeeOfTheMonthName = "Loading ...";

    this.northwind.getEmployeeById(1)
    .subscribe((result: any) => {
      this.employeeOfTheMonth = result;

      this.employeeOfTheMonthName = result.FirstName + ' ' + result.LastName;
    }, (result: any) => {

    });

    this.northwind.getEmployees(null, this.grid0.allowPaging ? this.grid0.pageSize : null, this.grid0.allowPaging ? 0 : null, null, null, this.grid0.allowPaging, null, null)
    .subscribe((result: any) => {
      this.getEmployeesResult = result.value;

      this.getEmployeesCount = this.grid0.allowPaging ? result['@odata.count'] : result.value.length;

      this.grid0.isLoading = false
    }, (result: any) => {

    });

    this.salesFor2016 = [
  {
    CategoryName: 'Beverages',
    Total: 3438,
    Date: new Date(2016, 6, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 2177.8,
    Date: new Date(2016, 6, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 6261,
    Date: new Date(2016, 6, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 7385.6,
    Date: new Date(2016, 6, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 1273.6,
    Date: new Date(2016, 6, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 2722.2,
    Date: new Date(2016, 6, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 4163.4,
    Date: new Date(2016, 6, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 2770.5,
    Date: new Date(2016, 6, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 5036.4,
    Date: new Date(2016, 7, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 2333.8,
    Date: new Date(2016, 7, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 5224.8,
    Date: new Date(2016, 7, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 4918.4,
    Date: new Date(2016, 7, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 270.6,
    Date: new Date(2016, 7, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 3807.2,
    Date: new Date(2016, 7, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 812.8,
    Date: new Date(2016, 7, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 4205.4,
    Date: new Date(2016, 7, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 5131.6,
    Date: new Date(2016, 8, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 1864,
    Date: new Date(2016, 8, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 6450.5,
    Date: new Date(2016, 8, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 4290,
    Date: new Date(2016, 8, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 819.2,
    Date: new Date(2016, 8, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 4538.5,
    Date: new Date(2016, 8, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 1164.8,
    Date: new Date(2016, 8, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 3377.4,
    Date: new Date(2016, 8, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 8793.2,
    Date: new Date(2016, 9, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 4577.2,
    Date: new Date(2016, 9, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 3797.1,
    Date: new Date(2016, 9, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 8117.6,
    Date: new Date(2016, 9, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 2501.2,
    Date: new Date(2016, 9, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 3914.1,
    Date: new Date(2016, 9, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 2898.2,
    Date: new Date(2016, 9, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 6605,
    Date: new Date(2016, 9, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 19712,
    Date: new Date(2016, 10, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 6918.3,
    Date: new Date(2016, 10, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 3227.8,
    Date: new Date(2016, 10, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 7738.8,
    Date: new Date(2016, 10, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 2599.8,
    Date: new Date(2016, 10, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 5887.2,
    Date: new Date(2016, 10, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 2413.2,
    Date: new Date(2016, 10, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 1206.9,
    Date: new Date(2016, 10, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 11768,
    Date: new Date(2016, 11, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 1587.2,
    Date: new Date(2016, 11, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 6550.4,
    Date: new Date(2016, 11, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 12165.4,
    Date: new Date(2016, 11, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 2353.2,
    Date: new Date(2016, 11, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 9423,
    Date: new Date(2016, 11, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 3681.8,
    Date: new Date(2016, 11, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 3424.4,
    Date: new Date(2016, 11, 1)
  }
];

    this.selectedYear = 2016;

    this.salesData = this.salesFor2016;

    this.salesFor2017 = [  
  {
    CategoryName: 'Beverages',
    Total: 24224.4,
    Date: new Date(2017, 0, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 5698.8,
    Date: new Date(2017, 0, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 9582.3,
    Date: new Date(2017, 0, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 9872,
    Date: new Date(2017, 0, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 4570.2,
    Date: new Date(2017, 0, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 7775.8,
    Date: new Date(2017, 0, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 2895,
    Date: new Date(2017, 0, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 2074.3,
    Date: new Date(2017, 0, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 3090.4,
    Date: new Date(2017, 1, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 6618.4,
    Date: new Date(2017, 1, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 7413.5,
    Date: new Date(2017, 1, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 5616,
    Date: new Date(2017, 1, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 5043.4,
    Date: new Date(2017, 1, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 8442.9,
    Date: new Date(2017, 1, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 2698.8,
    Date: new Date(2017, 1, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 2283.8,
    Date: new Date(2017, 1, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 11027.2,
    Date: new Date(2017, 2, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 1905.9,
    Date: new Date(2017, 2, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 3324.9,
    Date: new Date(2017, 2, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 9844.4,
    Date: new Date(2017, 2, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 3350,
    Date: new Date(2017, 2, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 3271.6,
    Date: new Date(2017, 2, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 3676.8,
    Date: new Date(2017, 2, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 3579.1,
    Date: new Date(2017, 2, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 7377.5,
    Date: new Date(2017, 3, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 5903,
    Date: new Date(2017, 3, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 11714.65,
    Date: new Date(2017, 3, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 6647,
    Date: new Date(2017, 3, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 6555.6,
    Date: new Date(2017, 3, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 6846.24,
    Date: new Date(2017, 3, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 6137.1,
    Date: new Date(2017, 3, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 4518.3,
    Date: new Date(2017, 3, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 15654,
    Date: new Date(2017, 4, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 5728.8,
    Date: new Date(2017, 4, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 7997.5,
    Date: new Date(2017, 4, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 11491.5,
    Date: new Date(2017, 4, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 2551.5,
    Date: new Date(2017, 4, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 3548.05,
    Date: new Date(2017, 4, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 3481.2,
    Date: new Date(2017, 4, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 6371.15,
    Date: new Date(2017, 4, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 3602,
    Date: new Date(2017, 5, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 1886.85,
    Date: new Date(2017, 5, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 2494.4,
    Date: new Date(2017, 5, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 9507.7,
    Date: new Date(2017, 5, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 6882.5,
    Date: new Date(2017, 5, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 5006.3,
    Date: new Date(2017, 5, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 6231,
    Date: new Date(2017, 5, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 3477.25,
    Date: new Date(2017, 5, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 8343.5,
    Date: new Date(2017, 6, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 6798.7,
    Date: new Date(2017, 6, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 6968.03,
    Date: new Date(2017, 6, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 13570.1,
    Date: new Date(2017, 6, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 4780,
    Date: new Date(2017, 6, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 4902.3,
    Date: new Date(2017, 6, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 1650,
    Date: new Date(2017, 6, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 8452.3,
    Date: new Date(2017, 6, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 6154,
    Date: new Date(2017, 7, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 4501.8,
    Date: new Date(2017, 7, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 8025.3,
    Date: new Date(2017, 7, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 7375.5,
    Date: new Date(2017, 7, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 5529.25,
    Date: new Date(2017, 7, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 4943.64,
    Date: new Date(2017, 7, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 4455,
    Date: new Date(2017, 7, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 8997.2,
    Date: new Date(2017, 7, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 6198.75,
    Date: new Date(2017, 8, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 3748.9,
    Date: new Date(2017, 8, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 7192.5,
    Date: new Date(2017, 8, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 12054,
    Date: new Date(2017, 8, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 5755.75,
    Date: new Date(2017, 8, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 12406.54,
    Date: new Date(2017, 8, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 2887.25,
    Date: new Date(2017, 8, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 9489.33,
    Date: new Date(2017, 8, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 9043,
    Date: new Date(2017, 9, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 6780.45,
    Date: new Date(2017, 9, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 8051.55,
    Date: new Date(2017, 9, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 13745,
    Date: new Date(2017, 9, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 3392,
    Date: new Date(2017, 9, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 14703.23,
    Date: new Date(2017, 9, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 7291,
    Date: new Date(2017, 9, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 7322.27,
    Date: new Date(2017, 9, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 4034,
    Date: new Date(2017, 10, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 3854.8,
    Date: new Date(2017, 10, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 5271.16,
    Date: new Date(2017, 10, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 13597.1,
    Date: new Date(2017, 10, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 6266,
    Date: new Date(2017, 10, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 1068,
    Date: new Date(2017, 10, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 3268.25,
    Date: new Date(2017, 10, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 8554.05,
    Date: new Date(2017, 10, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 11675.25,
    Date: new Date(2017, 11, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 6252.6,
    Date: new Date(2017, 11, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 9191.98,
    Date: new Date(2017, 11, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 10590.5,
    Date: new Date(2017, 11, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 5810.75,
    Date: new Date(2017, 11, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 14706.43,
    Date: new Date(2017, 11, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 13047.15,
    Date: new Date(2017, 11, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 6201.6,
    Date: new Date(2017, 11, 1)
  }
];

    this.salesFor2018 = [  
  {
    CategoryName: 'Beverages',
    Total: 28558,
    Date: new Date(2018, 0, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 5000.45,
    Date: new Date(2018, 0, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 12387.75,
    Date: new Date(2018, 0, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 19448,
    Date: new Date(2018, 0, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 12573.75,
    Date: new Date(2018, 0, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 5603.17,
    Date: new Date(2018, 0, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 1639,
    Date: new Date(2018, 0, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 15644.6,
    Date: new Date(2018, 0, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 35869.5,
    Date: new Date(2018, 1, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 6727.2,
    Date: new Date(2018, 1, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 10026.15,
    Date: new Date(2018, 1, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 11277,
    Date: new Date(2018, 1, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 4127.75,
    Date: new Date(2018, 1, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 23739.86,
    Date: new Date(2018, 1, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 1202.8,
    Date: new Date(2018, 1, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 11591.69,
    Date: new Date(2018, 1, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 28729.25,
    Date: new Date(2018, 2, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 11018.3,
    Date: new Date(2018, 2, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 24302.85,
    Date: new Date(2018, 2, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 14990.8,
    Date: new Date(2018, 2, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 3510.5,
    Date: new Date(2018, 2, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 4203.66,
    Date: new Date(2018, 2, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 13168,
    Date: new Date(2018, 2, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 9902.09,
    Date: new Date(2018, 2, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 24470,
    Date: new Date(2018, 3, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 10737.5,
    Date: new Date(2018, 3, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 9183.53,
    Date: new Date(2018, 3, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 36452.1,
    Date: new Date(2018, 3, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 5789.25,
    Date: new Date(2018, 3, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 22612.88,
    Date: new Date(2018, 3, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 15073,
    Date: new Date(2018, 3, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 10312.3,
    Date: new Date(2018, 3, 1)
  },
  {
    CategoryName: 'Beverages',
    Total: 4597,
    Date: new Date(2018, 4, 1)
  },
  {
    CategoryName: 'Condiments',
    Total: 1074,
    Date: new Date(2018, 4, 1)
  },
  {
    CategoryName: 'Confections',
    Total: 2459.45,
    Date: new Date(2018, 4, 1)
  },
  {
    CategoryName: 'Dairy Products',
    Total: 636,
    Date: new Date(2018, 4, 1)
  },
  {
    CategoryName: 'Grains/Cereals',
    Total: 4421,
    Date: new Date(2018, 4, 1)
  },
  {
    CategoryName: 'Meat/Poultry',
    Total: 4116,
    Date: new Date(2018, 4, 1)
  },
  {
    CategoryName: 'Produce',
    Total: 1333.05,
    Date: new Date(2018, 4, 1)
  },
  {
    CategoryName: 'Seafood',
    Total: 1262.16,
    Date: new Date(2018, 4, 1)
  }
];

    this.northwind.getNorthwindOrders(`OrderDate ge 2018-01-01T00:00:00Z`, null, null, null, null, null, null, null)
    .subscribe((result: any) => {
      this.orders = result.value;
    }, (result: any) => {

    });
  }

  button1Click(event: any) {
    this.northwind.getEmployees(null, null, null, null, null, null, `xlsx`, null)
    .subscribe((result: any) => {

    }, (result: any) => {

    });
  }

  grid0LoadData(event: any) {
    this.northwind.getEmployees(null, event.top, event.skip, `${event.orderby}`, ``, event.top != null && event.skip != null, null, null)
    .subscribe((result: any) => {
      this.getEmployeesResult = result.value;

      this.getEmployeesCount = event.top != null && event.skip != null ? result['@odata.count'] : result.value.length;
    }, (result: any) => {

    });
  }

  selectbar0Change(event: any) {
    if (event == 2016) {
        this.salesData = this.salesFor2016;
    }

    if (event == 2017) {
        this.salesData = this.salesFor2017;
    }

    if (event == 2018) {
        this.salesData = this.salesFor2018;
    }
  }
}
