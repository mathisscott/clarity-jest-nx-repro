import { Component } from '@angular/core';

@Component({
  selector: 'clr-repro-alerts',
  templateUrl: './alerts.component.html'
})
export class AlertsComponent {
  public alerts: Array<{ message: string }> = [
    { message: 'Test1' },
    { message: 'Test2' }
  ];
}
