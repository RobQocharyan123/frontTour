import './book.css';
import { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Book = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const HTTP = 'http://localhost:8020/chat';
  const { t, i18n } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${HTTP}`, { prompt })
      .then((res) => setResponse(res.data))
      .catch((error) => console.log(error));
    setPrompt('');
  };

  const handlePrompt = (e) => {
    setPrompt(e.target.value);
  };
  return (
    <div className="book">
      <h1>{t('bookComponent.bigTitle')}</h1>

      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="">{t('bookComponent.askQuestion')}</label>
          <textarea
            className="shadow-sm"
            placeholder={t('bookComponent.enterText')}
            value={prompt}
            onChange={handlePrompt}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
        </div>
      </form>

      <div className="question">
        <p className="text-light">
          {response ? response : t('bookComponent.askMe')}
        </p>
      </div>
    </div>
  );
};
export default Book;
