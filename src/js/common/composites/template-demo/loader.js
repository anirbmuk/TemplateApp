define(['ojs/ojcomposite', 'text!./template-demo.html', './template-demo', 'text!./component.json'],
function(Composite, view, viewModel, metadata) {
    Composite.register('template-demo', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
});