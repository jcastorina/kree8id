import React, { Component } from 'react';
import InputText from './InputTextComponent' 
//import Dialog from './DialogComponent'
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
        formData.append('text', this.state.text)

        fetch('/upload', {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err,' err'))

    }

    componentDidMount = async () => {

    } 
   
    render() { 
        return ( 
            <form>
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
                        textPost={this.state.text}
                     
                    />                                         
                    </div>                               
                <div name="spacer" style={{ marginTop: 28 }} />
                    <input 
                        type="submit" 
                        value="Upload" 
                        onClick={this.submit}
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
