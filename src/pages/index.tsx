import { fetchAPI } from '../lib/api';
import Layout from '../layouts';
import { CMS_URL } from '../constants/root';

const Home = ({ articles, home, menu, global }) => {
  return (
    <Layout menu={menu} global={global}>
      <h1 className="font-sans-serif text-3xl my-4">{home.Title}</h1>
      <div><img src={`${CMS_URL}${home.Hero?.url}`} alt="" /></div>
      <div>{home.description}</div>
      {articles.map((blog) => (
        <div key={blog.id}>{blog.title}</div>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, home, menu, global] = await Promise.all([
    fetchAPI('/blogs'),
    fetchAPI('/home'),
    fetchAPI('/menu'),
    fetchAPI('/global-settings')
  ]);

  return {
    props: { articles, home, menu, global },
    revalidate: 1
  };
}

export default Home;