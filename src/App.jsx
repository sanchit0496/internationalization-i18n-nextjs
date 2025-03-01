import './App.css'
import { useTranslation } from 'react-i18next'
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
      <h2>{line2}</h2>
    </>
  )
}

export default App
