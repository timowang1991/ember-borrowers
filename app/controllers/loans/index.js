import Controller from '@ember/controller';

export default Controller.extend({
    save(loan) {
        return loan.save();
    }
});
