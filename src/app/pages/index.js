import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Welcome page</h1>
      <p>blabla hjhkljk blabla.</p>
      <Link href="/register">
        <a>Get Started</a>
      </Link>
    </div>
  );
};

export default Home;
