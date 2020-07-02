import React, { Component } from 'react';
import InputText from './InputTextComponent' 
//import Dialog from './DialogComponent'
import uploadImg from '../uploadImg.png'
import { Button, Dropdown } from 'react-bootstrap'

class Upload extends Component {

    constructor(props){
        super(props)
        this.state = { 
            file: null,
            fileUrl: null,
            border: '2',
            text: '',
            friends: [],
            scope: [],
            showFriends: false,
            publicButtonToggle: false,
            selector: []
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
        formData.append('scope', this.state.scope)

        fetch('/upload', {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err,' err'))

    }

    componentDidMount = async () => {
        await this.friends()


    } 

    selectorChange = (t) => {
        let name = t.target.value
        let go = false
        let arr = [ ...this.state.selector ]
        for(let i in arr){
            if(name === arr[i]){
                arr.splice(i,1)
                this.setState({ selector: arr, scope: arr })
                go = true
                break
            }
        }
        if(!go){
            arr.push(t.target.value)
            this.setState({ selector: arr, scope: arr })
        }

    }
   
    friends = async () => {
    
        const rawFriends = await fetch('/myFriends')
        const friends = await rawFriends.json()
        let index = []
        for(let i in friends){
            index.push({ id: i, value: friends[i] })
        }
        this.setState({ friends: index })
        console.log(this.state)
    }

    showFriendsTrue = () => {
            this.setState({ showFriends: true })
    }

    showFriendsFalse = () => {
        this.setState({ showFriends: false })
}

    publicButton = (t) => {
        let name = t.target.name
        let scope = [ ...this.state.scope ]
        let go = false

        for(let i in scope){
            if(scope[i] === name){
                scope.splice(i,1)
                this.setState({ scope: scope, publicButtonToggle: false })
                go = true;
                break
            }

        }

        if(!go){
            scope = [ name ]
            this.setState({ scope: scope, publicButton: true })
        }
        this.showFriendsFalse();
        
        console.log(this.state.scope)
    }

    scope = () => {
        console.log(this.state.scope)
        console.log(this.state)
        this.showFriendsFalse();
    }

    friendClick = (t) => {
        let name = t.target.name

        let go = false
        let arr = this.state.scope

        for(let i in arr){
            if(name === arr[i]){
                arr.splice(i,1)
                this.setState({ scope: arr })
                go = true
                break
            }
        }

        if(!go){
            arr.push(name)
            this.setState({ scope: arr })
        }
        console.log(this.state.scope)
    }

    render() { 

        const { friends } = this.state

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
                    
                    <p>Scope:</p>
                        <Button 
                            id="public"
                            name="public"
                            onClick={this.publicButton}   
                            selected={false}                       
                        >Public</Button>

                        <Dropdown 
                            id="showfriends"
                            onClick={this.showFriendsTrue}
                            onBlur={this.showFriendsFalse}
                            checked={this.state.showFriends}
                        >Friends</Dropdown>
                        <Button
                            onClick={this.scope}
                        >Private</Button>
              


                            <select multiple value={this.state.selector} onChange={this.selectorChange}>
                            {this.state.showFriends?
                            
                            friends.map((friend)=>(
                          
                                <option
                                key={friend.id}
                                value={friend.value}
                                id={friend.value}
                                >
                                {friend.value}
                                </option>                                
                            
                            ))
                            
                            :null
                            }
                            </select>
              
                         
 
                            

                    
                 
                    
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


/*

                        <Button 
                            id="showfriends"
                            onClick={this.showFriendsTrue}
                            onBlur={this.showFriendsFalse}
                            checked={this.state.showFriends}
                        >Friends</Button>

 <select style={{display: "none"}} multiple value={this.state.selector} onChange={this.selectorChange}>
                            {this.state.showFriends?
                            
                            friends.map((friend)=>(
                          
                                <option
                                key={friend.id}
                                value={friend.value}
                                id={friend.value}
                                >
                                {friend.value}
                                </option>                                
                            
                            ))
                            
                            :null
                            }
                            </select>

*/