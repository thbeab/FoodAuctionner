import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ArticlesListComponent } from './articles-list.component';

describe('ArticlesListComponent', () => {
  let component: ArticlesListComponent;
  let fixture: ComponentFixture<ArticlesListComponent>;

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
