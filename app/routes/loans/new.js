import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.createRecord('loan', {
            friend: this.modelFor('friends/show')
        });
    },

    resetController: function (controller, isExiting) {
        if (isExiting) {
            var model = controller.get('model');

            if (model.get('isNew')) {
                model.destroyRecord();
            }
        }
    }
});
