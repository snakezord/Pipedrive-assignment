import GlobalStyle from '../../styles/global.styles'

import Header from '../header'
import Persons from '../persons-collection'

const App = () => {  

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Persons />
    </div>
  );
}

export default App;
