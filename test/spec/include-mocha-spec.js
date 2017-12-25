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