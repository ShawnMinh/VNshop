import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import GoodsList from '@/views/GoodsList';
<<<<<<< HEAD
import Cart from '@/views/Cart';
import Address from '@/views/Address';
import OrderConfirm from '@/views/OrderConfirm';
import orderSuccess from '@/views/OrderSuccess';
=======
>>>>>>> 72fc288cdafa2463a6d296a6faf5b6406d02e14b

Vue.use(Router);

export default new Router({
    routes: [{
<<<<<<< HEAD
            path: '/',
            name: 'Hello',
            component: GoodsList,
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/address',
            name: 'address',
            component: Address,
        },
        {
            path: '/orderconfirm',
            name: 'OrderConfirm',
            component: OrderConfirm,
        },
        {
            path: '/ordersuccess',
            name: 'orderSuccess',
            component: orderSuccess,
        },
    ],
=======
        path: '/',
        name: 'Hello',
        component: GoodsList,
    }, ],
>>>>>>> 72fc288cdafa2463a6d296a6faf5b6406d02e14b
});