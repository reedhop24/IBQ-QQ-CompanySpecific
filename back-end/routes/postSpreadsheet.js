const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const XLSX = require('xlsx');
const upload = require('express-fileupload');

app.use(bodyParser.json());
app.use(upload());

app.post('/', async (req, res) => {
    try {
        const sheet = (XLSX.read(req.files.agency.data, {type:'buffer'}));
        const companySpecifics = sheet.Sheets.Sheet1;

        let questionObj = {};
        let questions;
        let allQuestions = [];
        for(const x in companySpecifics) {
            // console.log(x, companySpecifics[x]);
            if(x[1] == '1') {
                questionObj[companySpecifics[x]['v']] = '';
            } else if(x[0] == 'A') {
                questions = {
                    ...questionObj
                }
                questions[companySpecifics['A1']['v']] = companySpecifics[x]['v']; 
            } else if(x[0] == 'E') {
                questions[companySpecifics['E1']['v']] = companySpecifics[x]['v']; 
                allQuestions.push(questions)
            } else if(x[0] == 'B' || x[0] == 'C' || x[0] == 'D') {
                console.log(`${x[0]}1`)
                questions[companySpecifics[`${x[0]}1`]['v']] = companySpecifics[x]['v']; 
            }
        }

        res.json(allQuestions);
    }
    catch(err) {
        res.json(err);
    }
    
});


module.exports = app;