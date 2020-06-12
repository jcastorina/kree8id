import React, { Component } from 'react';
import InputText from './InputTextComponent' 
import uploadImg from '../uploadImg.png'

class Upload extends Component {

    constructor(props){
        super(props)
        this.state = { 
            file: null,
            selected: false,
            border: '2'
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event) {
        event.target.files[0]?
        this.setState({ 
            file: URL.createObjectURL(event.target.files[0])
        })
        :
        this.setState({file: null})
    }

    handleSubmit(event) {
        alert('submitted' + this.state.value)
        event.preventDefault()
    }

    isSelected = () => {
        this.setState({ selected: true })    
    }

    isUnselected = () => {
      this.setState({ selected: false })    
    }

    handleClick = () => {
        this.inputElement.click()
    }

    componentDidMount = async () => {

    } 
   
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
            <div className="row cards">
                <div className="col-md">
                    <div className="row">
                       
                        
                        <img 
                            src={
                                this.state.file ? this.state.file : uploadImg
                            } 
                            style={{ 
                                height: 320, 
                                width: 320,
                                objectFit: "cover"
                                
                            }}
                            alt="upload"
                            onClick={this.handleClick}
                        />
                        <InputText  
                            isSelected={this.isSelected}
                            isUnselected={this.isUnselected}
                            selected={this.state.selected}
                            border={this.state.border}
                        />                                         
                    </div>
                                        
                    <div name="spacer" style={{ marginTop: 28 }} />

                        <input 
                            type="submit" 
                            value="Upload" 
                            style={{verticalAlign: "left"}}
                        />

                </div>
            </div>

            <input 
                            ref={input=>this.inputElement=input}
                            type="file"         
                            onChange={this.handleChange}
                            id="file"
                            style={{
                                visibility: "hidden"
                            }}
                        />
            </form>
        );
    }
}
 
export default Upload;
