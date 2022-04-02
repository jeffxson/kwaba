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
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="50"><text x="13" y="29" style="font: bold 16px Arial;">₦</text></svg>') no-repeat; 
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
    border: 1px solid gray;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    }
    #id_work_days{
      display: grid;
      height: 204px;
      border: none;
      overflow: hidden;
    }
    #id_work_days::-moz-focus-inner {
      border: 0;
    }
    #id_work_days:focus {
      outline: none; 
    }
    #id_work_days option :focus {
     
    }
    #id_work_days option{
      width: 100%;
      font-size: 1em;
      padding: 10px 0;
      text-align: center;
      margin-bottom: 20px;
      cursor: pointer;
      border: gray solid 1px;
      border-radius: 5px;
      color: ; 
    }

    
.opt1 select option:focus {
    color: red;
    background-color: yellow;
  }


 select{ 
   background-color: transparent; 
   color: gray;
    font-size:15px;
    font-family: "Readex Pro";
   width: 350px;
  height:45px;
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