// ===================================================
// Helper function to set the layout type options
// ===================================================
module.exports = function (type, comparedTo, options) {
    if (type === comparedTo) {
        return options.fn(this);
    }
};