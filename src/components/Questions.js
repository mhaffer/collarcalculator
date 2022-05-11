import React, {useState} from 'react';
import "../App.css"


function Questions (){
  const [Size, SetSize] = useState();
  const [Width, setWidth] = useState();
  const [padding, setPadding] = useState();
  const [martingale, setMartingale] = useState();
  const [design, setDesign] = useState();
  const [secondLayer, setSecondLayer] = useState();


    return (
      <div className=''>
      <form>
            
            Collar Size
            <div name="size">
            <input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '12' 
            />XS 10"-14"

            <input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '16' />S 14"-18"

            <input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '20' />M 18"-22"

            <input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '24' />L 22"-26"

            <input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '28' />XL 26"-30"

       </div>
            Collar Width
            <div name="width">

            <input type = "radio" 
            name="widthOption"
            onChange={e=>setWidth(e.target.value)} 
            value = {'0.75'}
            />0.75"

            <input type = "radio" 
            name="widthOption"
            onChange={e=>setWidth(e.target.value)} 
            value = '1' />1"

            <input type = "radio" 
            name="widthOption"
            onChange={e=>setWidth(e.target.value)} 
            value = '1.25' />1.25"

            <input type = "radio" 
            name="widthOption"
            onChange={e=>setWidth(e.target.value)} 
            value = '1.5' />1.5"

            <input type = "radio" 
            name="widthOption"
            onChange={e=>setWidth(e.target.value)} 
            value = '1.75' />1.75"

            <input type = "radio" 
            name="widthOption"
            onChange={e=>setWidth(e.target.value)} 
            value = '2' />2"

            </div>

            Add Second Layer
            <div name="secondLayer">

            <input type = "radio" 
            name="layerOption"
            onChange={e=>setSecondLayer(e.target.value)} 
            value = '0' />No
            
            
            <input type = "radio" 
            name="layerOption"
            onChange={e=>setSecondLayer(e.target.value)} 
            value = '12' /> XS

            <input type = "radio" 
            name="layerOption"
            onChange={e=>setSecondLayer(e.target.value)} 
            value = '16' /> S

            <input type = "radio" 
            name="layerOption"
            onChange={e=>setSecondLayer(e.target.value)} 
            value = '20' /> M

            <input type = "radio" 
            name="layerOption"
            onChange={e=>setSecondLayer(e.target.value)} 
            value = '24' /> L

            <input type = "radio" 
            name="layerOption"
            onChange={e=>setSecondLayer(e.target.value)} 
            value = '28' /> XL
            </div>

            Add Padding
            <div name="padding">

            <input type = "radio" 
            name="paddingOption"
            onChange={e=>setPadding(e.target.value)} 
            value = '0' />None
            
            
            <input type = "radio" 
            name="paddingOption"
            onChange={e=>setPadding(e.target.value)} 
            value = '50' /> XS

            <input type = "radio" 
            name="paddingOption"
            onChange={e=>setPadding(e.target.value)} 
            value = '75' /> S

            <input type = "radio" 
            name="paddingOption"
            onChange={e=>setPadding(e.target.value)} 
            value = '100' /> M

            <input type = "radio" 
            name="paddingOption"
            onChange={e=>setPadding(e.target.value)} 
            value = '125' /> L

            <input type = "radio" 
            name="paddingOption"
            onChange={e=>setPadding(e.target.value)} 
            value = '150' /> XL
            </div>



            Add Martingale

            <div name="martingale">

            <input type = "radio" 
            name="martingaleOption"
            onChange={e=>setMartingale(e.target.value)} 
            value = '50' />Yes

            <input type = "radio" 
            name="martingaleOption"
            onChange={e=>setMartingale(e.target.value)} 
            value = '0' />No

            </div>
            
            Difficult Design

            <div name="design">

            <input type = "radio" 
            name="designOption"
            onChange={e=>setDesign(e.target.value)} 
            value = '60' />Yes

            <input type = "radio" 
            name="designOption"
            onChange={e=>setDesign(e.target.value)} 
            value = '0' />No
            
            </div>
            <div>
              <h1 align='center' className='rad-text'>Total: ${((Number(Size)*Number(Width))*10)+Number(Width)+Number(padding)+Number(martingale)+Number(design)+((Number(secondLayer)*Number(Width))*5)}</h1>
            </div>
      </form>
</div>

)
}


export default Questions;