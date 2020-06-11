import React, { Component } from 'react';

class InputText extends Component {
    state = {  }
    render() {
        
        const { isSelected, isUnselected, selected } = this.props


        return ( 
               
            <textarea 
                readOnly={selected}
                wrap="physical" 
                name="note" 
                id="note" 
                style={{
                    flex: 1, 
                    marginLeft: 24, 
                    marginRight: 24, 
                    verticalAlign: "top" ,
                    border: "none"
                }}
                onFocus={ isSelected }
        
  
                />
               
        );
    }
}
    
export default InputText;