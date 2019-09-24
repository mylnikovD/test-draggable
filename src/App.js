import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/styles";
import RGL, { WidthProvider } from 'react-grid-layout';


import "./App.css";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);

const useStyles = makeStyles({
  square: {
    backgroundColor: '#1976d2',
  },
  rectangle: {
    backgroundColor: 'red',    
  }
});

function App() {
  const classes = useStyles();

  const layout = [
    {i: 'a', x: 0, y: 0, w: 1, h: 1, maxW: 1, maxH: 1 },
    {i: 'b', x: 1, y: 0, w: 2, h: 1, maxW: 5, maxH: 1},
  ]

  return <div className="App">
    <ReactGridLayout verticalCompact={false} layout={layout} >

    <Card key="a" className={classes.square}>
      <CardContent>
        <Typography>
          The square card
        </Typography>
      </CardContent>
    </Card>
    <Card key="b" className={classes.rectangle}>
      <CardContent>
        <Typography>
          The rectangular card
        </Typography>
      </CardContent>
    </Card>
    </ReactGridLayout>
  </div>;
}

export default App;
