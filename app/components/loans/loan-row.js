// import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
    tagName: 'tr',
    loan: null,  // passed-in

    // stateChanged: Ember.observer('loan.returned', function () {
    //     var loan = this.get('loan');
    //     console.log('OMG Expensive operation because loan state changed');
    // }),

    init() {
        this._super(...arguments);
        this.addObserver('loan.returned', this, this.stateChanged);
    },
    stateChanged() {
        console.log('OMG Expensive operation because loan state changed');
    }
});
