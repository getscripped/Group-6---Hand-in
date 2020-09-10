import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';
import {
  MatTable,
  MatHeaderRow, MatHeaderCell, MatHeaderCellDef, MatHeaderRowDef,
  MatRow, MatRowDef,  MatCell, MatCellDef, MatFooterRow, MatFooterCellDef, MatFooterRowDef, MatFooterCell, MatColumnDef
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort,MatSortHeader} from '@angular/material/sort';
import {MatTabHeader} from '@angular/material/tabs'
import { FarmComponent } from './farm.component';

export const routes = [
  { path: '', component: FarmComponent, pathMatch: 'full' }
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
    MatFooterRow,
    MatFooterCellDef,
    MatFooterRowDef,
    MatFooterCell,
    MatColumnDef,
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
    FarmComponent
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class FarmModule{}
