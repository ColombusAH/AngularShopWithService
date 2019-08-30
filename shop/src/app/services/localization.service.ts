import { Injectable } from '@angular/core';
import { LanguageData } from '../models/language.model';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private readonly _supportedLanguages: LanguageData[] = [
    { language: 'English', code: 'eng' },
    { language: 'Français', code: 'fr' },
    { language: 'Deutsche', code: 'gr' }
  ];

  private _selectedLanguage: string = 'eng';

  private _languageSets = {
    eng: {
      language: 'English',
      values: {
        home: 'Home',
        about: 'About',
        products: 'Products',
        contact: 'Contact',
        'add product': 'Add Product',
        cart: 'Cart',
        logout: 'Logout'
      }
    },
    fr: {
      language: 'Français',
      values: {
        home: 'Acceuille',
        about: 'A propos',
        products: 'Produit',
        contact: 'Contact',
        'add product': 'Ajouter Produit',
        cart: 'Panier',
        logout: 'Deconnexion'
      }
    },
    gr: {
      language: 'Deutsche',
      values: {
        home: 'Begrüßt',
        about: 'Über',
        products: 'Produkt',
        contact: 'Kontakt',
        'add product': 'Produkt hinzufügen',
        cart: 'Korb',
        logout: 'Ausloggen'
      }
    }
  };

  useLanguage(code: string): void {
    const language = this._supportedLanguages.find(
      sl => sl.code === code.toLowerCase()
    );
    if (language) {
      this._selectedLanguage = language.code;
    }
  }

  translate(code: string): string {
    code = code.toLowerCase();
    const language = this._languageSets[this._selectedLanguage];

    if (language) {
      return language.values[code];
    }
  }

  getAllSupportedLanguages() {
    return this._supportedLanguages;
  }
}
