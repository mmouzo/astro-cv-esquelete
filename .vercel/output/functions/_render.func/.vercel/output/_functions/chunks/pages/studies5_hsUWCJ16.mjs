/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Formacion Avanzada en Cuidados Paliativos","location":"Buenos Aires, Argentina","url":"http://foeberoz.gm/kuj","institute":"Universidad del Salvador, Instituto Pallium","date":2017,"tags":["Paliativos","Rehabilitacion"]};
				const file = "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/porfolio-astro/astro-cv-esquelete/src/pages/studies/studies5.md";
				const url = "/studies/studies5";
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
