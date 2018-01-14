import Route from '@ember/routing/route';
import request from 'ic-ajax';

export default Route.extend({
    model() {
        return request('/friends').then(function (data) {
            return {
                friendsCount: data.data.length
            };
        });
    }
});
