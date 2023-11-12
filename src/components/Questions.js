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
      <body>
              <h1 align='center' className='header' >Build a Collar</h1>
      <div className='rad-input'>
      
            <h2 className='rad-text'>Collar Size</h2>
            <div name="size">
            <input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '8' 
            />8"

            <input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '9' />9"

            <input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '10' />10"

            <input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '11' />11"

            <input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '12' />12"

            <input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '13' />13"

<input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '14' />14"

<input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '15' />15"


<input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '16' />16"

<input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '17' />17"

<input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '18' />18"

<input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '19' />19"

<input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '20' />20"

<input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '21' />21"

<input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '22' />22"

<input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '23' />23"

<input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '24' />24"

<input type = "radio" 
            name="sizeOption"
            onChange={e=>SetSize(e.target.value)} 
            value = '25' />25"

            

       </div>
            <h2 className='rad-text'>Collar Width</h2>
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

            <h2 className='rad-text'>Add Second layer</h2>
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

            <h2 className='rad-text'>Add Padding</h2>
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



            <h2 className='rad-text'>Martingale</h2>

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
            
            <h2 className='rad-text'>Premium Crystals</h2>


            <div name="design">

            <input type = "radio" 
            name="layerOption"
            onChange={e=>setDesign(e.target.value)} 
            value = '0' />No
            
            
            <input type = "radio" 
            name="designOption"
            onChange={e=>setDesign(e.target.value)} 
            value = '15' /> XS

            <input type = "radio" 
            name="designOption"
            onChange={e=>setDesign(e.target.value)} 
            value = '30' /> S

            <input type = "radio" 
            name="designOption"
            onChange={e=>setDesign(e.target.value)} 
            value = '45' /> M

            <input type = "radio" 
            name="designOption"
            onChange={e=>setDesign(e.target.value)} 
            value = '60' /> L

            <input type = "radio" 
            name="designOption"
            onChange={e=>setDesign(e.target.value)} 
            value = '75' /> XL
            </div>
            
            </div>
            <div>
              <h1 align='center' className='totalstyle'>Total: ${((Number(Size)*Number(Width))*10)+Number(Width)+Number(padding)+Number(martingale)+Number(design)+((Number(secondLayer)*Number(Width))*5)}</h1>
            </div>
      </body>

)
}


export default Questions;