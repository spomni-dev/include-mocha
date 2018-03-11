describe( 'The file "include-mocha.js" is reloaded', function(){

  describe( 'Check global vars after includeMocha', function(){

    //-- The global var "mocha" should be function.
    //-- The member "name" of the variable "mocha" should be equal to "Mocha".
    //


    //-- The global var "chai" should contain an object of the class "Object" if "includeMocha.option.useChai" is true.
    //-- The global var "chai" should has the defined members "Assertion" and "AssertionError" if "includeMocha.option.useChai" is true.
    //
    //-- The global var "assert" should be function if "includeMocha.option.useChai" and "includeMocha.option.defineAssert" are true.
    //-- The global var "aseert" should has the defined members "Throw" and "changes" if "includeMocha.option.useChai" and "includeMocha.option.defineAssert" are true.
  });

});

includeMocha.onDOMContentLoaded();