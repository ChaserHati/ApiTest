import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JsonPage } from './json.page';

describe('JsonPage', () => {
  let component: JsonPage;
  let fixture: ComponentFixture<JsonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
