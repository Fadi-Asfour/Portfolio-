// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const Projects = () => {
  return (
    <div>
      <h1>Projects Page</h1>
    </div>
  );
};
export default Projects;
