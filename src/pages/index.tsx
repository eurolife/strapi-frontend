import { fetchAPI } from '../lib/api';

const Home = ({ blogs, home }) => {
  return (
    <div className="container flex items-center p-4 mx-auto min-h-screen justify-center">
      <main>
        <h1 className="font-mono text-xl code">Website</h1>
        {blogs.map((blog) => (
          <div>{blog.title}</div>
        ))}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [blogs, home] = await Promise.all([
    fetchAPI('/blogs'),
    fetchAPI('/home')
  ]);

  return {
    props: { blogs, home },
    revalidate: 1
  };
}

export default Home;