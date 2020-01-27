$(document).ready(function () {
    console.log('found file');
    $.get('json/listing.json').done(function (response) {
        console.log(response);
    })
});