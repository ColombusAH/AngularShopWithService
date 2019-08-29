import { Pipe, PipeTransform } from '@angular/core';
import { LocalizationService } from '../services/localization.service';

@Pipe({
  name: 'translate'
})
export class TranslatePipe implements PipeTransform {
  constructor(private localizationService: LocalizationService) {}
  transform(value: string): string {
    const translatedValue = this.localizationService.translate(value);
    return translatedValue;
  }
}
