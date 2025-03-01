import './App.css'
import { useTranslation, Trans } from 'react-i18next'
import LanguageSelector from './components/language-selector';

function App() {

  const { t } = useTranslation();
  const { line1, line2 } = t('description', {
    test: 'xyz'
  });

  return (
    <>
    <LanguageSelector />
      <h1>{t('greeting')}</h1>
      <h2>{line1}</h2>
      <Trans 
        i18nKey={line2}
        values = {{
          test: 'xyz'
        }}
        components = {{1: <em />}}
      />
    </>
  )
}

export default App
