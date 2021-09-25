import Nav from '../components/Nav';
import { CMS_URL } from '../constants/root';

const Layout = ({children, menu, global}) => {
  return (
    <div className="container flex flex-col justify-start p-4 mx-auto min-h-screen">
      <div className="mt-2">
        <a href="https://eurolife.github.io/strapi-frontend/">
          <img src={`${CMS_URL}${global.logo.url}`} alt={global.company_name} style={{ width: '150px'}} />
        </a>
        
      </div>
      <div className="mt-2">
        <Nav menu={menu} />
      </div>
      
      <div className="flex-grow">
        <main>
          {children}
        </main>
      </div>

      <div className="mt-8 text-gray-400">
        <footer>&copy; 2021 CPR</footer>
      </div>
      
    </div>
  )
}

export default Layout;