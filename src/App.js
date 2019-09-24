import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import RGL, { WidthProvider } from "react-grid-layout";

import "./App.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";
import { Button } from "@material-ui/core";

const ReactGridLayout = WidthProvider(RGL);

const useStyles = makeStyles({
  square: {
    backgroundColor: "#1976d2",
    padding: "0 3px"
  },
  rectangle: {
    backgroundColor: "red"
  },
  styledButton: {
    margin: "20px"
  }
});

function App(props) {
  const classes = useStyles();
  const initialLayout = [
    {
      i: `element-${(Math.random() * 10).toFixed(0)}`,
      x: 0,
      y: 0,
      w: 1,
      h: 1,
      maxW: 1,
      maxH: 1
    },
    {
      i: `element-${(Math.random() * 10).toFixed(0)}`,
      x: 1,
      y: 0,
      w: 2,
      h: 1,
      maxW: 5,
      maxH: 1
    }
  ];

  const [elements, setElements] = useState(initialLayout);

  const addSquare = () => {
    return setElements([
      ...elements,
      {
        i: `element-${(Math.random() * 10).toFixed(0)}`,
        x: 0,
        y: 0,
        w: 1,
        h: 1,
        maxW: 1,
        maxH: 1
      }
    ]);
  };

  const addRectangle = () => {
    return setElements([
      ...elements,
      {
        i: `element-${(Math.random() * 10).toFixed(0)}`,
        x: 0,
        y: 0,
        w: 2,
        h: 1,
        maxW: 5,
        maxH: 1
      }
    ]);
  };

  return (
    <div className="App">
      <Button
        variant="contained"
        className={classes.styledButton}
        color="primary"
        onClick={addSquare}
      >
        Add Square
      </Button>
      <Button
        variant="contained"
        className={classes.styledButton}
        color="secondary"
        onClick={addRectangle}
      >
        Add Rectangle
      </Button>
      <ReactGridLayout verticalCompact={false} layout={elements} preventCollision={true}>
        {elements.map(item => (
          <Card
            key={item.i}
            className={item.w === item.h ? classes.square : classes.rectangle}
          >
            <CardContent>
              <Typography>
                {" "}
                {item.w === item.h ? "The square card" : "The rectangle card"}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </ReactGridLayout>
    </div>
  );
}

export default App;
