const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.get("/",async (req,res)=>{
	res.status(200).json({status:"ok"})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
