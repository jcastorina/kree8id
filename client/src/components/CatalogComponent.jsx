import React, { Component } from 'react';
import ImageSelect from './ImageSelectComponent'
import Images from './ImagesComponent'
import Cards from './CardsComponent'
import InputText from './InputTextComponent' 
import loading from '../loading.png'
import noPic from '../no_pictures.png'

class Catalog extends Component {

    state = { 
        imgNum: 0,
        images: [],
     
     }
    
    clickLeft = () => {
        const len = this.state.images.length;
        const imgNum = (this.state.imgNum - 1 + len) % len;
        this.setState({ imgNum });
      };
    
     clickRight = () => {
        const len = this.state.images.length;
        const imgNum = (this.state.imgNum + 1) % len;
        this.setState({ imgNum });
      };
    
      clickTile = (num) => {
        const imgNum = parseInt(num);
        this.setState({ imgNum });
      };

      componentDidMount = async () => {
   
        const f =  await fetch('/myChar')
        const images = await f.json()
        let imgArray = []

        if(images.images.length > 0){
          for(let i in images.images){
            imgArray.push({id:i,value:images.images[i]})          
          }
        } else {
          imgArray.push({id:-1,value:noPic})
        }
        this.setState({ images: imgArray })
    } 
   
    render() { 
        console.log(this.state.imgNum,'state')
        return ( 
          <div className="row cards">

            <div className="col-md">
            <Cards 
                  image={this.state.images[this.state.imgNum] ? this.state.images[this.state.imgNum].value : loading}
              />
              
              <div name="spacer" style={{ marginTop: 28 }} />
            <ImageSelect
                  clickLeft={this.clickLeft}
                  clickRight={this.clickRight}
              />
              </div>

            <div name="spacer" style={{ marginTop: 400 }} />

              <Images 
                images={this.state.images}
                imgNum={this.state.imgNum}
                clickTile={this.clickTile}
              />          
    </div>
         );
    }
}
 
export default Catalog;
