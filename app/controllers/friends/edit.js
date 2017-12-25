import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        save(model) {
            this.transitionToRoute('friends.show', model);
        },
        cancel(model) {
            this.transitionToRoute('friends.show', model);
        }
    }
});
