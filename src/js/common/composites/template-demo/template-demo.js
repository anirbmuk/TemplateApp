define(['ojs/ojcore',
        'knockout',
        'ojs/ojcollapsible'],
function(oj, ko) {
    
    function TemplateDemoModel(context) {
        
        const self = this;
        self.composite = context.element;
        
        context.props.then(properties => {
            self.searchGroupTemplate = properties.searchFormMetadata;
        });
    }
    
    return TemplateDemoModel;
    
});