import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjetoCRUDComponent } from './projeto-crud.component';

describe('ProjetoCRUDComponent', () => {
  let component: ProjetoCRUDComponent;
  let fixture: ComponentFixture<ProjetoCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetoCRUDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetoCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
