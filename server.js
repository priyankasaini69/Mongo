const express = require('express');
const app = express();


const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
mongoose.connect("mongodb://127.0.0.1:27017/first", { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log('connected')).then(() => {
    const NewSchema = new mongoose.Schema({
        name: String,
        age: Number
    });
    
    const newModel = new mongoose.model('Collection', NewSchema);
    
    const data = new newModel({ name:'messy', age:30 });
    const data1 = new newModel({ name:'priyanka', age:21 });
    // data.save();
    data1.save().then(() => {
        newModel.collection.drop();
    });
    
    // data1
})
.catch(e=>console.log(e));








// app.listen(5000, () => {
//     console.log(`server connected`);
// })

// orm object relational mapper