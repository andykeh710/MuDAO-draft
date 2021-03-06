import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import serum from "../../assets/serum.svg"
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    backgroundColor:'#F2F2F2'
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer classes={{root:'bg-gray-600'}} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ASSET</TableCell>
            <TableCell align="left">ALLOCATION</TableCell>
            <TableCell align="right">PRICE</TableCell>
            <TableCell align="right">24HR CHANGE</TableCell>
            <TableCell align="right">SPARKLINE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell component="th" scope="row">
                <img src={serum} alt="eo4"/>
              </TableCell>
              <TableCell align="right" >
                  <div className="bg-blue-400 text-white text-left pl-3 w-1/2">
                      50%
                  </div>
              </TableCell>
              <TableCell align="right">$4.33</TableCell>
              <TableCell align="right">+1.2%</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                <img src={serum} alt="eo4"/>
              </TableCell>
              <TableCell align="right" >
                  <div className="bg-blue-400 text-white text-left pl-3 w-1/2">
                      50%
                  </div>
              </TableCell>
              <TableCell align="right">$4.33</TableCell>
              <TableCell align="right">+1.2%</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                <img src={serum} alt="eo4"/>
              </TableCell>
              <TableCell align="right" >
                  <div className="bg-blue-400 text-white text-left pl-3 w-1/2">
                      50%
                  </div>
              </TableCell>
              <TableCell align="right">$4.33</TableCell>
              <TableCell align="right">+1.2%</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                <img src={serum} alt="eo4"/>
              </TableCell>
              <TableCell align="right" >
                  <div className="bg-blue-400 text-white text-left pl-3 w-1/2">
                      50%
                  </div>
              </TableCell>
              <TableCell align="right">$4.33</TableCell>
              <TableCell align="right">+1.2%</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}