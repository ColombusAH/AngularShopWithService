import { ContactPageComponent } from './../pages/contact-page/contact-page.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalizationService {
  private _languages: string[] = ['eng', 'fr', 'gr'];
  private _selectedLanguage: string = 'gr';

  private _languageSets = {
    eng: {
      language: 'eng',
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
      language: 'fr',
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
      language: 'gr',
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

  changeLanguage(code: string): void {
    const language = this._languages.find(lang => lang === code.toLowerCase());
    if (language) {
      this._selectedLanguage = language;
    }
  }

  translate(code: string): string {
    code = code.toLowerCase();
    const language = this._languageSets[this._selectedLanguage];

    if (language) {
      return language.values[code];
    }
  }
}
