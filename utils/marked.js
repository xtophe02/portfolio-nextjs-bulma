import { marked } from "marked";
const renderer = new marked.Renderer();

renderer.image = function (href, title, text) {
  return `<Image src="/images/posts/${post.slug}/${href}" alt="${text}" layout="fill" />`;
};
renderer.strong = function (text) {
  return `<strong class="has-text-primary-dark">${text}</strong>`;
};
renderer.heading = function (text, level) {
  return `<h${level} class='has-text-light'>
  
   ${text}
 </h${level}>`;
};

marked.setOptions({
  renderer,
});

export const MarkedComponent = ({ content, className = "has-text-light" }) => (
  <div
    className={`content is-size-5 ${className}`}
    dangerouslySetInnerHTML={{
      __html: marked(content),
    }}
  />
);
