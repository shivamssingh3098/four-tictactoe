import React, { useState } from "react";
import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

const itemArray = new Array(9).fill("empty");
const App = () => {
const [isCross, setIsCross] = useState(false);
const [winMassage, setWinMessage] = useState("");
const reloadeGame = () =>{
  setIsCross(false);
  setWinMessage("");
  itemArray.fill("empty", 0, 9);
};
const checkIsWinner = () =>{
  //
};
const changeItem=itemNumber => {
  if(winMassage){
    return toast(winMassage, {type: "success"});
  }
  if(itemArray[itemNumber]==="empty")
  {
    itemArray[itemNumber] = isCross ? "cross" : "circle";
    setIsCross(!isCross);
  }
  else{
    return toast("already filled", {type: "error"})
  } 
  checkIsWinner();
};


  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">

                {winMassage ? (
                  <div className="mb-2 mt-2 ">
                    <h1 className="text-success text-uppercase text-center"> {winMassage}
                    </h1>
                    <Button color="success" block onClick={reloadeGame} >
                      Reloade The Game
                    </Button>
                  </div>
                ) : (
                  <h1 className="text-center text-warning">{isCross? "Cross":"Circle"} turns</h1>
                )}

          <div className="grid">
            {itemArray.map((item, index) => (
              <Card>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
