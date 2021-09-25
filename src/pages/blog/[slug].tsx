import { fetchAPI } from '../../lib/api';
import Nav from '../../components/Nav';
import Layout from '../../layouts';
import Link from 'next/link';
import { CMS_URL } from '../../constants/root';

const BlogPage = ({article, menu, global}) => {
  return (
    <Layout menu={menu} global={global}>
      
      <div className="flex justify-between items-center my-4">
        <h1 className="font-sans-serif text-3xl">{article.title}</h1>
        <Link href="/blog"><a className="text-sm hover:text-green-500 transition duration-300">&laquo; Back to Blog main</a></Link>
      </div>
      <div><img src={`${CMS_URL}${article.Image.url}`} alt="" /></div>
      <div>{article.content}</div>
    </Layout>
  )
}
export async function getStaticPaths() {
  const articles = await fetchAPI('/blogs');

  return {
    paths: articles.map(article => ({
      params: {
        slug: article.slug
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const [menu, article, global] = await Promise.all([
    fetchAPI('/menu'),
    fetchAPI(`/blogs?slug=${params.slug}`),
    fetchAPI('/global-settings')
  ]);

  return {
    props: { article: article[0], menu, global },
    revalidate: 1
  };
}
export default BlogPage;