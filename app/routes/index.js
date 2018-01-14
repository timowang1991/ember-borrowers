import Ember from 'ember';
import Route from '@ember/routing/route';

export default Route.extend({
    ajax: Ember.inject.service(),

    model() {
        return this.get('ajax').request('/friends').then(function (data) {
            return {
                friendsCount: data.data.length
            };
        });
    }
});
