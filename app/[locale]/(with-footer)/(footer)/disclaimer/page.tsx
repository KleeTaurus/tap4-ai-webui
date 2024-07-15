// import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('FooterNavigation.termsConditions');

  return (
    <div className='prose mx-auto p-6 text-gray-200 prose-headings:text-gray-200'>
      <h1>{t('1-h1')}</h1>
      <p>{t('1-p-1')}</p>
      <p>{t('1-p-2')}</p>
      <p>{t('1-p-3')}</p>
      <p>{t('1-p-4')}</p>

      <h2>{t('2-h2')}</h2>
      <p>{t('2-p')}</p>

      <h2>{t('3-h2')}</h2>
      <p>{t('3-p-1')}</p>
      <h3>{t('3-h3-1')}</h3>
      <ol>
        <li>{t('3-li-1')}</li>
        <li>{t('3-li-2')}</li>
        <li>{t('3-li-3')}</li>
        <li>{t('3-li-4')}</li>
        <li>{t('3-li-5')}</li>
        <li>{t('3-li-6')}</li>
        <li>{t('3-li-7')}</li>
        <li>{t('3-li-8')}</li>
        <li>{t('3-li-9')}</li>
        <li>{t('3-li-10')}</li>
        <li>{t('3-li-11')}</li>
        <li>{t('3-li-12')}</li>
      </ol>
      <h3>{t('3-h3-2')}</h3>
      <ol>
        <li>{t('3-li-101')}</li>
        <li>{t('3-li-102')}</li>
        <li>{t('3-li-103')}</li>
        <li>{t('3-li-104')}</li>
        <li>{t('3-li-105')}</li>
        <li>{t('3-li-106')}</li>
        <li>{t('3-li-107')}</li>
        <li>{t('3-li-108')}</li>
        <li>{t('3-li-109')}</li>
        <li>{t('3-li-110')}</li>
      </ol>
      <h3>{t('3-h3-3')}</h3>

      <h2>{t('4-h2')}</h2>
      <p>{t('4-p-1')}</p>
      <p>{t('4-p-2')}</p>
      <p>{t('4-p-3')}</p>

      <h2>{t('5-h2')}</h2>
      <p>{t('5-p')}</p>

      <h2>{t('6-h2')}</h2>
      <p>{t('6-p')}</p>

      <h2>{t('7-h2')}</h2>
      <p>{t('7-p-1')}</p>
      <p>{t('7-p-2')}</p>
      <p>{t('7-p-3')}</p>

      <h2>{t('8-h2')}</h2>
      <p>{t('8-p')}</p>
      <ol>
        <li>{t('8-li-1')}</li>
        <li>{t('8-li-2')}</li>
        <li>{t('8-li-3')}</li>
        <li>{t('8-li-4')}</li>
        <li>{t('8-li-5')}</li>
      </ol>

      <h2>{t('9-h2')}</h2>
      <p>{t('9-p-1')}</p>
      <p>{t('9-p-2')}</p>

      <h2>{t('10-h2')}</h2>
      <p>{t('10-p-1')}</p>
      <p>{t('10-p-2')}</p>

      <h2>{t('11-h2')}</h2>
      <p>{t('11-p')}</p>
    </div>
  );
}
