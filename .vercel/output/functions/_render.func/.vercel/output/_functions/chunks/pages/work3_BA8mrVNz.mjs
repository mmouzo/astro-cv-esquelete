/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<ul>\n<li>Trabaje durante diez años en rehabilitacion deportiva llegando a trabajar con equipos de alto rendimiento como pampas XV o pilotos de Dakar como Pablu Busin</li>\n</ul>";

				const frontmatter = {"title":"Kinesiologo Deportologo","date":"2004 - 2012","url":"","location":"Neuquen, Argentina","org":"CIKAF - ASKLEPION","tags":["Rehabilitacion Deportiva","Alto Rendimiento","Dakkar","Pampas XV"]};
				const file = "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/porfolio-astro/astro-cv-esquelete/src/pages/works/work3.md";
				const url = "/works/work3";
				function rawContent() {
					return "\r\n- Trabaje durante diez años en rehabilitacion deportiva llegando a trabajar con equipos de alto rendimiento como pampas XV o pilotos de Dakar como Pablu Busin\r\n";
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
