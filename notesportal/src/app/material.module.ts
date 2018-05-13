import { NgModule  } from "@angular/core";
import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatCardModule, MatTableModule, MatSidenavModule, MatGridListModule } from '@angular/material';

@NgModule( {
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatTableModule,
        MatSidenavModule,
        MatGridListModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatTableModule,
        MatSidenavModule,
        MatGridListModule
    ]
})

export class MaterialModule { }
