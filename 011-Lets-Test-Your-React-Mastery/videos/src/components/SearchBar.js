import React from 'react';

class SearchBar extends React.Component {
    state = {term:  ' '};

    onInputChange=(event)=>{
        this.setState({term: event.target.value})
    };

    onFormSubmit=(event)=>{
        event.preventDefault();

        //TODO:Make sure we callback from parent
    }

    render() {
        return(
        <div className="search-bar ui segment">
              <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                <label>Video Search</label>    
                <input class="form-control" 
                type="text" 
                placeholder="Search" 
                aria-label="Search"
                value={this.state.term}
                onChange={this.onInputChange}
                />
                </div>
              </form> 
        </div>) ;
    }
}

export default SearchBar;