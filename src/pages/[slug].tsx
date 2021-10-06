import { fetchAPI, getPageData } from '../lib/api';
import Nav from '../components/Nav';
import Layout from '../layouts';
import { CMS_URL } from '../constants/root';
import Markdown from "markdown-to-jsx";

const Page = ({ menu, page, preview, global }) => {
  const renderComponents = (item) => {
    if(item.__component === 'widgets.image-and-text') {
      return (
        <div className="flex items-center">
          <div className={`flex-shrink-0 ${item.Image_side === 'right'? 'order-2' : 'order-1'}`}>
            <img src={`${CMS_URL}${item.Image.url}`} alt="" style={{width: '180px'}} />
          </div>
          
          <div className={`ml-4 ${item.Image_side === 'right'? 'order-1' : 'order-2'}`}>
            <Markdown>{item.Content}</Markdown>
          </div>
        </div>
      )
    }
    else if(item.__component === 'widgets.columned-text') {
      return (
        <div className="flex">
          <div className="pr-4">
            <Markdown>{item.Firstcol}</Markdown>
          </div>
          <div>
            <Markdown>{item.Secondcol}</Markdown>
          </div>
        </div>
      )
    }
    return ('');
  }
  
  return (
    <Layout menu={menu} global={global}>
      {preview ? (
        <div className="relative bg-indigo-600">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-white">
                <span>Preview mode is on,</span>
              <span className="block sm:ml-2 sm:inline-block">
                <a
                  href="/api/exit-preview"
                  className="underline hover:text-cyan transition-colors"
                  >
                    turn off
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : null}
      <h1 className="font-sans-serif text-3xl my-4">{page.Title}</h1>
          <div>
            <Markdown>{page.Content}</Markdown>
          </div>

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

// export async function getStaticProps({ params }) {
//   // Run API calls in parallel
//   const [menu, page, global] = await Promise.all([
//     fetchAPI('/menu'),
//     fetchAPI(`/pages?slug=${params.slug}`),
//     fetchAPI('/global-settings')
//   ]);

//   return {
//     props: { page: page[0], menu, global },
//     revalidate: 1
//   };
// }
export async function getStaticProps({ params, preview = null }) {
  const page = await getPageData(params.slug, preview);

  const [menu, global] = await Promise.all([
    fetchAPI('/menu'),
    fetchAPI('/global-settings')
  ]);
 
  return {
    props: { menu, page, preview, global },
    revalidate: 1,
  };
 } 

export default Page;