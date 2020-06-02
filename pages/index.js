import Link from 'next/link';

const IndexPage = () => {
  return <>
    <p>
      <Link href="/test">
        <a>Open the test page without hash</a>
      </Link>
    </p>
    <p>
      <Link href="/test#anchor">
        <a>Open the test page with hash</a>
      </Link>
    </p>
  </>;
};
export default IndexPage;
