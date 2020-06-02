import Link from 'next/link';

const TestPage = () => {
  return <>
    <p>
      <a id="anchor">The anchor element.</a><br/>
      You should not come back here.
    </p>

    {[...Array(20)].map(() => <p>↓</p>)}

    <p>
      <Link href="/another">
        <a>Open another page</a>
      </Link>
    </p>
  </>;
};
export default TestPage;
