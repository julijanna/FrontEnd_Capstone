import { processImage } from "../src/client/js/formHandler";

describe("Test the image object processing", () => {
  test("Test with an default repsponse, when no image present", () => {
    expect(
      processImage({
        total: 0,
        totalHits: 0,
        hits: [],
      })
    ).toBe("src/client/img/unknown_location.png");
  });
  test("Test with a real response", () => {
    expect(
      processImage({
        total: 169,
        totalHits: 169,
        hits: [
          {
            id: 2179107,
            pageURL:
              "https://pixabay.com/photos/asia-rickshaw-asian-bangkok-car-2179107/",
            type: "photo",
            tags: "asia, rickshaw, asian",
            previewURL:
              "https://cdn.pixabay.com/photo/2017/03/27/14/37/asia-2179107_150.jpg",
            previewWidth: 150,
            previewHeight: 99,
            webformatURL:
              "https://pixabay.com/get/54e1d24a4b52ab14f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 640,
            webformatHeight: 426,
            largeImageURL:
              "https://pixabay.com/get/54e1d24a4b52ab14f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 6000,
            imageHeight: 4000,
            imageSize: 2790444,
            views: 32707,
            downloads: 19565,
            favorites: 117,
            likes: 100,
            comments: 11,
            user_id: 2286921,
            user: "Pexels",
            userImageURL:
              "https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg",
          },
          {
            id: 4044210,
            pageURL:
              "https://pixabay.com/photos/india-new-delhi-delhi-attraction-4044210/",
            type: "photo",
            tags: "india, new delhi, delhi",
            previewURL:
              "https://cdn.pixabay.com/photo/2019/03/09/14/18/india-4044210_150.jpg",
            previewWidth: 150,
            previewHeight: 99,
            webformatURL:
              "https://pixabay.com/get/52e0d1474853ac14f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 640,
            webformatHeight: 426,
            largeImageURL:
              "https://pixabay.com/get/52e0d1474853ac14f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 5219,
            imageHeight: 3479,
            imageSize: 4699759,
            views: 13707,
            downloads: 7243,
            favorites: 67,
            likes: 64,
            comments: 16,
            user_id: 6205481,
            user: "enjoytheworld",
            userImageURL:
              "https://cdn.pixabay.com/user/2019/03/09/13-25-31-674_250x250.jpg",
          },
          {
            id: 4793144,
            pageURL:
              "https://pixabay.com/photos/lahore-pakistan-arabesque-4793144/",
            type: "photo",
            tags: "lahore, pakistan, arabesque",
            previewURL:
              "https://cdn.pixabay.com/photo/2020/01/25/18/47/lahore-4793144_150.jpg",
            previewWidth: 113,
            previewHeight: 150,
            webformatURL:
              "https://pixabay.com/get/52e7dc404b56a814f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 483,
            webformatHeight: 640,
            largeImageURL:
              "https://pixabay.com/get/52e7dc404b56a814f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 3456,
            imageHeight: 4584,
            imageSize: 9000691,
            views: 10738,
            downloads: 8614,
            favorites: 22,
            likes: 30,
            comments: 6,
            user_id: 11951897,
            user: "qkcreativity92",
            userImageURL:
              "https://cdn.pixabay.com/user/2020/01/18/14-40-04-240_250x250.jpg",
          },
          {
            id: 282933,
            pageURL:
              "https://pixabay.com/photos/delhi-road-india-chaos-delhi-282933/",
            type: "photo",
            tags: "delhi, road, india",
            previewURL:
              "https://cdn.pixabay.com/photo/2014/03/08/09/19/delhi-282933_150.jpg",
            previewWidth: 150,
            previewHeight: 99,
            webformatURL:
              "https://pixabay.com/get/54e8d74a4951b10ff3d8992cc620367a103edce14e5074407c277ad09744c0_640.jpg",
            webformatWidth: 640,
            webformatHeight: 426,
            largeImageURL:
              "https://pixabay.com/get/54e8d74a4951b108f5d0846096293f7f113adfe7574c704c7c2673d5934dcc5d_1280.jpg",
            imageWidth: 5184,
            imageHeight: 3456,
            imageSize: 3498229,
            views: 15027,
            downloads: 5345,
            favorites: 28,
            likes: 47,
            comments: 11,
            user_id: 179114,
            user: "Rhiannon",
            userImageURL: "",
          },
          {
            id: 2178704,
            pageURL:
              "https://pixabay.com/photos/architecture-asphalt-automobile-2178704/",
            type: "photo",
            tags: "architecture, asphalt, automobile",
            previewURL:
              "https://cdn.pixabay.com/photo/2017/03/27/13/25/architecture-2178704_150.jpg",
            previewWidth: 150,
            previewHeight: 99,
            webformatURL:
              "https://pixabay.com/get/54e1d24b4d52a814f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 640,
            webformatHeight: 426,
            largeImageURL:
              "https://pixabay.com/get/54e1d24b4d52a814f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 5338,
            imageHeight: 3559,
            imageSize: 2316651,
            views: 17015,
            downloads: 8075,
            favorites: 77,
            likes: 64,
            comments: 5,
            user_id: 2286921,
            user: "Pexels",
            userImageURL:
              "https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg",
          },
          {
            id: 2053035,
            pageURL:
              "https://pixabay.com/photos/bird-parakeet-green-tropical-2053035/",
            type: "photo",
            tags: "bird, parakeet, green",
            previewURL:
              "https://cdn.pixabay.com/photo/2017/02/09/18/02/bird-2053035_150.jpg",
            previewWidth: 150,
            previewHeight: 98,
            webformatURL:
              "https://pixabay.com/get/54e0d0404a51a914f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 640,
            webformatHeight: 421,
            largeImageURL:
              "https://pixabay.com/get/54e0d0404a51a914f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 2337,
            imageHeight: 1539,
            imageSize: 1283522,
            views: 6776,
            downloads: 2366,
            favorites: 47,
            likes: 47,
            comments: 1,
            user_id: 37542,
            user: "sarangib",
            userImageURL:
              "https://cdn.pixabay.com/user/2013/08/15/15-53-08-90_250x250.jpg",
          },
          {
            id: 3210134,
            pageURL:
              "https://pixabay.com/photos/delhi-architecture-travel-building-3210134/",
            type: "photo",
            tags: "delhi, architecture, travel",
            previewURL:
              "https://cdn.pixabay.com/photo/2018/03/08/22/54/delhi-3210134_150.jpg",
            previewWidth: 150,
            previewHeight: 99,
            webformatURL:
              "https://pixabay.com/get/55e2d4434b51a814f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 640,
            webformatHeight: 426,
            largeImageURL:
              "https://pixabay.com/get/55e2d4434b51a814f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 5407,
            imageHeight: 3604,
            imageSize: 2512617,
            views: 5824,
            downloads: 3199,
            favorites: 22,
            likes: 28,
            comments: 8,
            user_id: 6474130,
            user: "Glavo",
            userImageURL:
              "https://cdn.pixabay.com/user/2017/10/09/17-29-42-817_250x250.jpg",
          },
          {
            id: 3491558,
            pageURL:
              "https://pixabay.com/photos/qutb-minar-dome-top-qutab-minar-3491558/",
            type: "photo",
            tags: "qutb minar, dome, top",
            previewURL:
              "https://cdn.pixabay.com/photo/2018/06/22/20/07/qutb-minar-3491558_150.jpg",
            previewWidth: 150,
            previewHeight: 99,
            webformatURL:
              "https://pixabay.com/get/55e4dc424f57a414f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 640,
            webformatHeight: 426,
            largeImageURL:
              "https://pixabay.com/get/55e4dc424f57a414f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 3888,
            imageHeight: 2592,
            imageSize: 3889882,
            views: 3606,
            downloads: 1881,
            favorites: 39,
            likes: 39,
            comments: 2,
            user_id: 1785462,
            user: "Devanath",
            userImageURL:
              "https://cdn.pixabay.com/user/2016/09/02/10-09-22-263_250x250.png",
          },
          {
            id: 1379273,
            pageURL:
              "https://pixabay.com/photos/taj-mahal-india-delhi-taj-mahal-1379273/",
            type: "photo",
            tags: "taj mahal, india, delhi",
            previewURL:
              "https://cdn.pixabay.com/photo/2016/05/08/15/23/india-1379273_150.jpg",
            previewWidth: 150,
            previewHeight: 99,
            webformatURL:
              "https://pixabay.com/get/57e3d24a4855af14f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 640,
            webformatHeight: 425,
            largeImageURL:
              "https://pixabay.com/get/57e3d24a4855af14f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 2144,
            imageHeight: 1424,
            imageSize: 772617,
            views: 14503,
            downloads: 5557,
            favorites: 24,
            likes: 33,
            comments: 3,
            user_id: 2531205,
            user: "svn919",
            userImageURL:
              "https://cdn.pixabay.com/user/2016/05/08/15-12-05-476_250x250.png",
          },
          {
            id: 2179199,
            pageURL:
              "https://pixabay.com/photos/architecture-asia-attraction-2179199/",
            type: "photo",
            tags: "architecture, asia, attraction",
            previewURL:
              "https://cdn.pixabay.com/photo/2017/03/27/14/53/architecture-2179199_150.jpg",
            previewWidth: 150,
            previewHeight: 99,
            webformatURL:
              "https://pixabay.com/get/54e1d24a4b5ba514f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 640,
            webformatHeight: 426,
            largeImageURL:
              "https://pixabay.com/get/54e1d24a4b5ba514f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 6000,
            imageHeight: 4000,
            imageSize: 3056955,
            views: 8182,
            downloads: 5162,
            favorites: 40,
            likes: 21,
            comments: 1,
            user_id: 2286921,
            user: "Pexels",
            userImageURL:
              "https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg",
          },
          {
            id: 584924,
            pageURL:
              "https://pixabay.com/photos/red-fort-delhi-buildings-ancient-584924/",
            type: "photo",
            tags: "red fort delhi, buildings, ancient",
            previewURL:
              "https://cdn.pixabay.com/photo/2014/12/31/12/58/red-fort-delhi-584924_150.jpg",
            previewWidth: 150,
            previewHeight: 112,
            webformatURL:
              "https://pixabay.com/get/53e8d14a4856b10ff3d8992cc620367a103edce14e5074407c277ad09744c0_640.jpg",
            webformatWidth: 640,
            webformatHeight: 478,
            largeImageURL:
              "https://pixabay.com/get/53e8d14a4856b108f5d0846096293f7f113adfe7574c704c7c2673d5934dcc5d_1280.jpg",
            imageWidth: 2288,
            imageHeight: 1712,
            imageSize: 923464,
            views: 7553,
            downloads: 3185,
            favorites: 30,
            likes: 16,
            comments: 3,
            user_id: 272082,
            user: "nitell",
            userImageURL: "",
          },
          {
            id: 4051748,
            pageURL:
              "https://pixabay.com/photos/india-delhi-temple-mausoleum-4051748/",
            type: "photo",
            tags: "india, delhi, temple",
            previewURL:
              "https://cdn.pixabay.com/photo/2019/03/12/20/17/india-4051748_150.jpg",
            previewWidth: 150,
            previewHeight: 99,
            webformatURL:
              "https://pixabay.com/get/52e0d0424d56a414f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 640,
            webformatHeight: 426,
            largeImageURL:
              "https://pixabay.com/get/52e0d0424d56a414f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 6000,
            imageHeight: 4000,
            imageSize: 7539290,
            views: 4052,
            downloads: 1896,
            favorites: 16,
            likes: 14,
            comments: 2,
            user_id: 6205481,
            user: "enjoytheworld",
            userImageURL:
              "https://cdn.pixabay.com/user/2019/03/09/13-25-31-674_250x250.jpg",
          },
          {
            id: 2181889,
            pageURL:
              "https://pixabay.com/photos/ancient-bike-central-city-classic-2181889/",
            type: "photo",
            tags: "ancient, bike, central",
            previewURL:
              "https://cdn.pixabay.com/photo/2017/03/28/12/00/ancient-2181889_150.jpg",
            previewWidth: 100,
            previewHeight: 150,
            webformatURL:
              "https://pixabay.com/get/54e1dd42425aa514f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 426,
            webformatHeight: 640,
            largeImageURL:
              "https://pixabay.com/get/54e1dd42425aa514f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 3921,
            imageHeight: 5882,
            imageSize: 2635945,
            views: 8822,
            downloads: 5943,
            favorites: 33,
            likes: 26,
            comments: 1,
            user_id: 2286921,
            user: "Pexels",
            userImageURL:
              "https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg",
          },
          {
            id: 2242989,
            pageURL:
              "https://pixabay.com/photos/isa-khan-tomb-tomb-india-delhi-2242989/",
            type: "photo",
            tags: "isa khan tomb, tomb, india",
            previewURL:
              "https://cdn.pixabay.com/photo/2017/04/19/17/17/isa-khan-tomb-2242989_150.jpg",
            previewWidth: 143,
            previewHeight: 150,
            webformatURL:
              "https://pixabay.com/get/54e2d141435aa514f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 611,
            webformatHeight: 640,
            largeImageURL:
              "https://pixabay.com/get/54e2d141435aa514f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 2578,
            imageHeight: 2700,
            imageSize: 1550935,
            views: 3300,
            downloads: 1608,
            favorites: 16,
            likes: 17,
            comments: 2,
            user_id: 1902105,
            user: "SuanlianTangpua",
            userImageURL:
              "https://cdn.pixabay.com/user/2020/05/10/10-17-01-813_250x250.jpg",
          },
          {
            id: 4130676,
            pageURL:
              "https://pixabay.com/vectors/graphic-humayun-s-tomb-4130676/",
            type: "vector/svg",
            tags: "graphic, humayun's tomb, mughal architecture",
            previewURL:
              "https://cdn.pixabay.com/photo/2019/04/16/00/17/graphic-4130676_150.png",
            previewWidth: 150,
            previewHeight: 75,
            webformatURL:
              "https://pixabay.com/get/52e1d6434c55aa14f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.png",
            webformatWidth: 640,
            webformatHeight: 320,
            largeImageURL:
              "https://pixabay.com/get/52e1d6434c55aa14f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.png",
            imageWidth: 1920,
            imageHeight: 960,
            imageSize: 284335,
            views: 2359,
            downloads: 1122,
            favorites: 14,
            likes: 17,
            comments: 6,
            user_id: 7996303,
            user: "BilliTheCat",
            userImageURL:
              "https://cdn.pixabay.com/user/2019/05/11/02-20-11-900_250x250.png",
          },
          {
            id: 4181466,
            pageURL:
              "https://pixabay.com/vectors/graphic-humayun-s-tomb-4181466/",
            type: "vector/svg",
            tags: "graphic, humayun's tomb, mughal architecture",
            previewURL:
              "https://cdn.pixabay.com/photo/2019/05/05/19/20/graphic-4181466_150.png",
            previewWidth: 150,
            previewHeight: 75,
            webformatURL:
              "https://pixabay.com/get/52e1dd424e54aa14f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.png",
            webformatWidth: 640,
            webformatHeight: 320,
            largeImageURL:
              "https://pixabay.com/get/52e1dd424e54aa14f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.png",
            imageWidth: 1920,
            imageHeight: 960,
            imageSize: 322595,
            views: 2049,
            downloads: 910,
            favorites: 18,
            likes: 17,
            comments: 13,
            user_id: 7996303,
            user: "BilliTheCat",
            userImageURL:
              "https://cdn.pixabay.com/user/2019/05/11/02-20-11-900_250x250.png",
          },
          {
            id: 2181894,
            pageURL:
              "https://pixabay.com/photos/asia-asian-auto-background-bike-2181894/",
            type: "photo",
            tags: "asia, asian, auto",
            previewURL:
              "https://cdn.pixabay.com/photo/2017/03/28/12/01/asia-2181894_150.jpg",
            previewWidth: 150,
            previewHeight: 99,
            webformatURL:
              "https://pixabay.com/get/54e1dd42425ba814f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 640,
            webformatHeight: 426,
            largeImageURL:
              "https://pixabay.com/get/54e1dd42425ba814f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 6000,
            imageHeight: 4000,
            imageSize: 2904200,
            views: 3450,
            downloads: 1470,
            favorites: 16,
            likes: 22,
            comments: 0,
            user_id: 2286921,
            user: "Pexels",
            userImageURL:
              "https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg",
          },
          {
            id: 3614115,
            pageURL:
              "https://pixabay.com/photos/humayun-s-tomb-delhi-india-3614115/",
            type: "photo",
            tags: "humayun's tomb, delhi, india",
            previewURL:
              "https://cdn.pixabay.com/photo/2018/08/18/02/07/humayuns-tomb-3614115_150.jpg",
            previewWidth: 150,
            previewHeight: 112,
            webformatURL:
              "https://pixabay.com/get/55e6d4474b53a914f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 640,
            webformatHeight: 480,
            largeImageURL:
              "https://pixabay.com/get/55e6d4474b53a914f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 3648,
            imageHeight: 2736,
            imageSize: 2854364,
            views: 2270,
            downloads: 1156,
            favorites: 12,
            likes: 9,
            comments: 1,
            user_id: 3645834,
            user: "bwellen",
            userImageURL: "",
          },
          {
            id: 3310290,
            pageURL:
              "https://pixabay.com/photos/sky-outdoors-travel-architecture-3310290/",
            type: "photo",
            tags: "sky, outdoors, travel",
            previewURL:
              "https://cdn.pixabay.com/photo/2018/04/11/11/28/sky-3310290_150.jpg",
            previewWidth: 150,
            previewHeight: 93,
            webformatURL:
              "https://pixabay.com/get/55e3d443485bac14f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 640,
            webformatHeight: 398,
            largeImageURL:
              "https://pixabay.com/get/55e3d443485bac14f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 3000,
            imageHeight: 1870,
            imageSize: 837735,
            views: 2609,
            downloads: 1516,
            favorites: 12,
            likes: 9,
            comments: 0,
            user_id: 5163668,
            user: "swapnil24",
            userImageURL:
              "https://cdn.pixabay.com/user/2018/02/19/17-06-18-978_250x250.jpg",
          },
          {
            id: 5055050,
            pageURL:
              "https://pixabay.com/photos/humayun-tomb-delhi-india-mughal-5055050/",
            type: "photo",
            tags: "humayun, tomb, delhi",
            previewURL:
              "https://cdn.pixabay.com/photo/2020/04/17/12/42/humayun-5055050_150.jpg",
            previewWidth: 150,
            previewHeight: 100,
            webformatURL:
              "https://pixabay.com/get/53e0d0464a57ac14f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg",
            webformatWidth: 640,
            webformatHeight: 427,
            largeImageURL:
              "https://pixabay.com/get/53e0d0464a57ac14f6da8c7dda793676143bdbe451556c48702672dc9649c551bd_1280.jpg",
            imageWidth: 4219,
            imageHeight: 2813,
            imageSize: 4326078,
            views: 1247,
            downloads: 839,
            favorites: 5,
            likes: 10,
            comments: 6,
            user_id: 8137807,
            user: "MOHANN",
            userImageURL:
              "https://cdn.pixabay.com/user/2019/11/01/00-47-11-723_250x250.jpg",
          },
        ],
      })).toBe(
        "https://pixabay.com/get/54e1d24a4b52ab14f1dc846096293f7f113adfe7574c704c7c2673d5934dcc5d_640.jpg"
    );
  });
});
