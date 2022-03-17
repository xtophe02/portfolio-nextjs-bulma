import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const dataDir = (folder) => path.join(process.cwd(), `/data/${folder}`);

export function getDataFiles(folder) {
  return fs.readdirSync(dataDir(folder));
}

export function getData(folder, postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(dataDir(folder), `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const postData = { slug: postSlug, ...data, content };
  return postData;
}

export function getAllData(folder) {
  const postFiles = getDataFiles(folder);
  const allPosts = postFiles.map((postFile) => getData(folder, postFile));
  const sortedPosts = allPosts.sort((pA, pB) => (pA.date > pB.date ? -1 : 1));
  return sortedPosts;
}

export function getFeaturedData(folder) {
  const allPosts = getAllData(folder);
  const featuredPosts = allPosts.filter((p) => p.isFeatured);

  return featuredPosts;
}
