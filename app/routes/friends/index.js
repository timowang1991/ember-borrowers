import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        // return this.store.findAll('friend');

        //
        // We now use store.query and pass include in the options
        //

        return this.store.query('friend', { include: 'loans,loans.article' });
    }
});
