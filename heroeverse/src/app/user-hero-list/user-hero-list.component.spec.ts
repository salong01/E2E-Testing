import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHeroListComponent } from './user-hero-list.component';

describe('UserHeroListComponent', () => {
  let component: UserHeroListComponent;
  let fixture: ComponentFixture<UserHeroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHeroListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
