import {React, useState } from "react"

export function Admin() {
    const [pageValue, setPageValue]=useState("")
    const [itemValue, setItemValue]=useState("")
    const [input, setInput]=useState("")
    const [selectedImage, setSelectedImage] = useState(null);
    const [headInputValue, setHeadInputValue]=useState("")
    const [paraInputValue, setParaInputValue]=useState("")
    const [majorInputValue, setMajorInputValue]=useState(false)

    let itemStyle={
        display:"none"
    }

    const handlePageChange=(event)=>{
        setPageValue(event.target.value)
    }
    
    const handleImageInput=(event)=>{
        setSelectedImage(event.target.files[0])
    }

    const handleHeadInput=(event)=>{
        setHeadInputValue(event.target.value)
    }
    
    const handleParaInput=(event)=>{
        setParaInputValue(event.target.value)
    }
    
    const handleMajorInput=(event)=>{
        setMajorInputValue(event.target.checked)
    }

    const handleItemChange=(event)=>{
        setItemValue(event.target.value)
        let inputs=[]
        inputs.push(
            <div className="" key={`input-container`}>
              <label htmlFor={`heading`}>{`Image`}</label>
              <input className="image my-2 p-1" type="file" name={`PostImage`} onChange={handleImageInput}/>
              
              <label htmlFor={`heading`}>{`Heading`}</label>
              <input className="heading my-2 p-1" type="text" name={`heading`} onChange={handleHeadInput}/>
    
              <label htmlFor={`para`}>{`Paragraph`}</label>
              <input className=" para my-2 p-1" type="text" name={`para`} onChange={handleParaInput}/>

              <label htmlFor={`Major`}>{`Major`}</label>
              <input className="major my-2 p-1" type="checkbox" name={`major`} onChange={handleMajorInput}/>
            </div>
          );
        setInput(inputs)
    }   
    
    const handleClick=()=>{
        
        const formData = new FormData();
        formData.append('page', pageValue)
        formData.append('item', itemValue)
        formData.append('image', selectedImage)
        formData.append('head', headInputValue)
        formData.append('para', paraInputValue)
        formData.append('major', majorInputValue)

        fetch("http://localhost:5000/hello", {
            method:"POST",
            mode:"cors",
            body:formData,
            
        })
        .then(result=>{
            if(result){
                alert(`The Post on Page ${pageValue.toUpperCase()} of Item ${itemValue.toUpperCase()} has been added`)
                let decision=prompt("Do you Wish to add more to the Same page and Item or Different Type Y/N")
                if(decision==="Y"||decision==="y"){
                    setHeadInputValue("")
                    setParaInputValue("")
                    setMajorInputValue("")
                    setSelectedImage(null)
                    document.getElementsByName('heading')[0].value = "";
                    document.getElementsByName('para')[0].value = "";
                    document.getElementsByName('major')[0].checked = false;
                }else{
                    window.location.reload()
                }
            }
        })
    }

    let itemOptions=[]
   

    const newsItems = ["Select News Page Items", "DON'T MISS", "LIFESTYLE NEWS", "HOUSE DESIGN", "PERFORMANCE TRAINING", "LATEST ARTICLES","MAKE-IT-MODERN","HOLIDAY RECIPES" , "MOST POPULAR", "RECENT COMMENTS"];
    const fashionItems = ["Select Fashion Page Items","LATEST NEWS", "Most Read"];
    const lifestyleItems = ["Select LifeStyle Page Items", "Articles", "Recent Articles"];
    const gadgetsItems = ["Select Gadgets Page Items", "Articles", "Must Read"];
    

    if(pageValue==="news"){
        itemOptions=newsItems.map(item=><option key={item} value={item}>{item}</option>)
        itemStyle.display='block'
        
    }
    if(pageValue==="fashion"){
        itemOptions=fashionItems.map(item=><option key={item} value={item}>{item}</option>)
        itemStyle.display='block'
    }
    if(pageValue==="gadgets"){
        itemOptions=gadgetsItems.map(item=><option key={item} value={item}>{item}</option>)
        itemStyle.display='block'
    }
    if(pageValue==="lifestyle"){
        itemOptions=lifestyleItems.map(item=><option key={item} value={item}>{item}</option>)
        itemStyle.display='block'
    }


    return (
        <div className="App container d-flex justify-content-center align-item-center flex-column"> 
        
            <select className="my-5 p-3" name="pageSelect" id="pageSelect" onChange={handlePageChange}>
                <option value="optionName">Select Page</option>
                <option value="news">News</option>
                <option value="fashion">Fashion</option>
                <option value="gadgets">Gadgets</option>
                <option value="lifestyle">LifeStyle</option>
            </select>

            <select className="my-5 p-3" name="itemSelect" id="itemSelect" style={itemStyle} onChange={handleItemChange}>
                {itemOptions}
            </select>
            <h1>{[headInputValue, paraInputValue, majorInputValue]}</h1>
            <div className="postInput" style={itemStyle}>
                <ul>
                    {input}
                    <button type="submit" onClick={(event)=>handleClick(event)}>Post</button>
                </ul>
            </div>
        </div>
    )
}

export default Admin