define([
    'qlik',
    './properties',
    './initialproperties',
    './utils',
    'css!./styles.css'
], function (qlik, props, initProps, utils, template) {
    'use strict';
    return {
        initialProperties: initProps,
        definition: props,
        support: {
            snapshot: true,
            export: true,
            exportData: false
        },
        paint: function ($element, layout) {
            $element.empty();
            const inputId = 'input-' + layout.qInfo.qId;
            const btnId = 'btn-' + layout.qInfo.qId;
            const html = `<div qv-extension>
                <div style="margin-bottom: 5px;">Filter Expression</div>
                <input id="${inputId}" class="lui-input" style="margin-bottom: 5px;"  value="${layout.searchConfig.searchExpression || ''}" />
                <button class="lui-button" id="${btnId}"> ${layout.searchConfig.buttonCaption || 'Vector Search'}  </button>
                <div id="msg-${layout.qInfo.qId}" style="margin-top:8px;font-style:italic;color:#555;"></div>
            </div>`;
            $element.html(html);
            // Handle button click
            $element.find('#' + btnId).on('click', function () {
                const msgDiv = $element.find('#msg-' + layout.qInfo.qId);
                if ($element.find('#' + inputId).val().trim() === '') {
                    msgDiv.text('Please enter a value before submitting.');
                    return;
                }
                const value = ((layout.searchConfig && layout.searchConfig.searchQuery) ? layout.searchConfig.searchQuery : '') + ' ' + $element.find('#' + inputId).val().trim();
                msgDiv.text('You submitted: ' + value);
                const n = Date.now()
                $.ajax({
                    url: layout.searchConfig.endpoint,
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify({ "Prompt": value, "Variance": layout.searchConfig.varianceValue || 0.5 }),
                    headers: {
                        'X-Execution-Token': layout.searchConfig.authenticationToken
                    },
                    success: function (response) {
                        msgDiv.text('Response: ' + (typeof response === 'object' ? JSON.stringify(response) : response));
                        response = response[0].split('|');
                        const l = Array.isArray(response) ? response.map((item) => ({ qText: item })) : [];

                        const app = qlik.currApp();
                        async function makeSelection() {
                            const field = await app.field(layout.searchConfig.searchField); 
                            await field.selectValues(l, true, true);
                            msgDiv.text('Selections made successfully in ' + (Date.now() - n) + 'ms');
                        }
                        makeSelection();
                    },
                    error: function (error) {
                        const errorMsg = error && error.responseText ? error.responseText : JSON.stringify(error);
                        msgDiv.text('Error: ' + errorMsg);
                    }
                });
            });
        }
    }
});

