import React from 'react';

interface Props {
  pageTitle: string;
}

const Curriculo = ({ pageTitle }: Props) => {
  React.useEffect(() => {
    document.title = 'Rui Soares | ' + (pageTitle ? pageTitle : 'Home');
  }, [pageTitle]);

  return <iframe src="RuiSoaresCV26.pdf"></iframe>;
};

export default Curriculo;
