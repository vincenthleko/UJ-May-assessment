import handlebars from 'vite-plugin-handlebars';
import data from './data.json';

export default {
  base : '/responsive_cv/',
  plugins: [
    handlebars({
      context: data // replace the curly brackets with data.json
    }),
  ],
};
