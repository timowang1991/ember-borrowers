import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.createRecord('friend');
    },
    // activate() {
    //     console.log('------ activate hook called -------');
    // },
    // deactivate() {
    //     console.log('------ deactivate hook called ------');
    // },
    resetController: function (controller, isExiting) {
        if (isExiting) {
            // console.log('-------- resetController hook called -------');
            var model = controller.get('model');

            // Because we are leaving the Route we verify if the model is in
            // 'isNew' state, which means it wasn't saved to the backend
            //
            if (model.get('isNew')) {
                // We call DS#destroyRecord() which removes it from the store
                //
                model.destroyRecord();
            }

        }
    }
});
