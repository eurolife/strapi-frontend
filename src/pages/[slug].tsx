import { fetchAPI } from '../lib/api';
import Nav from '../components/Nav';
import Layout from '../layouts';
import { CMS_URL } from '../constants/root';

const Page = ({ menu, page, global }) => {
  const renderComponents = (item) => {
    if(item.__component === 'widgets.image-and-text') {
      return (
        <div className="flex">
          <div className={`${item.Image_side === 'right'? 'order-2' : 'order-1'}`}>
            <img src={`${CMS_URL}${item.Image.url}`} alt="" style={{width: '250px'}} />
          </div>
          
          <div className={`ml-4 ${item.Image_side === 'right'? 'order-1' : 'order-2'}`}>
            {item.Content}
          </div>
        </div>
      )
    }
    else if(item.__component === 'widgets.columned-text') {
      return (
        <div className="flex">
          <div className="pr-4">{item.Firstcol}</div>
          <div>{item.Secondcol}</div>
        </div>
      )
    }
    return ('');
  }
  
  return (
    <Layout menu={menu} global={global}>
      <h1 className="font-sans-serif text-3xl my-4">{page.Title}</h1>
          <div>{page.Content}</div>

        <div className="mt-4">
         {page.Extra.length ? page.Extra.map((item) => 
            
            (
              <div key={item.id}>
                {renderComponents(item)}
              </div>
              
              )
          ): null }
          
        </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const pages = await fetchAPI('/pages');

  return {
    paths: pages.map(page => ({
      params: {
        slug: page.slug
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  // Run API calls in parallel
  const [menu, page, global] = await Promise.all([
    fetchAPI('/menu'),
    fetchAPI(`/pages?slug=${params.slug}`),
    fetchAPI('/global-settings')
  ]);

  return {
    props: { page: page[0], menu, global },
    revalidate: 1
  };
}

export default Page;