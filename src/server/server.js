import express from 'express';
import { request } from 'http';
import ReactDOM from 'react-dom/server';
import {App} from '../App';
import axios from 'axios';
import {indexTemplate} from './indexTemplate';
const app = express();

app.use('/static', express.static('./dist/client'))

app.get('/',(req,res)=>{
  res.send(indexTemplate(ReactDOM.renderToString(App())))
})

app.get('/auth', (req, res) => {

  res.send(indexTemplate(ReactDOM.renderToString(App())))

})


app.listen(3000,()=>{
  console.log("server started on port http://localhost:3000")
})