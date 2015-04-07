
var React = require('react-native');
var flattenStyle = require('flattenStyle');
var {StyleSheet, Text} = React;
var baseStyles = {};
var merge = require('merge');

var styles = StyleSheet.create({
  base: { },
});

//based on Chrome's internal stylesheet
//http://trac.webkit.org/browser/trunk/Source/WebCore/css/html.css
var emTable = {
  "H1" : 2,
  "H2" : 1.5,
  "H3" : 1.17,
  "H4" : 1,
  "H5" : .83,
  "H6" : .67
};



var createSimpleTag = function(tagName ){
  baseStyles[tagName] = {
    fontSize : emTable[tagName] * (window.BASE_FONT_SIZE || 18),//standard base font size
    fontWeight : 'bold'
  };
  return React.createClass.call(undefined, {
      render: function() {
        var style = flattenStyle([baseStyles[tagName], this.props.style]);

        return <Text style={style} >{this.props.children}</Text>;
    }
  });
};

var H1 = createSimpleTag(['H1']),
    H2 = createSimpleTag(['H2']),
    H3 = createSimpleTag(['H3']),
    H4 = createSimpleTag(['H4']),
    H5 = createSimpleTag(['H5']),
    H6 = createSimpleTag(['H6']);

StyleSheet.create(baseStyles);

module.exports = {
  H1, H2, H3, H4, H5, H6
};