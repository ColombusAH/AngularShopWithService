import { Pipe, PipeTransform } from '@angular/core';
import { LocalizationService } from '../../core/services/localization.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private localizationService: LocalizationService) {}
  transform(value: string): string {
    const translatedValue = this.localizationService.translate(value) || value;
    return translatedValue;
  }
}
