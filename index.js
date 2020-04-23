const express = require("express");
const app = express(); 

app.use(express.static(__dirname + '/public')); 

const PORT = process.env.PORT || 3004; 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});