import React from 'react';
import { connect } from 'react-redux';
import { changeLang } from '../../store/Aside/actions';
import { getLang } from '../../store/Aside/selectors';
import { getProfile } from '../../store/Page/selectors';

function LangPanel({
  lang, locale, setRussian, setEnglish,
}) {
  return (
    <section className="Section language" aria-label={locale.lang}>
      <div className="H H_level_2">{locale.lang}</div>
      <div className="Buttons primary">
        <span
          role="button"
          tabIndex="0"
          onClick={setRussian}
          onKeyDown={setRussian}
          className={`Buttons__Item LangSwitcher__Item_lang_ru ${lang === 'ru' ? 'checked' : ''}`}
        >
          Русский
        </span>
        <span
          role="button"
          tabIndex="0"
          onClick={setEnglish}
          onKeyDown={setEnglish}
          className={`Buttons__Item LangSwitcher__Item_lang_en ${lang === 'en' ? 'checked' : ''}`}
        >
          English
        </span>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  locale: getProfile(state).aside,
  lang: getLang(state),
});

const mapDispatchToProps = (dispatch) => ({
  setEnglish: () => dispatch(changeLang('en')),
  setRussian: () => dispatch(changeLang('ru')),
});

export default connect(mapStateToProps, mapDispatchToProps)(LangPanel);
