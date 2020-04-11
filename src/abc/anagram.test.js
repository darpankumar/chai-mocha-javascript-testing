import { checkIsAnagram } from './anagram';
import { expect } from 'chai';

describe('checkIsAnagram function test',()=>{

   // it.only('should return true when pass both strings empty', ()=>{
   it('should return true when pass both strings empty', ()=>{
    const expectedValue= true;
    const actualValue =  checkIsAnagram('', '');

    expect(expectedValue).to.equal(actualValue);
   })

   it('should return false when one of the string is empty and other is not', ()=> {
      
      const expectedValue= false;
      const actualValue =  checkIsAnagram('', 'abc');

      expect(expectedValue).to.equal(actualValue);
   })

   it('should return true when two string are same', ()=> {
      
      const expectedValue= true;
      const actualValue =  checkIsAnagram('abc', 'abc');

      expect(expectedValue).to.equal(actualValue);
   })

   it('should return true when two string are anagram', ()=> {
      
      const expectedValue= true;
      const actualValue =  checkIsAnagram('acb', 'bac');

      expect(expectedValue).to.equal(actualValue);
   })

   it('should return false when two string are not anagram', ()=> {
      
      const expectedValue= false;
      const actualValue =  checkIsAnagram('acbc', 'bac');

      expect(expectedValue).to.equal(actualValue);
   })

   it('should return true even if one is capital other is small but both anagram', ()=> {
      
      const expectedValue= true;
      const actualValue =  checkIsAnagram('acb', 'ABC');

      expect(expectedValue).to.equal(actualValue);
   })
})