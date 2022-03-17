import { marked } from "marked";
const renderer = new marked.Renderer();

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

export const MarkedComponent = ({
  content,
  className = "has-text-light",
  imageUrl = null,
}) => {
  if (imageUrl) {
    renderer.image = function (href, title, text) {
      console.log(title);
      return `<Image src="/images/posts/${imageUrl}/${href}" alt="${text}" layout="fill" />`;
    };
  }

  return (
    <div
      className={`content is-size-5 ${className}`}
      dangerouslySetInnerHTML={{
        __html: marked(content),
      }}
    />
  );
};
