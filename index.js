const TikTokScraper = require('tiktok-scraper');
const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs');




// scrape video by hashtage from 48 hours ago

let hashTag = prompt('Enter hashtag: ');
let vid_count = prompt('Enter number of videos to scrape: ');

(async () => {
  try {
      const hashtag = await TikTokScraper.getHashtagInfo(hashTag);
      console.log(hashtag);
  } catch (error) {
      console.log(error);
  }
})();


(async () => {
  try {
      const posts = await TikTokScraper.hashtag(hashTag, {
        number: Number(vid_count),
        since: 48 * 60 * 60,
        sessionList: ['sid_tt=9cd1c69a909994ccb15215c2a10a425f'],
        asyncDownload: 5,
        asyncScraping: 3,
            verifyFp: '',
        noWaterMark: false, 
        download: true,
        filepath: './save_vid',
        filename: '1',
        headers: {
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4190.171 Safari/537.36',
          referer: 'https://www.tiktok.com/',
          cookie: 'sid_tt=9cd1c69a909994ccb15215c2a10a425f; tt_csrf_token=3dsRMVa5-yLHAWn7zo9ySZvTdoGgVZIVqwKQ; ttwid=1%7CMkdVAmfheycjFm1mbFEY2dO1Yc7yduhdnsa-NYdi7gE%7C1663965537%7Ccd0700b25e0d785588bf4a15387ba58dd5b626c71e313ba4dac9274c43c13781; msToken=KasuwOpeGZbWaVRg1eKd2qqS2wVIAa1SHm7K00OXMSXP_i38uLi7mbYqD7iNpRqcYBZbbckPezGQGZzOmTqwmH25uV1VZn29Kmc8QeEgW0Os-wXW1yDsp7bn; _abck=292D977854AF24906A6B2E80079A689B~-1~YAAQClkIPtmr8kKDAQAAjSQTbAjVuvq88sLqy95zv49n7uy9CLqg652r5xeU4n5uU9FGk2bnZEzER+AKY+MHm4uczaU9YKkNNZXzSypjUmVT80O1zXilOUFbr12aiyUbk6rgD+O7Zq2FnYg75IbpjmCCNoUjTH1wLpwt+4PaEUIqyJCOJGo/oSUOIMv401Lz1cOn5awa8Q7u5LADwb03DBHdksrXByilcYkM1iC0YvxaxHxaLUTDIGpNXcei75H9UJED0kXa4YDe6/B8dFRwTGpHYILCH/HlXcPlowpbRuhJQJvw6ebhw0n6KeIBfOkC6PdOU0s7vKvs4PjMRGsyq4yLJlO/WDX7HvwVolwDr8+VH+qvfDTsJ1cv5UU=~-1~-1~-1; bm_sz=AE73EC6612212C36B078DC91F545ED9D~YAAQClkIPtqr8kKDAQAAjSQTbBGrzyjcbFgjsLcbrLEqN72Gcdo0jzwWLntN+Aw00zwPBsIhGS/6Y9RQY76GHsAl1/SUUwF3o45LaL9vmVumL1mfCyha+1r6v7JZXkue8sdYO8sWSrkqBx+xU8TmoyTJ9tRRHefH5cIAYD/ibVT+k9pxwR035POBnuJNNQsJXvf8pZiP1Mb1Xbn1QQ+dN7Qyyoymu3K8conDq92JsTfW5yWmlhfauZM6pnMzRjK0aLqnaT7erjVJ9Vo19/74Cnh8uYPEBB8sWqRVCTytTx31bso=~4538947~4539714; tt_webid_v2=6911253553168669543; ak_bmsc=28F4B30AEBD8765F01111D6B9ED78342~000000000000000000000000000000~YAAQClkIPtur8kKDAQAAcCYTbBEkAFDnFVEdUunzHsRh9zd8i7VH6NYJ7HBNWUp7wKHO/NIOk5HByQZNTQ5LQyiLDP4tg6+EqTcxvKSRzw+hJFOjpXSijbiFt/jvC6Hgu0z6iTcNlQ1tPAM5KuJyfZljs7dfKJJYulxpgumuIDS/UiCfr/i07UdoP5DAyHuY195BOFmUJm5W0TgsJsajwat56/esxDbevPu8gksbOkOpUHLWwnGegG8yxTuLzWYAhaWWlQbndENDXg/jkNsLGaHoP4WfFAlfMvYEoMygaVdUZex5mPeHyQvXvvBD0dXHfL+xQp/Be1q+OvVU94a60Bnv2d9hVaN75RNMUFCgU0/YnEOMACiFaak2Tw=='
        },
      });
      console.log(posts);
  } catch (error) {
      console.log(error);
  }
})();



//  sort by filename and rename each file from the folder save_vid/# + hashTag
const path = './save_vid/' + "#" + hashTag;

