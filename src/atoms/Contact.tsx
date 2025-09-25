import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import IntlMessage from '~/intl';
import { top } from '~/intl/messages';

const intl = new IntlMessage();

const useStyles = makeStyles(() => ({
  body: { background: 'linear-gradient(#DDDDDD, #EEEEEE)' },
  inner: { padding: '10vw 0vw' },
  column: { flexBasis: '50%', flexShrink: 0 },
}));

const FC: React.FC = () => {
  const classes = useStyles({});
  const { primary, secondary } = top.contact;

  return (
    <Container className={classes.body} maxWidth={false}>
      <Container className={classes.inner} maxWidth="md">
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          プライバシーポリシー
        </Typography>
        <Typography
          component="h3"
          variant="h3"
          color="textPrimary"
          gutterBottom
        >
          個人情報保護方針
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          当社では、当社グループにて提供する企業向けX-Tech(クロステック)プラットフォームサービスを展開する企業として、個人情報を適切に取り扱うために以下の方針を定め、これを順守するものとします。
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          1. 個人情報の取得、利用及び提供について
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          当社の全ての事業で取り扱う個人情報及び従業員の個人情報については、適切な取得、利用及び提供を行い、特定した利用目的の達成に必要な範囲を超えて個人情報を取り扱うことはありません。また、目的外利用を行わないために適切な管理措置を講じます。例外的に利用目的を超えて個人情報の取り扱いを行う場合には、あらかじめご本人の同意を得ます。
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          2. 個人情報に関する法令、国が定める指針及びその他の規範について
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          当社では、個人情報保護法その他の個人情報に関する法令、個人情報保護委員会の定めるガイドラインなど及び本個人情報保護方針を遵守し、個人情報を適法かつ適正に取り扱います。
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          3. 個人情報の取得
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          当社は、お客様の個人情報を適正かつ適法な手段により取得します。
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          4. 個人情報の管理について
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          color="textPrimary"
          gutterBottom
        >
          (1) 安全管理措置
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          個人情報への不正アクセスや、個人情報の漏えい、紛失、破壊、改ざんなどに対して、合理的な防止並びに是正措置を行います。なお、個人情報の保護に関する教育を従業者、委託先に徹底いたし、必要かつ適切な措置・監督を行います。
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          color="textPrimary"
          gutterBottom
        >
          (2) データ内容の正確性の確保
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          当社は、お客様の個人データにつき、利用目的の達成に必要な範囲内において、正確かつ最新の内容に保つとともに、利用する必要がなくなったときは当該個人データを消去するよう努めます。
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          5. 個人情報に関する苦情及び相談について
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          個人情報に関する苦情及び相談には、速やかに対処します。当社の個人情報に関するお問い合わせは、下記相談窓口までお願いいたします。
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          6. 個人情報保護の取り組み（個人情報保護マネジメントシステム）について
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          個人情報の保護を適切に行うため、継続的にその取り組みを見直し、改善します。
          なお改善におきましては、法令、個人情報保護委員会が定める指針、その他の規範及び
          JIS Q 15001 に準拠いたします。
        </Typography>
        <hr />
        <Typography
          component="h3"
          variant="h3"
          color="textPrimary"
          gutterBottom
        >
          個人情報の取り扱いについて
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          当社では当社が保有する個人情報については、当社の「個人情報保護方針」に従って個人情報保護の取り組みをおこなうとともに、個人情報の取扱いについては次の事項を遵守してまいります。
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          1. 個人情報の定義について
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          個人情報とは、お客様に関する情報であって、当該情報を構成する氏名、住所、電話番号、メールアドレス、所属企業名その他の記述などにより当該お客様を識別できるもの、及び個人識別符号が含まれるものをいいます。また、その情報のみでは識別できない場合でも、他の情報と容易に照合することができ、結果的にお客様個人を識別できるものも個人情報に含まれます。
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          2. 利用目的について
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          当社は個人情報を取得した場合、次の目的の範囲内またはその他の取得状況から明らかである利用目的の範囲内に限り個人情報を利用します。お客様の同意がある場合または法令で認められている場合を除き、他の目的で利用しません。
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          color="textPrimary"
          gutterBottom
        >
          1) 保有個人データの利用目的
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          color="textPrimary"
          gutterBottom
        >
          (1) 直接書面で取得する個人情報の利用目的
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          color="textPrimary"
          gutterBottom
        >
          ①お客様個人情報
        </Typography>
        <ul>
          <li>
            問合せに対する当社からの返信・送付、必要な管理及びサービスの提供のため
          </li>
          <li>
            セミナーなどのイベントのご案内、商品・サービスの情報を記載したダイレクトメール（電子メールを含む）の送付及び製品に関するその他の情報提供のため
          </li>
          <li>保守・サポートのご提供のため</li>
        </ul>
        <Typography
          component="h6"
          variant="h6"
          color="textPrimary"
          gutterBottom
        >
          ②従業者個人情報
        </Typography>
        <ul>
          <li>人事労務管理のため</li>
          <li>労働者派遣事業等、職務遂行上の契約履行及び業務連絡のため</li>
        </ul>
        <Typography
          component="h6"
          variant="h6"
          color="textPrimary"
          gutterBottom
        >
          ③採用応募者個人情報
        </Typography>
        <ul>
          <li>採用に関わる選考審査のため</li>
        </ul>
        <Typography
          component="h6"
          variant="h6"
          color="textPrimary"
          gutterBottom
        >
          ④業務により取得するビジネスパートナー様個人情報
        </Typography>
        <ul>
          <li>お取引における契約履行のため</li>
          <li>ビジネスパートナー様情報確認のため</li>
          <li>お客さま満足度調査等アンケートのため</li>
        </ul>
        <Typography
          component="h6"
          variant="h6"
          color="textPrimary"
          gutterBottom
        >
          (2)直接書面以外で取得する個人情報の利用目的
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          color="textPrimary"
          gutterBottom
        >
          ①お客様サポート窓口への電話などにより頂いたお客様個人情報
        </Typography>
        <ul>
          <li>お客様サポート窓口へのお申し出事項の対応</li>
        </ul>
        <Typography
          component="h5"
          variant="h5"
          color="textPrimary"
          gutterBottom
        >
          2) 受託業務により取得するお客様個人情報の利用目的
        </Typography>
        <ul>
          <li>システム開発の受託で取得する業務遂行のため</li>
        </ul>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          3. 個人データの委託
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          当社は、業務を円滑に進め、お客様により良いサービスを提供するため、お客様の個人データの取扱いを協力会社に委託する場合があります。この場合、当社は、個人情報を適切に保護できる管理体制を敷き実行していることを条件として委託先を厳選したうえで、契約などにおいて個人情報の適正管理・機密保持などによりお客様の個人情報の漏えい防止に必要な事項を取り決め、適切な管理を実施させます。
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          4. 個人データの第三者提供
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          当社は、お客様本人の事前同意がある場合を除き、お客様の個人データを第三者（前項の委託先を除きます）に提供しません。ただし、以下の場合には、お客様の同意なく個人情報を提供することがあります。
        </Typography>
        <ol>
          <li>法令に基づく場合</li>
          <li>
            人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
          </li>
          <li>
            公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
          </li>
          <li>
            国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることによって当該事務の遂行に支障を及ぼすおそれがあるとき
          </li>
        </ol>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          5. 統計処理されたデータの利用
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          当社は、提供を受けた個人情報をもとに、個人を特定できないよう加工した統計データを作成することがあります。個人を特定できない統計データについては、法令に従い、当社は何ら制限なく利用できるものとします。
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          6. 保有個人データに関する受付について
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          1)
          お客様ご本人または代理人から保有個人データの開示の請求があった場合には、当社所定の適切な本人確認の手続きを経たうえで、請求時に頂いた情報が当社にて保有する保有個人データと該当することが当社において確認出来次第、適宜の方法により、当該保有個人データをお客様ご本人または代理人が知り得る状態に置きます。ただし、以下の場合を除きます。
        </Typography>
        <ol>
          <li>当社の業務の適正な実施に著しい支障を及ぼすおそれがある場合</li>
          <li>法令に違反することとなる場合</li>
        </ol>
        <Typography component="p" color="textSecondary" gutterBottom>
          2)
          お客様ご本人又は代理人から保有個人データの訂正、追加、削除、利用の停止、又は消去の請求があった場合、当社所定の適正な調査（ご本人確認を含む）を遅滞なく行い、その結果に基づき、合理的な範囲内で、適正な対応をいたします。
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          7. 保有個人データの安全管理のために講じた措置について
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          当社が保有個人データの安全管理のために講じた措置については後述の「情報セキュリティ基本方針」をご覧ください。
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          8. お問い合わせについて
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          当社の個人情報の取扱い及び保有個人データに関するお問い合わせは、ページ下端の
          Contact よりお願いいたします。
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          color="textPrimary"
          gutterBottom
        >
          9. 改正について
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          当社では、本「個人情報の取扱いについて」の内容について適宜見直しを行い、改善していきます。また、本「個人情報の取扱いについて」の内容を変更した場合は、直ちに掲載し公表いたします。
        </Typography>
        <hr />
        <Typography
          component="h3"
          variant="h3"
          color="textPrimary"
          gutterBottom
        >
          情報セキュリティ基本方針
        </Typography>
        <Typography component="p" color="textSecondary" gutterBottom>
          当社は、企業向けXTech(クロステック)プラットフォームサービスを提供していく中で、情報セキュリティを確保することは必須であると考えており、当社グループに所属する全ての従業員が情報セキュリティに対する意識を高く持ち、行動するための指針として、ここに情報セキュリティ基本方針を示し、遵守するものとします。
        </Typography>
        <ul>
          <li>
            情報セキュリティの維持、改善を継続的に行なうための体制を構築する。
          </li>
          <li>
            情報セキュリティを確保するための規程を策定し、これを遵守する。
          </li>
          <li>
            情報資産を情報セキュリティ上の脅威から保護するため、適正なリスクアセスメントを行う。特に、顧客情報や営業情報、技術情報、個人情報などを重要な情報と考え、これらの情報を漏えい、紛失、破壊及び改ざんなどのリスクから保護するための適切なセキュリティ対策を行う。
          </li>
          <li>
            定期的に情報セキュリティマネジメントシステムの見直しを行い、これを維持し、改善する。
          </li>
          <li>
            従業員に情報セキュリティに関する適切な教育を行い、意識の向上を図る。
          </li>
          <li>
            著作権などの知的財産権や個人情報の保護及び自社が展開する事業に関する関連法規、顧客や取引先及び従業員などとの契約上の要求事項を遵守する。
          </li>
          <li>
            当基本方針及び情報セキュリティマネジメントシステムに関する規程の違反者に対し、就業規則に基づく罰則を適用する。
          </li>
        </ul>
      </Container>
      <Container className={classes.inner} maxWidth="md">
        <Typography
          component="h2"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          {intl.format(primary)}
        </Typography>
        <Typography align="center" color="textPrimary" gutterBottom>
          <a
            href="https://www.facebook.com/hidetaka.izawa"
            rel="noopener noreferrer"
            target="_blank"
          >
            {intl.format(secondary)}
          </a>
        </Typography>
      </Container>
    </Container>
  );
};
FC.displayName = 'Contact';

export default FC;
