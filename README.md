# react-native-headers
Simple HTML like header elements for react-native

##Installation
```bash
npm install react-native-headers --save
```

##Use
Reference node module, export variable components.
```javascript
var {H1, H2, H3, H4, H5, H6} = require('../components/htmlElements');
```

Now, just reference and use like you would with html
```xml
        <H1>{this.props.foo}</H1>
        <H2>{this.props.bar}</H2>
        <H3>this is an H3 or header 3</H3>
        <H4>...and so on</H4>
```        


Currently only addresses font sizes.  Yes, this is a very simple implementation.  May address things like line-height, margins, padding etc in the future.
