import LoginWB from './assets/components/Inlog.vue'
import { store } from './assets/store/store.js';


//lazyloading'
const Question = resolve => {
    require.ensure (['./assets/components/Question.vue'], () => {
        resolve(require('./assets/components/Question.vue'));
    });
}
const Result = resolve => {
    require.ensure (['./assets/components/Result.vue'], () => {
        resolve(require('./assets/components/Result.vue'));
    });
}
const Home = resolve => {
    require.ensure (['./assets/components/Home.vue'], () => {
        resolve(require('./assets/components/Home.vue'));
    });
}
const Admin = resolve => {
    require.ensure (['./assets/components/Admin.vue'], () => {
        resolve(require('./assets/components/Admin.vue'));
    });
}

export const routes = [
    { path: '', component: LoginWB},
    { path: '/question', 
        component: Question, 
        beforeEnter:(to, from, next) =>{
            if (!store.state.mainRequest == ''){
                next()
            } else{
               next('/') 
            }
        }
    },
    { path: '/results', 
        component: Result, 
        beforeEnter:(to, from, next) =>{
            if (!store.state.mainRequest == ''){
                next()
            } else{
               next('/') 
            }
        }
    },
    {path: '/home', 
        component: Home 
    },
    {path: '/admin', 
        component: Admin 
    },
    {path: '/link',
        beforeEnter: (to, from, next) => {
            if (from.path === "/question" || from.path === "/results") {
                next({path: '/', replace: true})
            }
            else {
                if (to.query.event!== 0 && to.query.nr!==0) {
                    let aesjs = require('aes-js');
                    let key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
                    let iv = [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36 ];
                    let ev = to.query.event;
                    let nr = to.query.nr;
                    ///--> use this part to encrypt
                    let aesCtr = new aesjs.ModeOfOperation.ctr(key, iv);
                    let enc = aesjs.utils.utf8.toBytes(ev);
                    let encEnc = aesCtr.encrypt(enc);
                    let encHex = aesjs.utils.hex.fromBytes(encEnc); 
                    ///--> underneath decrypts
                    let encB = aesjs.utils.hex.toBytes(ev);
                    let aesCtrr = new aesjs.ModeOfOperation.ctr(key, iv);
                    let decB = aesCtrr.decrypt(encB);
                    let dec2 = aesjs.utils.utf8.fromBytes(decB);
                    //--> now run script to go to event and questionr --> have to do something wihth the backbutton
                    const request = {
                        nr : nr, 
                        event:  dec2    
                    }
                    if (request.nr == 999) {
                        store.dispatch('importResult', request);
                        next();
                    } else {
                        store.dispatch('importContent', request);
                        next();
                    }
                }
                else {
                    next({path: '/'});
                }
            } 
        }
    },
    { path: '*', redirect:'/' },
    
]