import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
    @import url('https://fonts.googleapis.com/css2?family=Darker+Grotesque&family=Roboto+Mono:wght@200&family=Roboto+Slab:wght@100;300&display=swap');
    `}
  />
);

export default Fonts;
