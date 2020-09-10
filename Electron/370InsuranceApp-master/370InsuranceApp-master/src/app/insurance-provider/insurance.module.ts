import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InsuranceProviderComponent} from './insurance-provider.component';
import { MatTableModule } from '@angular/material';
import {
  MatPaginator, MatSort, MatTable, MatTabHeader,
  MatHeaderRow, MatHeaderCell, MatHeaderCellDef, MatHeaderRowDef,
  MatSortHeader, MatRow, MatRowDef,  MatCell, MatCellDef
} from '@angular/material';

export const routes = [
  { path: '', component: InsuranceProviderComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  declarations: [
    MatTabHeader,
    MatHeaderRow,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatSortHeader,
    MatRow,
    MatRowDef,
    MatCell,
    MatCellDef,
    MatSort,
    MatTable,
    MatPaginator,
    InsuranceProviderComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class InsurnaceProviderModule{}
