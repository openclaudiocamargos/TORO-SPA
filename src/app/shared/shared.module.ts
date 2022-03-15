import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextDialogComponent } from './components/text-dialog/text-dialog.component';

@NgModule({
  declarations: [
    TextDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
        };
    }
}
