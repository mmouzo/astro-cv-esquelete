/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Licenciado en Kinesiologia y Fisioterapia","location":"Cordoba, Argentina","url":"http://foeberoz.gm/kuj","institute":"Universidad Nacional de Cordoba","date":"1970-1975","tags":["Kinesiologia","Fisioterapia"]};
				const file = "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/porfolio-astro/astro-cv-esquelete/src/pages/studies/studie1.md";
				const url = "/studies/studie1";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
