import MyTextOutput,{SimpleFormatter} from '../lib'
import 'mocha'
import {expect} from 'chai'
describe('My TextOutput test',()=>{
    it('1. Give input text abc should be ÄßĆ',()=>{
        let inputText ='abc';
        let myoutput = new MyTextOutput(new SimpleFormatter());
        let result = myoutput.getResult(inputText);
        expect('ÄßĆ').to.eq(result)
    })
    it('2. When forgot given foramtter should throw exception ',()=>{
        let inputText ='abc';
        let myoutput = new MyTextOutput();
        expect(function(){
            let result = myoutput.getResult(inputText);
        }).to.throw('Text Formatter is required')
    })
})