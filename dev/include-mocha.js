/* 
  Script define module includeMocha as window.includeMocha
*/

/** @function includeMocha()
 *
 * @description - Include mocha.js, chai.js (option), spec files and css styles into document. Setup and run mocha. Define global vars: mocha, chai (option), assert (option).
 * 
 * @param {string|array|object} option
 * @param {string|array} option - use as option.spec
 * 
 * @param {string|null} option.specRoot = "spec/" - Path to the folder that contains the spec files.
 * @param {string|array} option.specPath - Path|patches to the spec file.
 *
 * @param {string|null} option.cssRoot = "css/" - Path to the folder that contains css files.
 * @param {string|array} option.cssPath = option.cssRoot+"mocha.css" - Path|patches to the css file.
 *
 * @param {bool} option.useChai = true - If true, then include chai.js.
 * @param {bool} option.defineAssert = true - If true, then define var "assert" as chai.assert.
 *
 * @param {string|null} option.libRoot = "lib/" - Path to the folder that contains lib files.
 * @param {string} option.mochaPath = option.libRoot+"mocha.js" - Path to the mocha.js file.
 * @param {string} option.chaiPath = option.libRoot+"chai.js" - Path|patches to the chai.js file.
 * 
 * @param {string|object} option.mochaSetup = "bdd" - Option for use in mocha.setup().
 *
 * @returns {undefinded|Error}
 *
 * @field {object} option
 * @field {Runner} runner
 *
 * @method {undefined|Error} includeScript
 * @method {undefined|Error} includeStylesheet
 *
 */