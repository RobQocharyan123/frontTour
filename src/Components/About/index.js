import { useTranslation } from 'react-i18next';
import {
  AboutButtonBlock,
  AboutGeneralBlock,
  AboutInfoBlock,
  AboutItemBlock,
  AboutTextBlock,
  AboutTitleBlock,
} from './styled.js';

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <AboutGeneralBlock>
      <AboutTitleBlock>{t('mainAbout.title')}</AboutTitleBlock>
      <AboutInfoBlock>
        <AboutItemBlock>
          <AboutButtonBlock>{t('mainAbout.whyWe')}</AboutButtonBlock>
          <AboutTextBlock>
            <p>{t('mainAbout.why1')}</p> <p>{t('mainAbout.why2')}</p>{' '}
            <p>{t('mainAbout.why3')}</p>
            <p> {t('mainAbout.why4')}</p>
          </AboutTextBlock>
        </AboutItemBlock>
        <AboutItemBlock>
          <AboutButtonBlock>{t('mainAbout.howOrder')}</AboutButtonBlock>
          <AboutTextBlock>
            <p>{t('mainAbout.how1')}</p> <p>{t('mainAbout.how2')}</p>{' '}
            <p>{t('mainAbout.how3')}</p>
            <p> {t('mainAbout.how4')}</p>
          </AboutTextBlock>
        </AboutItemBlock>
      </AboutInfoBlock>
    </AboutGeneralBlock>
  );
};

export default About;
