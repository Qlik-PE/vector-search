define([], function () {
    'use strict';
    return {
        search: function (query, config) {
            return new Promise((resolve, reject) => {
                if (!query || !config || !config.url) {
                    reject(new Error('Invalid query or configuration'));
                    return;
                }

                // Prepare headers
                var headers = {};
                if (config.authenticationToken) {
                    headers['X-Execution-Token'] = config.authenticationToken;
                }

                // Make the API call
                fetch(config.url, {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify({ query: query })
                })
                    .then(response => response.json())
                    .then(data => resolve(data))
                    .catch(error => reject(error));
            });
        }
    }
});

