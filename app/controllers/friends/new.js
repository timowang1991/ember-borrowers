import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        save(model) {
            console.log('+- save action in friends new controller');

            this.transitionToRoute('friends.show', model);
        },
        cancel() {
            console.log('+- cancel action in friends new controller');

            this.transitionToRoute('friends.index');
        }
    }
});
