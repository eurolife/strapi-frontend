import { fetchAPI } from '../../lib/api';
import Layout from '../../layouts';
import Link from 'next/link';

const BlogMain = ({articles, menu, global}) => {
  return (
    <Layout menu={menu} global={global}>
      <h1 className="font-sans-serif text-3xl my-4">Blog</h1>
      <ul>
      {articles.map((post) => (
        <li key={post.id} className="mt-4">
          <Link href={`/blog/${post.slug}`}>
            <a className="text-lg text-green-600 hover:text-black transition duration-300">
              {post.title}
            </a>
          </Link>
        </li>
      ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, menu, global] = await Promise.all([
    fetchAPI('/blogs'),
    fetchAPI('/menu'),
    fetchAPI('/global-settings')
  ]);

  return {
    props: { articles, menu, global },
    revalidate: 1
  };
}

export default BlogMain;