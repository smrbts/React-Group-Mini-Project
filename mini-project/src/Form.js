import React, {Component} from 'react';


class Form extends Component
{
    render()
    {
        return(
            <div>
                <form onSubmit={(e) => this.props.newGif(e)}>
                    <input type = "text" placeholder = "GIF Title"/>
                    <input type = "text" placeholder = "GIF Url"/>
                    <input type = "text" placeholder = "Creator Name"/>
                    <input type = "submit" value = "Add GIF"/>
                </form>
            </div>
        )
    }
}


export default Form;