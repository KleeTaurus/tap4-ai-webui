// import { HTMLAttributeAnchorTarget } from 'react';
// import Link from 'next/link';
import { useTranslations } from 'next-intl';

// import { CONTACT_US_EMAIL } from '@/lib/env';

/*
function InfoLink({
  href,
  title,
  target,
  type,
}: {
  href: string;
  title: string;
  target?: HTMLAttributeAnchorTarget;
  type?: string;
}) {
  return (
    <Link
      href={href}
      title={title}
      className='whitespace-nowrap text-xs hover:opacity-70 lg:text-sm'
      target={target}
      type={type}
    >
      {title}
    </Link>
  );
}
*/

export default function Footer() {
  const t = useTranslations('Footer');

  /*
  const SupportLinks = [
    {
      title: t('dedao ai tools'),
      href: 'https://aitools.dedao.cn',
    },
    {
      title: t('tattoo'),
      href: 'https://tattooai.design',
    },
  ];
  */

  /*
  const INFO_LIST = [
    {
      title: t('privacy'),
      href: '/privacy-policy',
    },
    {
      title: t('termsConditions'),
      href: '/terms-of-service',
    },
  ];
  */

  return (
    <footer className='w-full bg-[#15141A]'>
      <div className='mx-auto flex min-h-[251px] max-w-pc flex-col items-center justify-between p-10 pb-5 lg:h-[180px] lg:flex-row lg:px-0 lg:pb-10'>
        <div className='flex flex-col items-center lg:items-stretch'>
          <h1 className='text-xl font-bold text-white lg:h-8 lg:text-[32px]'>{t('title')}</h1>
          <h2 className='text-xs'>{t('subTitle')}</h2>
        </div>
      </div>
    </footer>
  );
}
