import { fetchAPI } from '../lib/api';
import Layout from '../layouts';
import { CMS_URL } from '../constants/root';
import Markdown from 'markdown-to-jsx';

const Home = ({ articles, home, menu, global }) => {
  
  return (
    <Layout menu={menu} global={global}>
      <h1 className="font-sans-serif text-3xl my-4">{home.Title}</h1>
      <div><img src={`${CMS_URL}${home.Hero?.url}`} alt="Hero image" style={{width: '100%'}} /></div>
      <div className="mt-4"><Markdown>{home.description}</Markdown></div>
      
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