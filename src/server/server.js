import express from 'express';
import { request } from 'http';
import ReactDOM from 'react-dom/server';
import {App} from '../App';
import axios from 'axios';
import {indexTemplate} from './indexTemplate';
const app = express();


const PORT = process.env.PORT || 3000;

app.use('/static', express.static('./dist/client'))



app.get('/auth', (req, res) => {

  res.send(indexTemplate(ReactDOM.renderToString(App())))

})


app.get('*', (req,res)=>{
  res.send(indexTemplate(ReactDOM.renderToString(App())))
})






app.listen(PORT,()=>{
  console.log(`server started on port http://localhost:${PORT}`)
})