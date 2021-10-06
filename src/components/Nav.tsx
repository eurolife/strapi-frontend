import Link from 'next/link';

const Nav = ({ menu }) => {
  const renderLink = (item) => {
    
    const slug = item.page?.slug ? item.page?.slug : item.slug;
    if(item.new_window) {
      return (
        <a href={`/${item.url?.length ? item.url : slug}`} target="_blank" rel="noopener noreferrer">{item.Title}</a>
      )
    }
    return (
      <Link href={`/${item.url?.length ? item.url : slug}`}>
        <a>
          {item.Title}
        </a>
      </Link>
    )
  }

  const renderSubmenu = (item) => {
    if(item.subpages.length) {
      return (
        <ul className="flex">
          {item.subpages.map((item) => (
              <li key={item.id}>
                {console.log(item)}
                <Link href={`/${item.slug}`}>
                  <a className="font-normal text-gray-500">
                    {item.Title}
                  </a>
                </Link>
              </li>
          ))}
        </ul>
        
      )
    }
    return null;
  }

  return (
    <nav>
      <ul className="flex justify-end">
        {menu.item.map((item) => (
          <li key={item.id}>
            {renderLink(item)}
          </li>
        ))}
      </ul>
      
      {menu.item.map((item) => (
          renderSubmenu(item)
      ))}
      
    </nav>
  )
}

export default Nav;