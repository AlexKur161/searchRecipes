import { boot } from "quasar/wrappers";
import { createI18n } from "vue-i18n";
import { languages } from "src/i18n";
import { defaultLanguages } from "src/i18n";

const messages = Object.assign(languages);
export default boot(({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: defaultLanguages,
    globalInjection: true,
    messages,
  });

  // Set i18n instance on app
  app.use(i18n);
});
