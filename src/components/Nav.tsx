import Link from 'next/link';

const Nav = ({ menu }) => {
  const renderLink = (item) => {
    if(item.new_window) {
      return (
        <a href={`/${item.url?.length ? item.url : item.page.slug}`} target="_blank" rel="noopener noreferrer">{item.title}</a>
      )
    }
    return (
      <Link href={`/${item.url?.length ? item.url : item.page.slug}`}>
        <a>
          {item.title}
        </a>
      </Link>
    )
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
    </nav>
  )
}

export default Nav;