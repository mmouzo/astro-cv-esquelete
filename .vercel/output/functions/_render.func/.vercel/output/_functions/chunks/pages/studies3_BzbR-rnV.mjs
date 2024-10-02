/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"Programador Full Stack","location":"Buenos Aires, Argentina","url":"http://foeberoz.gm/kuj","institute":"Universidad Tecnologica Nacional","date":2020,"tags":["Frontend","Backend"]};
				const file = "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/porfolio-astro/astro-cv-esquelete/src/pages/studies/studies3.md";
				const url = "/studies/studies3";
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
