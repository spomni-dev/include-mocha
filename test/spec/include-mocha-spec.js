/** @function includeMocha()
 *
 * @description - Include mocha.js, chai.js (option), spec files and css styles in document. Setup and run mocha. Define global variables: mocha, chai (option), assert (option).
 *
 * @param {string|array|object} option
 * @param {string|array} option - use like option.spec
 *
 * @param {string|null} [option.specRoot = "spec/"] - Path to the folder that contains test specification files.
 * @param {string|array} option.specPath - Path or paths to the test specification file or files.
 *
 * @param {string|null} [option.cssRoot = "css/"] - Path to the folder that contains css files.
 * @param {string|array|null} [option.cssPath = "mocha.css"] - Path|patches to the css file.
 *
 * @param {bool} [option.useChai = true] - If true, then include chai.js.
 * @param {bool} [option.defineAssert = true] - If true, then define the variable "assert" as chai.assert.
 *
 * @param {string|null} [option.libRoot = "lib/"] - Path to the folder that contains lib files.
 * @param {string} [option.mochaPath = "mocha.js"] - Path to the mocha.js file.
 * @param {string} [option.chaiPath = "chai.js"] - Path to the chai.js file.
 *
 * @param {string|object} [option.mochaSetup = "bdd"] - Options to use in mocha.setup().
 *
 * @returns {true|Error}
 *
 * @member {object} option
 * @member {Runner} runner - Runner of mocha.js
 *
 * @method {HTMLScriptElement|Error} includeScript - Include in document a script file.
 * @method {HTMLLinkElement|Error} includeStylesheet - Include in document a stylesheet file.
 *
 */
//
/** @method includeScript() - Include in document a script file.
 * @memberOf includeMocha()
 *
 * @description Insert a DOM-node "script" into the DOM-node "head".
 *
 * @param {string} src
 * @param {boolean} [async = false]
 *
 * @returns {HTMLScriptElement|Error}
 *
 */
//
/** @method includeStylesheet() - Include in document a css file.
 * @memberOf includeMocha()
 *
 * @description Insert a DOM-node "link" into the DOM-node "head".
 *
 * @param {string} href
 *
 * @returns {HTMLLinkElement|Error}
 *
 *
//
//
/* include-mocha.js */
  //
  /* include-mocha.js loaded */
    //
    /* includeMocha */
      //-- Should contain a function of the class "IncludeMocha".
    //
    /* includeMocha.option */
      //-- Should contain null.
    //
    /* includeMocha.runner */
      //-- Should contain null.
    //
    /* includeMocha.includeScript( src, async ) */
      //
      //-- Should return an object of class "Error" if the param "src" is not string.
      //-- Should return an object of class "Error" if the param "async" is not boolean or undefined.
      //
      //-- Should insert a script node into the node "head" as last child.
      //-- The attribute "src" of the inserted node should be equal to the param "src".
      //-- The attribute "async" of the inserted node should be equal to the param "async" if param "async" is defined.
      //-- The attribute "async" of the inserted node should be false if the param "async" is undefined.
      //
      //-- Should return an object of the HTMLScriptElement inserted in document.
    //
    /* includeMocha.includeStylesheet( href ) */
      //
      //-- Should return an object of the class "Error" if the param "href" is not string.
      //
      //-- Should insert a node "link" into the node "head" as last child.
      //-- The attribute "href" of the inserted node should be equal to the param "href".
      //
      //-- Should return an object of the class "HTMLLinkElement" inserted in document.
    //
  //
  /* includeMocha( option ) */
    //
    /* Check input params */
      //
      /* Check type of the param "option" */
        //-- Should return an object of the class "Error" if the param "option" is not string or array or object of the class "Object".
      //
      /* If the param "option" is array */
        //-- Should return an object of the class "Error" if any element of the array "option" is not string.
      //
      /* If the param "option" is object */
        //
        //-- Should return an object of the class "Error" if the param "option.specPath" is not string or array.
        //-- Should return an object of the class "Error" if the param "option.specPath" is array and any its element is not string.
        //-- Should return an object of the class "Error" if the param "option.specRoot" is not string or null or undefined.
        //
        //-- Should return an object of the class "Error" if the param "option.cssPath" is not string or array or null or undefined.
        //-- Should return an object of the class "Error" if the param "option.specPath" is array and any its alement is not string.
        //-- Should return an object of the class "Error" if the param "option.specRoot" is not string or null or undefined.
        //
        //-- Should return an object of the class "Error" if the param "option.useChai" is not boolean or null or undefined.
        //-- Should return an object of the class "Error" if the param "option.defineAssert" is not boolean or null or undefined.
        //
        //-- Should return an object of the class "Error" if the param "option.mochaPath" is not string or undefined.
        //-- Should return an object of the class "Error" if the param "option.useChai" is true and the param "option.chaiPath" is not string or undefined.
        //-- Should return an object of the class "Error" if the param "option.libRoot" is not string or undefined.
        //
        //-- Should return an object of the class "Error" if the param "option.mochaSetup" is not string or an object of the class "Object".
      //
    //
    /* Check global vars before init */
      //
      //-- Should return an object of the class "Error" if the global variable "mocha" is defined.
      //-- Should return an object of the class "Error" if the global variable "chai" is defined and the param "useChai" is true.
      //-- Should return an object of the class "Error" if the global variable  "assert" is defined and the params "useChai" and "defineAssert" are true.
    //
    /* Check init of the member "includeMocha.option" */
      //
      /* includeMocha.option.specPath */
        //
        //-- Should be array.
        //-- Should contain one element equal to the param "option.specPath" if it is string.
        //-- Should contain all elements of the param "option.specPath" if it is array.
      //
      /* includeMocha.option.specRoot */
        //
        //-- Should be string or null.
        //-- Should be equal to "spec/" if the param "option.specRoot" is undefined.
        //-- Should be equal to the param "option.specRoot" if it is defined.
      //
      /* includeMocha.option.cssPath */
        //
        //-- Should be array or null
        //-- Should contain one element "mocha.js" if the param "option.cssPath" is undefined.
        //-- Should be equal to the param "option.cssPath" if it is defined.
      //
      /* includeMocha.option.cssRoot */
        //
        //-- Should be string or null
        //-- Should be equal to "css/" if the param "option.cssRoot" is undefined.
        //-- Should be equal to the param "option.cssRoot" if ot is defined.
      //
      /* includeMocha.option.useChai */
        //
        //-- Should be boolean
        //-- Should be equal to true if the param "option.useChai" is undefined.
        //-- Should be equal to the param "option.useChai" if it is defined.
      //
      /* includeMocha.option.defineAssert */
        //
        //-- Should be boolean
        //-- Should be equal to true if the param "option.defineAssert" is undefined.
        //-- Should be equal to the param "option.defineAssert" if it is defined.
      //
      /* includeMocha.option.mochaPath */
        //
        //-- Should be string
        //-- Should be equal to "mocha.js" if the param "option.mochaPath" is undefined.
        //-- Should be equal to the param "option.mochaPath" if it is defined.
      //
      /* includeMocha.option.chaiPath */
        //
        //-- Should be string
        //-- Should be equal to "chai.js" if the param "option.chaiPath" is undefined.
        //-- Should be equal to the param "option.chaiPath" if it is defined.
      //
      /* includeMocha.option.libRoot */
        //-- Should be string or null
        //-- Should be equal to "lib/" if the param "option.libRoot" is undefined.
        //-- Should be equal to the param "option.libRoot" if it is defined.
      //
      /* includeMocha.option.mochaSetup */
        //
        //-- Should be string or object of the class "Object".
        //-- Should be equal to "bdd" if the param "option.mochaSetup" is undefined.
        //-- Should be equal to the param "option.mochaSetup" if it is defined.
      //
    //
    /* Check the inclusion of css and lib files */
      //
      /* Check the inclusion stylesheets */
        //
        //-- The DON-node "head" should contain the DOM-node "link" for each element of the array "includeMocha.option.cssPath" for it is not null.
        //-- The attribute "href" of each inserted node should be equal to the string (includeMocha.option.cssRoot + includeMocha.option.cssPath[i]) if includeMocha.option.cssPath is not null.
      //
      /* Check the inclusion of lib files */
        //
        //-- The DON-node "head" should contain the DOM-node "script" that has the attribute "src" equal to the string (includeMocha.option.libRoot + includeMocha.option.mochaPath).
        //-- The DON-node "head" should contain the DOM-node "script" that has the attribute "src" equal to the string (includeMocha.option.libRoot + includeMocha.option.chaiPath) if the includeMocha.option.useChai is true.
      //
    //
    /* Check mocha.setup() errors */
      //
      // Should return an object of the class "Error" if the function "mocha.setup()" threw error.
    //
    /* Check the inclusion of spec files */
      //
      //-- The DON-node "head" should contain the DOM-node "script" for each element of the array "includeMocha.option.cssPath".
      //-- The attribute "src" of each inserted node should be equal to the string (includeMocha.option.cssRoot + includeMocha.option.specPath[i]).
    //
    /* Check mocha.run() errors */
      //
      // Should return an object of the class "Error" if the function "mocha.run()" threw error.
    //
    /* Check global vars after includeMocha */
      //
      //-- The global var "mocha" should be function.
      //-- The member "name" of the variable "mocha" should be equal to "Mocha".
      //
      //-- The global var "chai" should contain an object of the class "Object" if "includeMocha.option.useChai" is true.
      //-- The global var "chai" should has the defined members "Assertion" and "AssertionError" if "includeMocha.option.useChai" is true.
      //
      //-- The global var "assert" should be function if "includeMocha.option.useChai" and "includeMocha.option.defineAssert" are true.
      //-- The global var "aseert" should has the defined members "Throw" and "changes" if "includeMocha.option.useChai" and "includeMocha.option.defineAssert" are true.
    //
  //
//
describe( "include-mocha.js", function(){

  var assert = testChai.assert;

  describe( "include-mocha.js loaded", function(){

    describe( "includeMocha", function(){
      it( 'Should contain a function of the class "IncludeMocha".', function(){
        assert.instanceOf( includeMocha, Function);
        assert.instanceOf( includeMocha, IncludeMocha);
      });
    });

    describe( "includeMocha.option", function(){
      it( 'Should contain null.', function(){
        assert.isNull( includeMocha.option );
      });
    });

    describe( 'includeMocha.runner', function(){
      it( 'Should contain null.', function(){
        assert.isNull( includeMocha.runner );
      });
    });

    describe( 'includeMocha.includeScript( src, async )', function(){

      it( 'Should return an object of class "Error" if the param "src" is not string.', function(){
        var testArr = [
          undefined,
          null,
          true,
          1,
          1.2,
          [],
          {}
        ]
        for (var i=0; i<testArr.length; i++){
          assert.instanceOf( includeMocha.includeScript( testArr[i] ), Error );
        }
      });

      it( 'Should return an object of class "Error" if the param "async" is not boolean or undefined.', function(){
        var testArr = [
          null,
          "true,",
          1,
          1.2,
          [],
          {}
        ]
        for (var i=0; i<testArr.length; i++){
          assert.instanceOf( includeMocha.includeScript( "", testArr[i] ), Error );
        }
      });

      it( 'Should insert a script node into the node "head" as last child.', function(){
        var oldLastChild = document.head.lastChild;
        includeMocha.includeScript( "test-unclude-script" );
        var newLastChild = document.head.lastChild;

        assert( oldLastChild !== newLastChild );

        document.head.removeChild( newLastChild );

      });

      it( 'The attribute "src" of the inserted node should be equal to the param "src"', function(){

        var src = 'test-unclude-script';
        includeMocha.includeScript( src );
        var newLastChild = document.head.lastChild;

        assert( newLastChild.getAttribute( "src" ) === src );

        document.head.removeChild( newLastChild );
      });

      it( 'The attribute "async" of the inserted node should be equal to the param "async" if param "async" is defined.', function(){

        var async = true;
        includeMocha.includeScript( 'test-unclude-script', async );
        var newLastChild = document.head.lastChild;

        assert( newLastChild.async === async );

        document.head.removeChild( newLastChild );
      });

      it( 'The attribute "async" of the inserted node should be false if the param "async" is undefined.', function(){

        includeMocha.includeScript( 'test-unclude-script' );
        var newLastChild = document.head.lastChild;

        assert( newLastChild.async === false );

        document.head.removeChild( newLastChild );
      });

      it( 'Should return an object of the HTMLScriptElement inserted in document.', function(){

        var result = includeMocha.includeScript( 'test-unclude-script' );
        var newLastChild = document.head.lastChild;

        assert( newLastChild === result );

        document.head.removeChild( newLastChild );
      });
    });

    describe( 'includeMocha.includeStylesheet( href )', function(){

      it( 'Should return an object of the class "Error" if the param "href" is not string.', function(){

        var testArr = [
          undefined,
          null,
          true,
          1,
          [],
          {}
        ]

        for (var i=0; i<testArr.length; i++){
          assert.instanceOf( includeMocha.includeStylesheet(), Error );
        }
      });

      it( 'Should insert a node "link" into the node "head" as last child.', function(){

        var oldLastChild = document.head.lastChild;
        includeMocha.includeStylesheet( "test-unclude-style" );
        var newLastChild = document.head.lastChild;

        assert( oldLastChild !== newLastChild );

        document.head.removeChild( newLastChild );

      });

      it( 'The attribute "href" of the inserted node should be equal to the param "href".', function(){

        var href = 'test-unclude-link';
        includeMocha.includeStylesheet( href );
        var newLastChild = document.head.lastChild;

        assert( newLastChild.getAttribute( "href" ) === href );

        document.head.removeChild( newLastChild );
      });

      it( 'Should return an object of the class "HTMLLinkElement" inserted in document.', function(){

        var result = includeMocha.includeStylesheet( 'test-unclude-link' );
        var newLastChild = document.head.lastChild;

        assert( newLastChild === result );

        document.head.removeChild( newLastChild );
      });
    });
  });
  /* includeMocha( option ) */
    //
    /* Check input params */
      //
      /* Check type of the param "option" */
        //-- Should return an object of the class "Error" if the param "option" is not string or array or object of the class "Object".
      //
      /* If the param "option" is array */
        //-- Should return an object of the class "Error" if any element of the array "option" is not string.
      //
      /* If the param "option" is object */
        //
        //-- Should return an object of the class "Error" if the param "option.specPath" is not string or array.
        //-- Should return an object of the class "Error" if the param "option.specPath" is array and any its element is not string.
        //-- Should return an object of the class "Error" if the param "option.specRoot" is not string or null or undefined.
        //
        //-- Should return an object of the class "Error" if the param "option.cssPath" is not string or array or null or undefined.
        //-- Should return an object of the class "Error" if the param "option.specPath" is array and any its alement is not string.
        //-- Should return an object of the class "Error" if the param "option.specRoot" is not string or null or undefined.
        //
        //-- Should return an object of the class "Error" if the param "option.useChai" is not boolean or null or undefined.
        //-- Should return an object of the class "Error" if the param "option.defineAssert" is not boolean or null or undefined.
        //
        //-- Should return an object of the class "Error" if the param "option.mochaPath" is not string or undefined.
        //-- Should return an object of the class "Error" if the param "option.useChai" is true and the param "option.chaiPath" is not string or undefined.
        //-- Should return an object of the class "Error" if the param "option.libRoot" is not string or undefined.
        //
        //-- Should return an object of the class "Error" if the param "option.mochaSetup" is not string or an object of the class "Object".
      //
    //
    /* Check global vars before init */
      //
      //-- Should return an object of the class "Error" if the global variable "mocha" is defined.
      //-- Should return an object of the class "Error" if the global variable "chai" is defined and the param "useChai" is true.
      //-- Should return an object of the class "Error" if the global variable  "assert" is defined and the params "useChai" and "defineAssert" are true.
    //
    /* Check init of the member "includeMocha.option" */
      //
      /* includeMocha.option.specPath */
        //
        //-- Should be array.
        //-- Should contain one element equal to the param "option.specPath" if it is string.
        //-- Should contain all elements of the param "option.specPath" if it is array.
      //
      /* includeMocha.option.specRoot */
        //
        //-- Should be string or null.
        //-- Should be equal to "spec/" if the param "option.specRoot" is undefined.
        //-- Should be equal to the param "option.specRoot" if it is defined.
      //
      /* includeMocha.option.cssPath */
        //
        //-- Should be array or null
        //-- Should contain one element "mocha.js" if the param "option.cssPath" is undefined.
        //-- Should be equal to the param "option.cssPath" if it is defined.
      //
      /* includeMocha.option.cssRoot */
        //
        //-- Should be string or null
        //-- Should be equal to "css/" if the param "option.cssRoot" is undefined.
        //-- Should be equal to the param "option.cssRoot" if ot is defined.
      //
      /* includeMocha.option.useChai */
        //
        //-- Should be boolean
        //-- Should be equal to true if the param "option.useChai" is undefined.
        //-- Should be equal to the param "option.useChai" if it is defined.
      //
      /* includeMocha.option.defineAssert */
        //
        //-- Should be boolean
        //-- Should be equal to true if the param "option.defineAssert" is undefined.
        //-- Should be equal to the param "option.defineAssert" if it is defined.
      //
      /* includeMocha.option.mochaPath */
        //
        //-- Should be string
        //-- Should be equal to "mocha.js" if the param "option.mochaPath" is undefined.
        //-- Should be equal to the param "option.mochaPath" if it is defined.
      //
      /* includeMocha.option.chaiPath */
        //
        //-- Should be string
        //-- Should be equal to "chai.js" if the param "option.chaiPath" is undefined.
        //-- Should be equal to the param "option.chaiPath" if it is defined.
      //
      /* includeMocha.option.libRoot */
        //-- Should be string or null
        //-- Should be equal to "lib/" if the param "option.libRoot" is undefined.
        //-- Should be equal to the param "option.libRoot" if it is defined.
      //
      /* includeMocha.option.mochaSetup */
        //
        //-- Should be string or object of the class "Object".
        //-- Should be equal to "bdd" if the param "option.mochaSetup" is undefined.
        //-- Should be equal to the param "option.mochaSetup" if it is defined.
      //
    //
    /* Check the inclusion of css and lib files */
      //
      /* Check the inclusion stylesheets */
        //
        //-- The DON-node "head" should contain the DOM-node "link" for each element of the array "includeMocha.option.cssPath" for it is not null.
        //-- The attribute "href" of each inserted node should be equal to the string (includeMocha.option.cssRoot + includeMocha.option.cssPath[i]) if includeMocha.option.cssPath is not null.
      //
      /* Check the inclusion of lib files */
        //
        //-- The DON-node "head" should contain the DOM-node "script" that has the attribute "src" equal to the string (includeMocha.option.libRoot + includeMocha.option.mochaPath).
        //-- The DON-node "head" should contain the DOM-node "script" that has the attribute "src" equal to the string (includeMocha.option.libRoot + includeMocha.option.chaiPath) if the includeMocha.option.useChai is true.
      //
    //
    /* Check mocha.setup() errors */
      //
      // Should return an object of the class "Error" if the function "mocha.setup()" threw error.
    //
    /* Check the inclusion of spec files */
      //
      //-- The DON-node "head" should contain the DOM-node "script" for each element of the array "includeMocha.option.cssPath".
      //-- The attribute "src" of each inserted node should be equal to the string (includeMocha.option.cssRoot + includeMocha.option.specPath[i]).
    //
    /* Check mocha.run() errors */
      //
      // Should return an object of the class "Error" if the function "mocha.run()" threw error.
    //
    /* Check global vars after includeMocha */
      //
      //-- The global var "mocha" should be function.
      //-- The member "name" of the variable "mocha" should be equal to "Mocha".
      //
      //-- The global var "chai" should contain an object of the class "Object" if "includeMocha.option.useChai" is true.
      //-- The global var "chai" should has the defined members "Assertion" and "AssertionError" if "includeMocha.option.useChai" is true.
      //
      //-- The global var "assert" should be function if "includeMocha.option.useChai" and "includeMocha.option.defineAssert" are true.
      //-- The global var "aseert" should has the defined members "Throw" and "changes" if "includeMocha.option.useChai" and "includeMocha.option.defineAssert" are true.
    //
  //
});