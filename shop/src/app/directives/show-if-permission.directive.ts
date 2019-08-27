import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
import { PermissionService } from '../services/permission.service';

@Directive({
  selector: '[appShowIfPermission]'
})
export class ShowIfPermissionDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private permissionService: PermissionService
  ) {}
  @Input() set appShowIfPermission(requiredPermisssion: string) {
    if (this.permissionService.userHavePermission(requiredPermisssion)) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
