import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        delete(friend) {
            friend.destroyRecord();
        }
    }
});
