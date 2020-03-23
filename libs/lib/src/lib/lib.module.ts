import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  imports: [CommonModule, ClarityModule],
  declarations: [AlertsComponent]
})
export class LibModule {}
