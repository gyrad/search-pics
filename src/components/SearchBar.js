import React, {Component} from 'react';

class SearchBar extends Component {
    state = {
        term: ''
    };

    onFormSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field ui fluid icon input massive" style={{marginBottom: '1rem'}}>
                        <input 
                            type="text" 
                            placeholder="Search image..." 
                            value={this.state.term} 
                            onChange={e => this.setState({term: e.target.value})}
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
        );
    }
}

export default SearchBar;