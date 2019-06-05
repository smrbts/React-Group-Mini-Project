import React, {Component} from 'react';


class SearchForm extends Component
{
    
    render()
    {
        return(
            <div className={'ui focus input'}>
                <form>
                 <input onChange = {(e) => this.props.filteredGifs(e)} type="text" placeholder="Search.."/>
                </form>
            </div>
        )
    }
}


export default SearchForm;