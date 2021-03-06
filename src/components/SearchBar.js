import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from "./storeProvider";

class SearchBar extends React.Component {
  state = {
    query: ''
  };

  doSearch = debounce(() => this.props.store.setSearchQuery(this.state.query), 400 );

  handleSearch = (e) => {
    this.setState({query: e.target.value}, () => { this.doSearch(); });
  };

  render() {
    return(
      <input
        type="search"
        value={this.state.query}
        onChange={this.handleSearch}
      />
    );
  }
}
// const SearchBar = () => {
//   const [query, setQuery] = useState('');
//
//   const doSearch = debounce(() => console.log(query), 300);
//
//   useEffect(() => doSearch(), [query]);
//
//   return (
//     <input
//       type="search"
//       value={query}
//       onChange={
//         e => setQuery(e.target.value)
//       }
//     />
//   );
// };

export default storeProvider()(SearchBar);
