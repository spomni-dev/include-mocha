//-- Define includeMocha on the first loading of this file.
if ( includeMocha === undefined ){

  /** @function includeMocha()
    *
     * @description - Include mocha.js, chai.js (option), spec files and css styles in document. Setup and run mocha. Define global variables: mocha, chai (option), assert (option).
     *
     * @param {string|array|object} option
     * @param {string|array} option - use like option.spec
     *
     * @param {string|null} option.specRoot = "spec/" - Path to the folder that contains test specification files.
     * @param {string|array} option.specPath - Path or paths to the test specification file or files.
     *
     * @param {string|null} option.cssRoot = "css/" - Path to the folder that contains css files.
     * @param {string|array|null} option.cssPath = "mocha.css" - Path|patches to the css file.
     *
     * @param {bool} option.useChai = true - If true, then include chai.js.
     * @param {bool} option.defineAssert = true - If true, then define the variable "assert" as chai.assert.
     *
     * @param {string|null} option.libRoot = "lib/" - Path to the folder that contains lib files.
     * @param {string} option.mochaPath = "mocha.js" - Path to the mocha.js file.
     * @param {string} option.chaiPath = "chai.js" - Path to the chai.js file.
     *
     * @param {string|object} option.mochaSetup = "bdd" - Options to use in mocha.setup().
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
    function includeMocha ( option ){
      //-- Check input params
        //-- Check type of the param "option"
          if ( !isString( option )
            && !isArray( option )
            && !isSimpleObject( option )
            ){
            return new Error( 'Invalid input param. The param "option" should be string or array or [object Object]' );
          }
        //-- If the param "option" is array
          if ( isArray( option ) ){
            for (var i=0; i<option.length; i++){
              if ( !isString( option[i] ) ){
                return new Error( 'Invalid input param. Each element of the array "options" should be string.' );
              }
            }

          }
        //-- If the param "option" is object
          if ( isSimpleObject( option ) ){
            //-- Should return an object of the class "Error" if the param "option.specPath" is not string or array.
              if ( !isString( option.specPath )
                && !isArray( option.specPath )
                ){
                return new Error( 'Invalid input param. The option "option.specPath" should be string or array.' )
              }
            //-- Should return an object of the class "Error" if the param "option.specPath" is array and any its element is not string.
              if ( isArray( option.specPath ) ){
                for (var i=0; i<option.specPath.length; i++){
                  if ( !isString( option.specPath[i] ) ){
                    return new Error( 'Invalid input param. The option "option.specPath should contain only strings.' );
                  }
                }
              }
            //-- Should return an object of the class "Error" if the param "option.specRoot" is not string or null or undefined.
              if ( !isString( option.specRoot )
                && !isNull( option.specRoot )
                && !isUndefined( option.specRoot )
              ){
                return new Error( 'Invalid input param. The param "option.specRoot" should be string or null or undefined.' );
              }

            //-- Should return an object of the class "Error" if the param "option.cssPath" is not string or array or null or undefined.
              if ( !isString( option.cssPath )
                && !isArray( option.cssPath )
                && !isNull( option.cssPath )
                && !isUndefined( option.cssPath )
                ){
                  return new Error( 'Invalid input param. The param "option.cssPath" should be string or array or null or undefined.' );
              }
            //-- Should return an object of the class "Error" if the param "option.specPath" is array and any its alement is not string.
              if ( isArray( option.cssPath ) ){
                for (var i=0; i<option.cssPath.length; i++){
                  if ( !isString( option.cssPath[i] ) ){
                    return new Error( 'Invalid input param. The array "option.cssPath should contain only strings.' );
                  }
                }

              }
            //-- Should return an object of the class "Error" if the param "option.cssRoot" is not string or null or undefined.
              if ( !isString( option.cssRoot )
                && !isNull( option.cssRoot )
                && !isUndefined( option.cssRoot )
                ){
                return new Error( 'Invalid input param. The param "option.cssRoot" should be string or null or undefined.' );
              }
            //-- Should return an object of the class "Error" if the param "option.useChai" is not boolean or null or undefined.
              if ( !isBoolean( option.useChai )
                && !isNull( option.useChai )
                && !isUndefined( option.useChai )
                ){
                return new Error( 'Invalid input param. The param "option.useChai" should be boolean or null or undefined.' );
              }
            //-- Should return an object of the class "Error" if the param "option.defineAssert" is not boolean or null or undefined.
              if ( !isBoolean( option.defineAssert )
                && !isNull( option.defineAssert )
                && !isUndefined( option.defineAssert )
                ){
                return new Error( 'Invalid input param. The param "option.defineAssert" should be boolean or null or undefined.' );
              }
            //-- Should return an object of the class "Error" if the param "option.mochaPath" is not string or undefined.
              if ( !isString( option.mochaPath )
                && !isUndefined( option.mochaPath )
                ){
                return new Error( 'Invalid input param. The param "option.mochaPath" should be string or undefined.' );
              }
            //-- Should return an object of the class "Error" if the param "option.useChai" is true and the param "option.chaiPath" is not string or undefined.
              if ( option.useChai
                && !isString( option.chaiPath )
                && !isUndefined( option.chaiPath )
                ){
                return new Error( 'Invalid input param. The param "option.chaiPath" should be string  or undefined.' );
              }
            //-- Should return an object of the class "Error" if the param "option.libRoot" is not string or undefined.
              if ( !isString( option.libRoot )
                && !isUndefined( option.libRoot )
                ){
                return new Error( 'Invalid input param. The param "option.libRoot" should be string or undefined.' );
              }
            //-- Should return an object of the class "Error" if the param "option.mochaSetup" is not string or undefined or an object of the class "Object".
              if ( !isString( option.mochaSetup )
                && !isUndefined( option.mochaSetup )
                && !isSimpleObject( option.mochaSetup )
                ){
                  return new Error( 'Invalid input param. The param "option.mochaSetup" should be string or undefined or an object of the class Object.' )
              }
          }
      //
      //-- Check global vars before init
        if ( !isUndefined( window.mocha ) ){
          return new Error( 'Tried redefine the global var "mocha".' );
        }
        if ( ( option.useChai || isUndefined( option.useChai ) )
          && !isUndefined( window.chai )
          ){
          return new Error( 'Tried redefine the global var "chai".' );
        }
        if ( ( option.useChai || isUndefined( option.useChai ) )
          && ( option.defineAssert || isUndefined( option.defineAssert ) )
          && !isUndefined( window.assert )
          ){
          return new Error( 'Tried redefine the global var "assert".' );
        }
      //
      //-- Support functions
        function isString( param ){
          if ( typeof param == 'string' ) return true;
          return false;
        }
        function isArray( param ){
          if ( param instanceof Array ) return true;
          return false;
        }
        function isSimpleObject( param ){
          if ( typeof param == 'object'
            && param !== null
            && param.toString() == '[object Object]'
          ) return true;

          return false;
        }
        function isNull( param ){
          if ( typeof param == 'object' && param === null )
            return true;
          return false;
        }
        function isUndefined( param ){
          if ( param === undefined ) return true;
          return false;
        }
        function isBoolean( param ){
          if ( typeof param == 'boolean' ) return true;
          return false;
        }
      //
    }
    includeMocha.__proto__ = IncludeMocha.prototype;
    includeMocha.option = null;
    includeMocha.runner = null;
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
    includeMocha.includeScript = function( src, async ){
      if ( typeof(src) != 'string' ){
        return new Error('Invalid input param. The param "src" should be string.');
      };
      if ( async !== undefined && typeof(async) != 'boolean' ){
        return new Error('Invalid input param. The param "async" should be boolean or undefined.');
      }

      async = async || false;

      var script = document.createElement( 'script' );
      script.src = src;
      script.async = async;

      document.head.appendChild( script );

      return script;

    }
  /** @method includeStylesheet() - Include in document a css file.
   * @memberOf includeMocha()
   *
   * @description Insert a DOM-node "link" into the DOM-node "head".
   *
   * @param {string} href
   *
   * @returns {HTMLLinkElement|Error}
   *
   */
    includeMocha.includeStylesheet = function( href ){
      if ( typeof(href) != 'string' ){
        return new Error('Invalid input param. The param "href" should be string.');
      }

      var link = document.createElement( 'link' );
      link.href = href;

      document.head.appendChild( link );

      return link;
    }
  //
  function IncludeMocha(){
  }
  IncludeMocha.prototype.__proto__ = Function.prototype;
  //
}