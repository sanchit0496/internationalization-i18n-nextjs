import './App.css'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './components/language-selector';

function App() {

  const { t } = useTranslation();

  return (
    <>
    <LanguageSelector />
      <h1>{t('greeting')}</h1>
    </>
  )
}

export default App
