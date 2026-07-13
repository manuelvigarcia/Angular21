import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeController } from './fake-controller';

describe('FakeController', () => {
  let component: FakeController;
  let fixture: ComponentFixture<FakeController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeController],
    }).compileComponents();

    fixture = TestBed.createComponent(FakeController);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
