import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ClarityModule, ClrCommonStringsService } from '@clr/angular';
import { CommonStringsServiceInternal } from '@clr/core/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule],
      declarations: [AppComponent],
      providers: [
        {
            provide: ClrCommonStringsService,
            useClass: CommonStringsServiceInternal
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'clr-testing-repro'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('clr-testing-repro');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to clr-testing-repro!'
    );
  });
});
