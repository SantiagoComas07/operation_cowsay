import { logic } from '../services/operations.js';
import cowsay from 'cowsay'






function operation(req,res) {

    try{
        const {A,B} = req.query;


       let a = Number(A);
       let b = Number(B);

        if(Number.isNaN(a) || Number.isNaN(b)){
            res.status(400).send('please add valids numbers')
        }

        let sumRespond = logic.sum(a, b);
        let substrationRespond = logic.subtraction(a, b);
        let multiplicationRespond = logic.multiplication(a, b);
        let divisionRespond = logic.division(a, b);


const message = [

cowsay.say({
            text: `sum: ${sumRespond}`,
            e: "oO",
            T: "U "
        }),

cowsay.say({
            text: `subtraction: ${substrationRespond}`,
            e: "xx",
            T: "U "
        }),


cowsay.say({
            text: `multiplication: ${multiplicationRespond}`,
            e: "o^",
            T: "U "
        }),


cowsay.say({
            text: `division: ${divisionRespond}`,
            e: "ww",
            T: "U "
        })
    ].join('\n\n');
res.type('text/plain');
res.send(message);


    }catch(error){
        console.log("There is an error: ", error);
    }
}

export default operation;