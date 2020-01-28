
$.get('json/listing.json').done(function (response) {
    const array = response.results;
    console.log(array);

    $.each(array,function (key,value) {

        const imagePath = value.VCIMAGE_PATH;
        const listingType = value.VCTYPE;
        const address = value.VCADDRESS1;
        const city = value.VCCITY;
        const price = value.MOPRICE;
        const priceFormatted = price>1000000?price/1000000+'M':price/1000+'k';
        const sqFeet = value.NTSQUARE_FEET;
        const acres = value.DBACRE;
        const baths = value.NTTOTAL_BATH;
        const beds = value.NTBEDROOM;

        $('#popular').append('' +
            '           <a href="/">\n' +
            '               <div class="col-xl-6 col-md-6 col-lg-4">\n' +
            '                    <div class="single_property">\n' +
            '                        <div class="property_thumb">\n' +
            '                            <div class="property_tag">\n' +
            '                                    '+listingType+'\n' +
            '                            </div>\n' +
            '                            <img src="http:'+imagePath+'" alt="">\n' +
            '                        </div>\n' +
            '                        <div class="property_content">\n' +
            '                            <div class="main_pro">\n' +
            '                                    <h3><a href="#">'+address+'</a></h3>\n' +
            '                                    <div class="mark_pro">\n' +
            '                                        <img src="img/svg_icon/location.svg" alt="">\n' +
            '                                        <span>'+city+'</span>\n' +
            '                                    </div>\n' +
            '                                    <span class="amount">From $'+priceFormatted+'</span>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="footer_pro">\n' +
            '                                <ul>\n' +
            '                                    <li>\n' +
            '                                        <div class="single_info_doc">\n' +
            '                                            <img src="img/svg_icon/square.svg" alt="">\n' +
            '                                            <span>'+(listingType==='Vacant Land'?acres+' Acres':sqFeet+' Sqft')+'</span>\n' +
            '                                        </div>\n' +
            '                                    </li>\n' +
            (beds>0?
            '                                    <li>\n' +
            '                                        <div class="single_info_doc">\n' +
            '                                            <img src="img/svg_icon/bed.svg" alt="">\n' +
            '                                            <span>'+beds+' Bed</span>\n' +
            '                                        </div>\n' +
            '                                    </li>\n':'') +
            (baths>0?
            '                                    <li>\n' +
            '                                        <div class="single_info_doc">\n' +
            '                                            <img src="img/svg_icon/bath.svg" alt="">\n' +
            '                                            <span>'+baths+' Bath</span>\n' +
            '                                        </div>\n' +
            '                                    </li>\n':'') +
            '                                </ul>\n' +
            '                            </div>\n' +
            '                    </div>\n' +
            '                </div>' +
            '           </a>' +
            '')
    });
});
