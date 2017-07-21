import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'bar', loadChildren: './search/search.module#BarSearchModule' },
    ])
  ]
})
export class BarModule {}
