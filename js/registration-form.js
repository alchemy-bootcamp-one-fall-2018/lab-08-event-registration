'use strict';

import infoApi from './event-api.js';

const form = document.getElementById('register');


let getInfo = {
    
    info: {},
    
    init() {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const select = document.querySelectorAll('option:checked');
            const checked = document.querySelectorAll('input:checked');
            const input = document.querySelectorAll('.input');

            input.forEach(function(item) {
                if(item.value) {
                    getInfo.info[item.getAttribute('name')] = item.value;
                }
            });
            
            select.forEach(function(item) {
                if(item.value) {
                    getInfo.info[item.getAttribute('name')] = item.value;
                }
            });

            checked.forEach(function(item) {
                if(item.value) {
                    getInfo.info[item.getAttribute('name')] = item.value;
                }
            });

            infoApi.init(getInfo.info);
        });
        
    }
};

export default getInfo;