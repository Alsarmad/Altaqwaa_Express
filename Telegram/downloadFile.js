const fs = require('fs-extra');
const fetch = require('node-fetch');

/**
 * Download a file to disk
 * @example downloadFile('https://orcascan.com', './barcode-tracking.html')
 * @param {string} fileUrl - url of file to download
 * @param {string} destPath - destination path
 * @returns {Promise} resolves once complete, otherwise rejects
 */
module.exports = async function downloadFile(fileUrl, destPath) {

    if (!fileUrl) return Promise.reject(new Error('Invalid fileUrl'));
    if (!destPath) return Promise.reject(new Error('Invalid destPath'));

    return new Promise(function(resolve, reject) {

        fetch(fileUrl).then(function(res) {
            var fileStream = fs.createWriteStream(destPath);
            res.body.on('error', reject);
            fileStream.on('finish', resolve);
            res.body.pipe(fileStream);
        });
    });
}