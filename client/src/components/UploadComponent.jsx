import React, { Component } from 'react';
import InputText from './InputTextComponent' 
import uploadImg from '../uploadImg.png'

class Upload extends Component {

    constructor(props){
        super(props)
        this.state = { 
            file: null,
            fileUrl: null,
            border: '2',
            text: ''
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.textVal = this.textVal.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleChange(event) {
        event.target.files[0]?
        this.setState({ 
            fileUrl: URL.createObjectURL(event.target.files[0]),
            file: event.target.files[0]
        })
        :
        this.setState({
            fileUrl: null,
            file: null
        })
        console.log(this.state)
    }

    handleSubmit(event) {
        alert('submitted' + this.state.value)
        event.preventDefault()
    }

    handleClick = () => {
        this.inputElement.click()
    }

    textVal = (t) => {
        this.setState({ text: t })
    }

    submit = (e) => {
        e.preventDefault()
        let formData = new FormData();
        formData.append('imageFile', this.state.file)
        const xhr = new XMLHttpRequest()
        xhr.open("POST", "/upload", true)
        xhr.send(formData)
  
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
                            this.state.fileUrl ? this.state.fileUrl : uploadImg
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
                        border={this.state.border}
                        textVal={this.textVal}
                  
                     
                    />                                         
                    </div>                               
                <div name="spacer" style={{ marginTop: 28 }} />
                    <input 
                        type="submit" 
                        value="Upload" 
                        onClick={this.submit}
                    />
                      <input 
                        type="submit" 
                        value="check" 
                        onClick={()=>{
                            console.log(this.state.file)
                        }}
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
