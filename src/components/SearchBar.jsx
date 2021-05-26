import React from 'react';

class SearchBar extends React.Component {
    state={term:''};

    onFormSubmit=event=>{
        event.preventDefault();
        this.props.onRunSubmit(this.state.term);
    }

    render() { 
        return (
        <div className="ui segment">
            <div className="field">
                <form className="ui form" action="" onSubmit={this.onFormSubmit}>
                    <label htmlFor="">Image Search</label>
                    <input 
                    type="text" 
                    name="" 
                    id="" 
                    value={this.state.term}
                    onChange={(e)=>this.setState({term:e.target.value})} />
                </form>  
            </div>
        </div>
        );
    }
}
 
export default SearchBar;