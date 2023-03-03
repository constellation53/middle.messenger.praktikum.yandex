import Handlebars, { HelperOptions } from "handlebars";

Handlebars.registerHelper('is', (arg1: unknown, arg2: unknown, options: HelperOptions)  => {
  return (arg1 === arg2) ? options.fn(this) : options.inverse(this);
});
