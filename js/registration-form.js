'use strict';

const form = document.getElementById('register');


const getInfo = {
    
    info: {},
    
    init() {
        form.addEventListener('submit', function() {
            event.preventDefault();
            const select = document.querySelectorAll('option:checked');
            console.log('select', select);
            const checked = document.querySelectorAll('input:checked');
            console.log('checked', checked);
            const input = document.querySelectorAll('.input');
            console.log('input', input);

            input.forEach(function(item) {
                getInfo.info[item.getAttribute('name')] = item.value;
            });
            
            select.forEach(function(item) {
                getInfo.info[item.getAttribute('name')] = item.value;
            });

            checked.forEach(function(item) {
                getInfo.info[item.getAttribute('name')] = item.value;
            });

            console.log(getInfo.info);
        });
        
    }
};

export default getInfo;