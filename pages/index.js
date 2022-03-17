import Layout from "../components/layout";
import PostsSection from "../components/posts-section";
import ProjectsSection from "../components/projects-section";
import SkillsSection from "../components/skills-section";
import VideoSection from "../components/video-section";

import { getAllData, getFeaturedData } from "../utils/data-util";

export default function HomePage({ skills, posts, projects }) {
  return (
    <Layout>
      <section style={{ display: "flex", flexDirection: "column" }}>
        <VideoSection />
        <SkillsSection skills={skills} />
        <PostsSection posts={posts} />
        <ProjectsSection projects={projects} />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const skills = getAllData("skills");
  const posts = getFeaturedData("posts");
  const projects = getFeaturedData("projects");
  return {
    props: { skills, posts, projects }, // will be passed to the page component as props
  };
}
