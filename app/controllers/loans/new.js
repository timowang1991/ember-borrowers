import Controller from '@ember/controller';

export default Controller.extend({
    backToIndex(friend) {
        this.transitionToRoute('loans.index', friend);
    }
});
