/*
  This file is automatically generated. Any changes will be overwritten.
  Modify add-order.component.ts instead.
*/
import { ChangeDetectorRef, ViewChild, AfterViewInit, Injector, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';

import { DialogService, DIALOG_PARAMETERS, DialogRef } from '@radzen/angular/dist/dialog';
import { NotificationService } from '@radzen/angular/dist/notification';
import { ContentComponent } from '@radzen/angular/dist/content';
import { FormComponent } from '@radzen/angular/dist/form';

import { NorthwindService } from '../northwind.service';
import { SecurityService } from '../security.service';

export class AddOrderGenerated implements AfterViewInit, OnInit, OnDestroy {
  // Components
  @ViewChild('content1') content1: ContentComponent;
  @ViewChild('form0') form0: FormComponent;

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

  getCustomersResult: any;

  getCustomersCount: any;

  getEmployeesResult: any;

  getEmployeesCount: any;

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
    this.northwind.getCustomers(null, (<any>this.form0.fields.find(f => f.property == 'CustomerID')).pageSize, 0, null, null, true, null, null)
    .subscribe((result: any) => {
      this.getCustomersResult = result.value;

      this.getCustomersCount = result['@odata.count'];
    }, (result: any) => {

    });

    this.northwind.getEmployees(null, (<any>this.form0.fields.find(f => f.property == 'EmployeeID')).pageSize, 0, null, null, true, null, null)
    .subscribe((result: any) => {
      this.getEmployeesResult = result.value;

      this.getEmployeesCount = result['@odata.count'];
    }, (result: any) => {

    });
  }

  form0Cancel(event: any) {
    if (this.dialogRef) {
      this.dialogRef.close();
    } else {
      this._location.back();
    }
  }

  form0Submit(event: any) {
    this.northwind.createNorthwindOrder(event)
    .subscribe((result: any) => {
      if (this.dialogRef) {
        this.dialogRef.close();
      }
      this.router.navigate(['orders']);
    }, (result: any) => {
      this.notificationService.notify({ severity: "error", summary: `Error`, detail: `Unable to create new Order!` });
    });
  }

  form0LoadData(event: any) {
    if (event.property == 'CustomerID') {
          this.northwind.getCustomers(`${event.filter}`, event.top, event.skip, `${event.orderby}`, null, true, null, null)
      .subscribe((result: any) => {
          this.getCustomersResult = result.value;

      this.getCustomersCount = result['@odata.count'];
      }, (result: any) => {
    
      });
    }

    if (event.property == 'EmployeeID') {
          this.northwind.getEmployees(`${event.filter}`, event.top, event.skip, `${event.orderby}`, null, true, null, null)
      .subscribe((result: any) => {
          this.getEmployeesResult = result.value;

      this.getEmployeesCount = result['@odata.count'];
      }, (result: any) => {
    
      });
    }
  }
}
