/**
 * @module //new-module
 * @requires montage/core/core
 */
var Montage = require("montage/core/core").Montage;
/**
 * @class NewModule
 * @extends Montage
 */
exports.NewModule = Montage.specialize(/** @lends NewModule# */ {
    constructor: {
        value: function NewModule() {
            this.super();
        }
    }
});
