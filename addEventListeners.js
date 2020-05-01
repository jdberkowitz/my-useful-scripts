                function addTrackEventListeners(selector,category,action,label){
                             var selection = null;
                             selection = document.querySelectorAll(selector);
                             if(selection.length === 0 || selection === 'undefined' || selection === null){
                                 console.log('Selector not detected')
                             }else{
                                 if(selection.length){
                                     for(var i = 0; i < selection.length; i++){
                                         selection[i].addEventListener('click',function() {
                                             ga('send', {
                                                 hitType: 'event',
                                                 eventCategory: caetgory,
                                                 eventAction: action,
                                                 eventLabel: label,
                                             });
                                         console.log(`${BCData.productSku} Added to Quote Request`);
                                         });
                                     }
                                 }
                             }
                         };
