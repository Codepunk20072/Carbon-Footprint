import React from 'react'
import styled from 'styled-components';

function Result() {
  return (
    <Container>
      <Container1>
      <div className='top'>
      <h2>CONGRATULATIONS!</h2>
      <p>Your annual footprint is close to the UK average but there's still room to improve your score!</p>
      </div>
      
      {/* <img src='https://footprint.wwf.org.uk/img/foot.58137a28.svg' alt="My Image" /> */}
      <div className='bg'>
      <h1 className='footprint'>YOUR FOOTPRINT IS EQUAL TO</h1>
      <h1 className='value'>5</h1>
      <h1 className='tonnes'>TONNES*</h1>
      </div>
    </Container1>
    <Container2>
    <img src='https://footprint.wwf.org.uk/img/globe-europe.dfc3b352.svg' alt="My Image" />
    <div className='world'>
    <h1 className='footprint'>World average</h1>
      <h1 className='value'>6.3</h1>
      <h1 className='tonnes'>TONNES*</h1>
    </div>
    </Container2>
    <Container3>
      <div className='box bg-warning' >
        <img src='https://footprint.wwf.org.uk/img/home.5fa6c3b9.svg'></img>
        <div className='right'>
          <h1>Food</h1>
          <button>Reduce the score</button>
        </div>
       
      </div>
      <div className='box bg-primary'>
      <img src='https://footprint.wwf.org.uk/img/travel.377f26fb.svg'></img>
      <div className='right'>
          <h1>Travel</h1>
          <button>Reduce the score</button>
        </div>
      </div>
      <div className='box bg-info' >
      <img src='https://footprint.wwf.org.uk/img/food.fe2c757b.svg'></img>
      <div className='right'>
          <h1>Home</h1>
          <button>Reduce the score</button>
        </div>
      </div>
      <div className='box bg-danger d-flex'>
      <div className='d-flex flex-column my-4 mx-4'>
      <img src='https://footprint.wwf.org.uk/img/stuff.f8400931.svg'></img>
      <h5 className='mb-0 mt-2 text-center text-light fw-bold'>20%</h5>
      </div>
      <div className='right ms-4 mt-4'>
          <h1 className='text-light'>Other</h1>
          <button className='button'>Reduce the score</button>
        </div>
      </div>
    </Container3>
    </Container>
    
    
  )
}

export default Result;

const Container1 = styled.div`
  height: 650px;
  width: 420px;
  background-color: #FFBF1E;
  
  border-radius: 10px;
  ${'' /* margin-left: 120px; */}
  margin-top: 60px;
  margin-bottom: 20px;
  z-index:-2;
  

  h2{
    font-size:30px;
    position: relative;
    padding-top: 30px;
    padding-left: 20px;
    font-weight:bold;
    z-index:2;
  }
  p{
    padding-left: 20px;
    padding-right:20px;
    line-height: 21px;
  }
  .footprint{
    font-size:20px;
    position: relative;
    padding-top: 30px;
    text-align: center;
    font-weight: bold;
    ${'' /* width:50%; */}
    ${'' /* white-space: nowrap;
    overflow:hidden; */}
  
  }
  .value{
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0;
    z-index:2;
  }
  .tonnes{
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    margin-top:0;
  }
  
  .bg{
    background-image: url('https://footprint.wwf.org.uk/img/foot.58137a28.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
    height:80%;
  }
  .top{
    height: 20%;
   
  }
`

const Container2 =styled.div`
  height: 650px;
  width: 420px;
  background-color: black;
  border-radius: 10px;
  ${'' /* margin-left: 120px; */}
  margin-top: 60px;
  margin-bottom: 20px;
  display:flex;
  align-items:center;
  flex-direction: column;
  justify-content:space-around;

  img{
    position:relative;
    margin-bottom: 0px;
    margin-top: auto;
    height:200px;
  }

  .footprint{
    font-size:30px;
    position: relative;
    padding-top: 30px;
    text-align: center;
    font-weight: bold;
    ${'' /* width:50%; */}
    ${'' /* white-space: nowrap;
    overflow:hidden; */}
    color:#FFBF1E;
  
  }
  .value{
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 0;
    z-index:2;
    color:white;
  }
  .tonnes{
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    margin-top:0;
    color:white;
  }

  .world{
    margin-bottom: auto;
    margin-top:0;
  }
  
`

const Container3 = styled.div`
  height: 650px;
  width: 420px;
  background-color: black;
  border-radius: 10px;
  ${'' /* margin-left: 120px; */}
  margin-top: 60px;
  margin-bottom: 20px;
 

  display: flex;
  flex-direction:column;
  justify-content: space-between; 
align-items: stretch; 



  .box {
  flex: 1; 
  height:20px;
  
  img{
    ${'' /* margin-left:40px;
    margin-top:auto;
    margin-bottom:auto; */}
  }
  
}

`

const Container = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-evenly;
  
  
  
`
