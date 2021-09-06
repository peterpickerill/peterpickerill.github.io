import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingLanguageBtnComponent } from './programming-language-btn.component';

describe('ProgrammingLanguageBtnComponent', () => {
  let component: ProgrammingLanguageBtnComponent;
  let fixture: ComponentFixture<ProgrammingLanguageBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammingLanguageBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammingLanguageBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
