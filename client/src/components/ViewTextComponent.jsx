import React, { Component } from 'react';

class ViewText extends Component {
    state = {  }
    render() {
        
        const { border, text } = this.props

        return ( 
               
            <textarea 
                readOnly
                wrap="physical" 
                name="note" 
                id="note"
                ref={val=>this.textArea=val}
                value={text}
                style={{
                    flex: 1, 
                    marginLeft: 24, 
                    marginRight: 24, 
                    verticalAlign: "top" ,
                    border: border
                }}
            />              
        );
    }
}
    
export default ViewText;