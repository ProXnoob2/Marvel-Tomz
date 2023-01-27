import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  exports: [
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableModule,
    MatTabsModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatSelectModule,
  ],
})
export class MatModule {}
