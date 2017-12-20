describe( 'The file "include-mocha.js" is reloaded', function(){

  describe( 'Check global vars after includeMocha', function(){

    it( 'The global var "mocha" should be function.', function(){
      assert.isFunction( window.mocha );
    });
    it( 'The member "name" of the variable "mocha" should be equal to "Mocha".', function(){
      assert( mocha.name === "Mocha" );
    });

    it( 'The global var "chai" should contain an object of the class "Object"', function(){
      assert.isObject( window.chai );
    });
    it( 'The global var "chai" should has the defined members "Assertion" and "AssertionError"', function(){
      assert(  chai.Assertion !== undefined
            && chai.AssertionError !== undefined
      );
    });

    it( 'The global var "assert" should be function', function(){
      assert.isFunction( window.assert );
    });
    it( 'The global var "assert" should has the defined members "Throw" and "changes"', function(){
      assert(
        assert.Throw !== undefined
        &&
        assert.changes !== undefined
      );
    });
  });

});

includeMocha.onDOMContentLoaded();