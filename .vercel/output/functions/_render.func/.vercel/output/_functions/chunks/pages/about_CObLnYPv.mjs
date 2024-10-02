/* empty css                          */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../astro_BWF5RzfA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Soy kinesiólogo con más de 20 años de experiencia en internación domiciliaria, donde he desempeñado diversos roles, desde la asistencia directa hasta la coordinación de equipos de trabajo. A lo largo de mi carrera, me he especializado en cuidados paliativos, combinando mi pasión por la salud con una formación sólida en programación full stack. Con conocimientos en tecnologías como HTML, CSS, JavaScript, Java Spring Boot, React, Angular, y Python, estoy enfocado en desarrollar soluciones innovadoras que integren la salud y la tecnología, buscando mejorar la calidad de los servicios en el ámbito de la atención domiciliaria.</p>";

				const frontmatter = {"title":"about","name":"Ramiro N. Cosa","designation":"Kinesiologo - Desarrollador - Asesor","location":"Neuquen, Arg 8300","pronouns":"he/him/el","website":"www.ramirocosa.com"};
				const file = "C:/Users/ramir/OneDrive/Documentos/Programacion/desarrollo/porfolio-astro/astro-cv-esquelete/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\r\nSoy kinesiólogo con más de 20 años de experiencia en internación domiciliaria, donde he desempeñado diversos roles, desde la asistencia directa hasta la coordinación de equipos de trabajo. A lo largo de mi carrera, me he especializado en cuidados paliativos, combinando mi pasión por la salud con una formación sólida en programación full stack. Con conocimientos en tecnologías como HTML, CSS, JavaScript, Java Spring Boot, React, Angular, y Python, estoy enfocado en desarrollar soluciones innovadoras que integren la salud y la tecnología, buscando mejorar la calidad de los servicios en el ámbito de la atención domiciliaria.\r\n";
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
