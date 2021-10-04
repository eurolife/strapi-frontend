import { fetchAPI } from '../../lib/api';
import Layout from '../../layouts';
import Link from 'next/link';
import { CMS_URL } from '../../constants/root';

const BlogMain = ({articles, menu, global}) => {
  return (
    <Layout menu={menu} global={global}>
      <h1 className="font-sans-serif text-3xl my-4">Blog</h1>
      <ul className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
      {articles.map((post) => (
        <li key={post.id} className="mt-4">
          <Link href={`/blog/${post.slug}`}>
            <a className="text-lg font-bold hover:text-gray-500 transition duration-300">
            <div className="w-full" style={{height: '150px', background: `url(${CMS_URL}${post.Image.url}) no-repeat`, backgroundSize: 'cover'}} />
              <h2 className="text-center">{post.title}</h2>
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