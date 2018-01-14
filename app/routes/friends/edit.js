import Route from '@ember/routing/route';

export default Route.extend({
    resetController(controller, isExiting) {
        if (isExiting) {
            var model = controller.get('model');
            model.rollbackAttributes(); // This will return the attributes to their initial state if the model hasDirtyAttributes
        }
    }
});
