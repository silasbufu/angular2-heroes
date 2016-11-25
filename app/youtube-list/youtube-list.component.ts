import { Component, ViewChild } from '@angular/core';

import { InfiniteScroll } from 'angular2-infinite-scroll';

@Component({
    moduleId: module.id,
    selector: 'youtube-list',
    templateUrl: `youtube-list.component.html`,
    styleUrls: ['youtube-list.component.css']
})

export class YoutubeListComponent {
    list = [];
    sum = 10;
    constructor() {
        for (let i = 0; i < this.sum; ++i) {
            var tempObj = {
                youtubeId: "lsJLLEwUYZM"
            }
            this.list.push(tempObj);
        }
    }

    onScrollDown() {
        console.log('scrolling')
        const start = 10;
        this.sum += 10;
        for (let i = 0; i < this.sum; ++i) {
            var tempObj = {
                youtubeId: "lsJLLEwUYZM"
            }
            this.list.push(tempObj);
        }
    }


    // addYoutubeLink : function() {
	// 				var youtubeId = MyBehaviors.YoutubeLinkResolver.getVidId(this.youtubeLink);
	// 				var url = 'https://www.googleapis.com/youtube/v3/videos';
	// 				var newObj = {
	// 					youtubeId : youtubeId
	// 				};
	// 				$.getJSON(url, {
	// 					id : youtubeId,
	// 					key : 'AIzaSyBoyohA43fOmDR6_GICgDmTNnOkCPPmHJI',
	// 					part : 'snippet'
	// 				}, function(data) {
	// 					if ( typeof (data.items[0]) != "undefined") {
	// 						newObj.title = data.items[0].snippet.title;
	// 						this.push('items', newObj);
	// 						document.querySelector('iron-list').fire('iron-resize');
	// 						this.youtubeLink = null;
	// 					}
	// 				}.bind(this));
	// 			}

}