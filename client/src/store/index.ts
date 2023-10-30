import { createStore } from 'vuex';
import drawers from './drawers';
import modals from './modals';
import pages from './pages';

export default createStore({
    modules: {
        drawers,
        modals,
        pages,
    },
});
