import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'


function App() {
  const [data, setdata] = useState([])
  useEffect(()=>{
    fetchData()


  },[])
  function fetchData(){
      axios.get('https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json')
      .then(res => {
        
        let arr=[]
        for(const item in res.data){
            arr.push(res.data[item])
        }
        setdata(arr)
      }).catch(error=>{
        console.log(error)
      })
  }

  return (
    <>
    
      <div><h2>Products</h2></div>
    <div className="App">
      
      {
       
        data?.map((item,index)=>{
            return (
              <div className='proList' key={index}>
                {/* {item.newPrice}
                {item.productName} */}

                      <div className='productCardStyle' >
                        <img className='productImageStyle' src={item.productImage} />
                        <h5>{item.productName}</h5>

                        <div className='priceClass'>
                          <div>
                          <i class="fa-solid fa-star stars"></i>
                          <i class="fa-solid fa-star stars"></i>
                          <i class="fa-solid fa-star stars"></i>
                          <i class="fa-solid fa-star stars"></i>
                          <i class="fa-solid fa-star stars"></i>
                          </div>

                        <div><p><s>{item.oldPrice}/- </s>  <b>{item.newPrice}/- </b></p></div>
                        </div>
                        
                        <button className='btnClass'> ADD TO CART </button>
                    </div>
              </div>
            )
        })
      }
    </div>
    </>
  );
}

export default App;
