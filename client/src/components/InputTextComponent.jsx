import React, { Component } from 'react';

class InputText extends Component {
    state = {  }
    render() {
        
        const { border, textVal, textPost } = this.props

        return ( 
               
            <textarea 
           
                wrap="physical" 
                name="note" 
                id="note"
                ref={val=>this.textArea=val}
                onChange={()=>{
                    textVal(this.textArea.value)
                }}
                value={textPost}
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
    
export default InputText;