// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

const BlogsPage = () => {
  return (
    <div>
      <h1>Blogs Page</h1>
    </div>
  );
};
export default BlogsPage;
