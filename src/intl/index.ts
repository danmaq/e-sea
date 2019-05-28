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

interface Item {
  primary: string;
  secondary: string[];
}

export interface Business {
  title: string;
  note: string[];
}
export interface Member {
  role: string;
  name: string;
  skill: string[];
}
export interface About {
  title: string;
  company: Item;
  date: Item;
  money: Item;
  offices: {
    sales: Item;
    management: Item;
    randb: Item;
    hq: Item;
  };
}
export type Customers = string[];

type Primaries = string;
type Secondaries = string[] | Business[] | Member[] | About | Customers[];
type Format = Primaries | Secondaries;

const toLocalMessages = (json: JSON): LocalMessages => {
  const result: LocalMessages = flatten(json, { safe: true });
  console.log({ result });
  return result;
};

export const locales: Locales = {
  ja: toLocalMessages(require('~/intl/locales/ja.json'))
};

export default class IntlMessage {
  protected intl: ReactIntl.InjectedIntl;
  public constructor(locale?: string) {
    this.intl = this.makeIntlInstance(locale || this.getDefaultLanguage());
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
  ): Format {
    return this.intl.formatMessage.bind(this.intl)(messageDescriptor, values);
  }
  public setLanguage(locale: string) {
    this.intl = this.makeIntlInstance(locale);
  }
  public getDefaultLanguage() {
    return 'ja';
  }
}
