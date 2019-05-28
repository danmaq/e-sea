import { addLocaleData, IntlProvider } from 'react-intl';
import * as ja from 'react-intl/locale-data/ja';
import { flatten } from 'flat';

addLocaleData([...ja]);

interface LocalMessages {
  [key: string]: ReactIntl.MessageValue;
}

interface Locales {
  [local: string]: LocalMessages;
}

export const locales: Locales = {
  ja: flatten(require('~/intl/locales/ja.json'))
};

export default class IntlMessage {
  protected intl: ReactIntl.InjectedIntl;
  public constructor(locale?: string) {
    if (locale) {
      this.intl = this.makeIntlInstance(locale);
    }
  }
  protected makeIntlInstance(locale: string): ReactIntl.InjectedIntl {
    return new IntlProvider({
      locale,
      messages: locales[locale]
    }).getChildContext().intl;
  }
  public format(
    messageDescriptor: ReactIntl.FormattedMessage.MessageDescriptor,
    values?: LocalMessages
  ): string {
    return this.intl.formatMessage.bind(this.intl)(messageDescriptor, values);
  }
  public setLanguage(locale: string) {
    this.intl = this.makeIntlInstance(locale);
  }
}
