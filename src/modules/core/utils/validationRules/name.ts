// Core
import ValidationRule from '../validationRule';

// Other
import { ErrorType } from '../validator/types';
import { getError } from '../validationRule/helpers/getError';

export class Name extends ValidationRule {
  constructor() {
    super();
  }

  execute(value: string): ErrorType {
    const minChar = /^.{3,}$/;
    const maxChar = /^.{3,20}$/;
    const firstSymbol = /^[A-ZA-Я]{1}/;
    const cyrillicAndLatin = /^[A-Za-zА-Яа-яЁё-]+$/;

    const rules: [RegExp, string][] = [
      [
        minChar,
        'Минимальное количество символов - 3',
      ],
      [
        maxChar,
        'Максимальное количество символов - 20',
      ],
      [
        firstSymbol,
        'Первый символ должен быть заглавной буквой',
      ],
      [
        cyrillicAndLatin,
        'Разрешерна только кирилица и латиница, нет спецсиволов (допустим только дефис)',
      ],
    ];

    return getError(value, rules);
  }
}
