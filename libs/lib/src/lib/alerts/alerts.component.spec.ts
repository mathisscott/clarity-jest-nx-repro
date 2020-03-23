import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ClarityModule, ClrCommonStringsService } from '@clr/angular';
import { CommonStringsServiceInternal } from '@clr/core/common';

import { AlertsComponent } from './alerts.component';

describe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule],
      declarations: [AlertsComponent],
      providers: [
        {
            provide: ClrCommonStringsService,
            useClass: CommonStringsServiceInternal
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
