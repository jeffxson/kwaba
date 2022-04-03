import styled from "styled-components";

export const NavStyle = styled.div`
  color: gray; 
   .container {
    width: 350px;
    margin: auto;
    border: 0.5px solid whitesmoke;
    border-radius: 10px;
    padding: 30px
  }
  h1 {
      position: relative;
    @media (min-width: 999px) {
      margin-left: 600px;
    }
  
    margin-top: 40px;
    color: gray;
    margin-bottom: 40px;
  }
  h2 {
    color: rgb(42, 40, 106);
    margin-top: -4px;
  }

  .payment {
    display: flex;
    justify-content: space-between;
  }
  .ccle {
    display: flex;
    padding-right: 30px;
    font-size: 13px;
  }

  .target {
    margin-top: -6px;
    width: 30px;
    height: 30px;
    background: conic-gradient(
      lightgrey 230deg 270deg,
      rgb(0, 220, 153) 280deg
    );
    -webkit-mask-image: radial-gradient(transparent 45%, black 45%);
    mask-image: radial-gradient(transparent 35%, black 45%);
    border-radius: 50%;
  } 

  }
  .select1 {
    display: grid;
    margin-bottom: 25px;
  }
  .option {
    border: 1px solid gray;
    text-align: center;
    border-radius: 10px;
    margin-top: 15px;
    padding-top: 15px;
    padding-bottom: 10px;

  }
  .option  :clicked {
    color: red; 
  } 

  .numbe input[type=number] { 
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="50"><text x="13" y="28" style="font: bold 16px Arial;">₦</text></svg>') no-repeat; 
    font-size:15px;
    font-family: "Readex Pro";
   width: 300px;
  height:40px;
  padding: 2px 20px;
  padding-left:  28px;
  margin-top: 15px; 
  margin-bottom: 15px; 
  border: 1px solid gray;
  border-radius: 10px; 
    } 
    .newb input[type=number] {
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="50"><text x="13" y="30" style="font: bold 16px Arial;">₦</text></svg>') no-repeat; 
      font-size:15px;
      font-family: "Readex Pro";
     width: 300px;
    height:45px;
    padding: 2px 20px;
    padding-left:  28px;
    margin-top: 15px; 
    margin-bottom: 15px; 
    border: 1px solid gray;
    border-radius: 10px; 
    border: 1px solid gray;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
    
    
    #id_work_days input[type="radio"] {
      display: none;
    }
    
    #id_work_days span {
      display: grid;
      font-size: 13px;
      margin-top: 30px;
      padding: 10px;
      padding-top: 17px;
      padding-bottom: 16px;
      text-align: center;
      text-transform: uppercase;
      border: 1px solid gray;
      border-radius: 10px;
      color: gray;
    }
    
    #id_work_days input[type="radio"]:checked + span {
      background-color: transparent;
      color: rgb(135, 132, 194);
      border: 1px solid rgb(135, 132, 194);
    }
 select{ 
   background-color: transparent; 
   color: gray;
    font-size:15px;
    font-family: "Readex Pro";
   width: 350px;
  height:48px;
  padding: 2px 20px;
  margin-top: 10px; 
  margin-bottom: 15px; 
  border: 1px solid gray;
  border-radius: 10px;}
  
  button{
    background-color:  rgb(0, 220, 153);
    cursor: pointer;
    color: white;
    font-size:15px;
    font-family: "Readex Pro";
   width: 350px;
  height:45px;
  padding: 2px 20px;
  margin-top: 10px; 
  margin-bottom: 15px; 
  border: 1px solid  rgb(0, 220, 153);
  border-radius: 10px;

  }
  ul{
    font-size:12px;
    color:  rgb(42, 40, 106);
    border:  1px solid  rgb(220, 219, 237);
    border-radius: 10px;
    background-color:  rgb(220, 219, 237);
    list-style-type: none;
    padding-bottom: 25px;
  }

  li{
    padding-top: 20px; 
    font-weight: bolder;
    content: ""; 
    left: 25px;
    bottom: 0;
    width: 90%;
    border-bottom: 1px solid whitesmoke;
    padding-bottom: 10px;

  }
  .blue{
    background-color:  rgb(42, 40, 106);
    border: 1px solid  rgb(42, 40, 106);
    height:55px;


  }
     
    
   
    
    
   
    
`;
