import React, { useState } from 'react';
import { NextPage } from 'next';

interface InitialProps {}

interface Props extends InitialProps {}

interface State {
  notificationVisible: boolean;
}

const IndexPage: NextPage<Props, InitialProps> = props => {
  const [state, setState] = useState<State>({
    notificationVisible: true
  });

  const handleClick = () => {
    setState({
      notificationVisible: false
    });
  };

  return (
    <div>
      {state.notificationVisible && (
        <div
          onClick={handleClick}
          style={{
            background: 'peachpuff',
            fontWeight: 'bold',
            textAlign: 'center',
            padding: '10px'
          }}
        >
          This website is using cookies. <button>I agree</button>
        </div>
      )}
    </div>
  );
};

export default IndexPage;
