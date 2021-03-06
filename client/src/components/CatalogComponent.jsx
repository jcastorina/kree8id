import React, { Component } from 'react';
import ImageSelect from './ImageSelectComponent'
import SaveCancel from './SaveCancelComponent'
import Images from './ImagesComponent'
import Cards from './CardsComponent'
import ViewText from './ViewTextComponent' 
import loading from '../loading.png'
import noPic from '../no_pictures.png'

class Catalog extends Component {

  constructor(props){
    super(props)
    this.state = { 
      imgNum: 0,
      images: [],
      border: "none",
      selected: false,
      curr: null,   
    }
    
    this.clickLeft = this.clickLeft.bind(this)
    this.clickRight = this.clickRight.bind(this)
  }
    
  clickLeft () {
    const len = this.state.images.length;
    const imgNum = (this.state.imgNum - 1 + len) % len;
    this.setState({ imgNum });
  };
    
  clickRight () {
      
    const len = this.state.images.length;
    const imgNum = (this.state.imgNum + 1) % len;
    this.setState({ imgNum });
  };
    
  clickTile = (num) => {
    const imgNum = parseInt(num);
    this.setState({ imgNum });
  };

  delete = async (e) => {
      
    let val = e.value
    let images = this.state.images

    fetch("/delete", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(val)
    })

    for(let i in images){
      if(images[i].value._id === val._id){
        images.splice(i,1)
        this.setState({ images: images })
      }      
    }
    this.reorder()
  }

  reorder () {
    let images = this.state.images
    for(let i in images){
      images[i].id = i
    }
    this.setState({ images: images })
  }

  componentDidMount = async () => {

    const f =  await fetch('/myChar')
    const images = await f.json()
    
    let imgArray = []
    
    if(images.images.length > 0){
      for(let i in images.images){
        imgArray.push({id:i,value:images.images[i]})          
      }
    } else {
      imgArray.push({
        id:-1,
        value: {
          fileName: noPic, 
          text: "You should upload something!"}})
    }
    this.setState({ images: imgArray })
    
  } 
   
  render() { 
    return ( 
        <div>
          <div className="row cards">
            <div className="col-md">
              <div className="row">
                <Cards 
                  image={
                    this.state.images[this.state.imgNum] 
                    ? this.state.images[this.state.imgNum].value.fileName 
                    : loading
                  }
                />
                <ViewText 
                  text={
                    this.state.images[this.state.imgNum] ?
                    this.state.images[this.state.imgNum].value.text :
                    ' ' }
                  border={this.state.border}
                />
              </div>
              <div name="spacer" style={{ marginTop: 28 }} />
            {this.state.selected ? 
              <SaveCancel 

              />
            : <div>
              <button onClick={()=>{
                
                this.delete(this.state.images[this.state.imgNum])
                
              }}>Delete</button>
              <ImageSelect
                  clickLeft={this.clickLeft}
                  clickRight={this.clickRight}
              />
             </div>
            }
            </div>
              
     
    </div>
    <div name="spacer" style={{ marginTop: 28 }} />
            {this.state.images.length>0&&this.state.images[0].id===-1?null
            :
          
              <Images 
                images={this.state.images}
                imgNum={this.state.imgNum}
                clickTile={this.clickTile}
              />
            
            }  
    </div>
    );
  }
}
 
export default Catalog;
