// Types for compiled templates
declare module "ember-data-firestore/templates/*" {
  import { TemplateFactory } from "htmlbars-inline-precompile";
  const tmpl: TemplateFactory;
  export default tmpl;
}
