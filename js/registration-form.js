'use strict';

import infoApi from './event-api.js';

const form = document.getElementById('register');


let getInfo = {
    
    info: {},
    
    init() {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const input = document.querySelectorAll('.input, option:checked, input:checked');

            input.forEach(function(item) {
                if(item.value) {
                    getInfo.info[item.getAttribute('name')] = item.value;
                }
            });

            infoApi.init(getInfo.info);
        });
        
    }
};

export default getInfo;