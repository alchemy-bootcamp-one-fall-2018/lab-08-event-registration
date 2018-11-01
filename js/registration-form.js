'use strict';

import infoApi from './event-api.js';

const form = document.getElementById('register');


const getInfo = {
    
    info: {},
    
    init() {
        form.addEventListener('submit', function() {
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

            infoApi.add(getInfo.info);
            console.log('ingo in reg file', getInfo.info);
            // console.log(infoApi.getStoredInfo());
        });
        
    }
};

export default getInfo;