import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

interface InitialProps {
  greeting: string;
}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = props => {
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    console.log('useEffect callback called');
    const listener = (e: MouseEvent) => {
      console.log('mousedown', e.offsetX, e.offsetY);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      console.log('useEffect CLEANUP function');
      document.removeEventListener('mousedown', listener);
    };
  }, [likes]);
  return (
    <div>
      {props.greeting}
      <p>
        <Link href={{ pathname: '/about' }}>
          <a>About</a>
        </Link>
      </p>
      <p>
        Likes: {likes} <button onClick={() => setLikes(likes + 1)}>Like</button>
      </p>
    </div>
  );
};

IndexPage.getInitialProps = async () => ({
  greeting: 'Hello World!'
});

export default IndexPage;
