'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "68e4074974fae3100bc456e60170ca90",
"favicon.ico": "e08c1c69c07a06750fa12a7be140e5dd",
"index.html": "6f9d10be14e271f18ed7ef536766765e",
"/": "6f9d10be14e271f18ed7ef536766765e",
"CNAME": "6d20879260d8a2cb6148a6f6e6a67e24",
"main.dart.js": "001b52ec9dde4c9277e8c510aba36c78",
"manifest.json": "853f9c72129b62b706ce0d52d3b10b2d",
".git/ORIG_HEAD": "76240df7cecdf5be5ead47af8d12a4c0",
".git/config": "c448158256f2eb378174c96a3721a578",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/95/32ebbbf1011dbe9351c1135765429b90a63443": "7765baa9bfb9c958c7dbd8b28e5be349",
".git/objects/95/90a90cf825ecf330494b263b969100b24a39ab": "cb643722f73a01901f3428f229b2f9f2",
".git/objects/66/780a6e337ff25ad1d629a70e755904dcc0663d": "4804c4ffecc944560f0d08e4b0fdbc11",
".git/objects/50/97eea23ca5c095e8f3360d97467c1d8105968e": "82c66378d922545d13ee7a8b809e547a",
".git/objects/68/deb9546e0dd7c81ef05ec3cd5127d82570b029": "2b521de5fe09623c0ff9bac2119cf84c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/781c0b7bb87671bedf8de5f4c532e771d5f071": "68fdff750256c440a0a00069b4d68da4",
".git/objects/35/c008e4555e3c78fa4ec933261f80253444a875": "a9508efb76f726222bf9e0ce77cda734",
".git/objects/51/789c9b116e7160919546adf9fd1388d6aedaf5": "75141aaff3917f1045e1b32e1f8154ac",
".git/objects/58/b8316932b4509f5a32a856a7bd22e07a3fcd6d": "ecf245b66edd6dd4a606d26d0140746b",
".git/objects/94/69bc185f84132bb98b3884f423eb1d4a569907": "1cd067a5cacec0adafb7e9720079b29c",
".git/objects/94/864952fba7a71a9c5a0a73265157bd14679928": "94eedec3504bd026bd6724d2bd261e5c",
".git/objects/05/4b9030dfd9fc3e5c2ecb45b4919bbf855011a6": "6bbe5e07f486a7565a9e4f580089e20b",
".git/objects/9d/3d37c6da05f665d925b56251a3fc4cc9fb69c6": "023c4e95046ab5cf6af9fce4a4a8dc06",
".git/objects/9c/9a07fa9a4a3cc43d23da70c2845e3d55aa1ed9": "aa44ae174061f5c6079f62d592b90956",
".git/objects/02/5fb2ab91ad3f4e9f9048a35b23e1b16f6a8b90": "dddda8206c1641072448bb9fd3cb25fc",
".git/objects/a4/8a1cc35eac8aa4af172b65a1cd50829e636b72": "e6778a7e7190eca171d3347bbfda93bc",
".git/objects/a4/8227b0d72465427003d592d3f5a79ec124e678": "6ac8f5ad3e5da6cd13947f2efcc57585",
".git/objects/b5/79d94c2427b4c73e56fad877a250a5dc71c7d2": "9a8c1e1317915dc0073b059cd7b8807a",
".git/objects/b5/03444de15175ecc1586481d16b0b83b92aaed5": "ed7085c7d0832a562a587f89d7879a46",
".git/objects/b2/12db892db2213402724d62ca3efd6398dd33f0": "f324f14715d2ea2faeb44fb9e27c2946",
".git/objects/d9/3514260e74bc59308a86cc96e3fdfb8c14741a": "26f32245720a1866c521c2b7ceff8ebb",
".git/objects/d9/0daa007ca2faaaa23a37b475deac02771b0778": "1084ebf56de931b22594159974249977",
".git/objects/d0/7b235885607a2b097bcda16aaa79e3f1cc0319": "91e22a965c5b93a091615a08386941cb",
".git/objects/d0/2c5ef12ef589c2af41c7f326c876b312861f1f": "6848647c78fac664d3f4bdd76337a91e",
".git/objects/b3/6080be409a50be109f292a91d087e095b34fe4": "1f2854b02cd223c781ca603f4c8af6c4",
".git/objects/b3/352a17cb7b32954789873ed8b1c7c0d436f58a": "24b03ee195bedd45cc5f015292a4a649",
".git/objects/da/cd387663d61fb64c8147be903ff7da8b80fe6b": "b9cb0452dd6049370a20858de37fdb07",
".git/objects/a2/54f92d9e31929bf2de05fa1cbef629d439f7a4": "27bf80a41cbd5952953c4a92f79d2cdc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/f4c46279f5c0ec43aa48fa3d0522e50bb72934": "4f1216af6889bf1a9f8295f80270a99f",
".git/objects/ae/3e7910800c9000963f772d33b4b9cec1106953": "7e1d14985ccd4c516ad03cb5c8245dcd",
".git/objects/ab/bc30a8697e83b3b50c58438ee08151cc4d2dd2": "dae4345dc056cb5ed18052edd1a0a481",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/d1aee3616dda29fb555d7341b2c74e124f3e5f": "ec954bd17c98d12e9206b80383b2bd82",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/22214c673519cb1bc316f97683e45ac8a70be9": "a6fea8274fd421072f9d37617f7a9e08",
".git/objects/f5/a30fcd7cd2ac035f715b7c4a01c95635485eff": "41cf532437170fc9b93346edeb809060",
".git/objects/cf/2b42f7288cc083b6d6b3500a8dde8a37b5ade6": "b7eb7886f2d4a4acf52e617fc92f37ee",
".git/objects/ca/0bbb6569d51021125875d40e951ca09e5be5ca": "a6c6b5af18511e82330ce3649aa04f57",
".git/objects/ca/722c696abcf651a43f132d8b3a51cea2164e4a": "9969ed4c6ff2134a8be039c62b2fc476",
".git/objects/e4/03c7d085ba5184dbd46a08289de4c0428a8ff6": "a1ddd5a0c8a08016837c043790fdf354",
".git/objects/c8/658880751d42159142a4c56ab2419ac7224e36": "366774997b1771fbd9c9ee5cb5cd5f0b",
".git/objects/fb/7c1f02b08b13b3e31f7cfd8be49fcfb144e9f4": "c5d27a1819fec1e83672b530c3c97764",
".git/objects/c1/fd4f9189ea80380acfe9529e711050cdd5e719": "33a7ecb41e53dc496e17d62dc6200747",
".git/objects/c6/0bd48ef77b54b54bfd4de7ca87cb985ba96469": "eefa8f85fd026892c8eaf306214f3eea",
".git/objects/ec/b4879cd5cd989c2438f5e76398e0ce395ba324": "13ade50cc173cac2d56d157c4c2d5bc2",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/cb501fc2ef48aa4ecc41277bc17d2785acbdb9": "cf8bb624bfaf80c5880e80b4dd2de117",
".git/objects/20/aaf06dff09d54f53e4e753c987b259db8ccaba": "a444e9d7ce5d1029426fc5a3e62bb199",
".git/objects/27/d24725410ec3c23264214908f5c2dffd7a2b3f": "619452bf19bf1c771e27db487bd08052",
".git/objects/4b/eecc90e9843eabc17bd7d4d30a8fc0a561fcb9": "81ab6744439b5fba34eff6f930304ebd",
".git/objects/11/163eed3ea9068532f939b78a63454a54ef0bc4": "427cef635f5755b4f681027f45b4d52f",
".git/objects/11/2e49370d93b26e0a94d012b44e915e721fdb97": "a381f4cd3646699179568acd73bf4e62",
".git/objects/7d/72fc1983173e3306912cea4a35852cc82352ab": "e395806051c836d2ec8dc57eb3957eab",
".git/objects/1f/e6c409125c9ce288d6320960316fec2215f3fd": "5a71a23c513564c4b49c7cd3396c1204",
".git/objects/87/7e78cc7b0a390f65bf895f463a96f50b6273ea": "b59f52934af23e70cb26a4ee746ff65e",
".git/objects/80/ea8061b046af5af78623788022a3bdd9f79994": "76b11b4e5efcdd1ebbbcdcd298ff6011",
".git/objects/74/0c4232c82711915e45b14e2355cf113f58ae04": "a52d41407cc496e4a780d9bea74624a8",
".git/objects/74/345fe308b4084f5dfdde628eea81e67858171c": "4e447a18044f08eec9230e08166d15a0",
".git/objects/8f/472e973d68dc27c3c05e05054b1e0655c253de": "1c067da0a2e608766e8a527b2f85a442",
".git/objects/8a/ed922f6d5371f723659b7715af2df3cab0b920": "371ee0275f9e6a6b209a900fa6ef3317",
".git/objects/26/0d2da6d37957e2b6a9ffd02aabca553421ae0f": "fa78a77389cc8f90cb6043a96c53403c",
".git/objects/21/94a3879e9c82459647cf8f08e2ac8631741a14": "ed1a7f4f7ceb75b1318ed2b3f95fb311",
".git/objects/86/b6021ced9ab196dbf0c5ca2d019b5c20c43299": "4773fd2e01fec3a83585a8c1e8b4c971",
".git/objects/2a/121856a855d9af6e561f4f6771216005f3ab96": "74dc7b6f81b004eeb9dedd88fc573123",
".git/objects/2f/eebe03ded5006cc6c6a20fb025c330c8c7162c": "60e2a2c23526ce8779f8b656c746ad18",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/563c34f2d60d8850cf067928a749387d586ad1": "ad7f9232ee369558a79c3030e45be814",
".git/objects/88/a4d642c99fcab61e0f7fea3243f7f2e226e589": "3df600903b1c588e67532f4d912f145c",
".git/objects/38/52a5676de0706eb29bd74e2ba501c824e8e214": "ef13eedef474f99610c40d7c628bfcae",
".git/objects/6e/079f6984098cc53f68a24390936a73a6dcd944": "9860083b26475cb02af305975737a70b",
".git/objects/5c/18633ce66149b1629d282f0063c724e9b0fc02": "3afd912781bcd4f5d5e9984232ef97b4",
".git/objects/5c/f0b54c5057e24e1193f93a506d1b30881fe53b": "efd91be894d3aa6dfc5df2c3e65674b5",
".git/objects/5e/953a92b2f87ec579afb2b4f81db39fa7f47d34": "79f842ee9c5896cf410342b3fb92679f",
".git/objects/5e/1ba7aa803d9912aae808cfbe0c71f6971765a9": "cc9f144bef554539d984eb00984a5955",
".git/objects/6d/8d7ae8ee9f58551e3b058f8fb04f5e833fe247": "ed9658f175a26026b24c47c7b5800387",
".git/objects/06/d83bad688ff5628c7fbc41aaf03af17fd903bb": "9f535bc7fa981e777e5a26aed2b6edeb",
".git/objects/6c/79d3e635faf0e8abc9742638d8b5bd7115faf8": "de2c5fc0f8d5862aa235cbb85e9abaf5",
".git/objects/99/0857de8e03f4db6c2e1112045dfa37ed2d675d": "c6c0a2e381bb5650bc0bc39a55a42b2d",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/a506dbb8cd711a293688d107f12908b376c2de": "e430835eec35b25949ed7eb854238ac4",
".git/objects/0f/5eeb36ba9aa4606b674bcc0f4c2326e4f7467f": "d82553588416b41433ad4b7630fd4a27",
".git/objects/0a/c4be6af35b137f42559614b7dbc3ef0dcc16d7": "d7375dbd10ddb5b25ea531a122e170ef",
".git/objects/64/4276b71411961d8657db505bbc13cc87b99e5f": "cdcb427b637c1bdf82192143b572bc10",
".git/objects/64/aef81f53afbe5fe9dc0296711239302e2fc3bc": "9636c13f9fa376e3cc7fed60ccd0851f",
".git/objects/a0/1a8d876be4be5fa50195673bad16b5f5dcbb1d": "75262f73aaa961907051e320c12ba0df",
".git/objects/b6/707ae9a0f1ecba07ba8144ffecd279c8897e80": "919ead9e684b4b5ea430be503479658c",
".git/objects/a9/bc88fe78d6db1991c8ad2bf396e87a6a5cc691": "895431b75535678acd0daa77b95be730",
".git/objects/a9/497d553afb155c0631cc199fb086a3c75578dc": "5d45cc3ff554e83654b78402d6e0263b",
".git/objects/d5/dd89962012f8be9cb9baf4042f9ec4b12de591": "ee94541c6fb79661c5a781f35bf9c541",
".git/objects/d2/c4b809488116a881ce8e9bc240c13750250dd2": "b392a54c17beaca9ad044db921299957",
".git/objects/af/515c95057c81b5a65121eae081aa80c8df0891": "446321ee34e850f7c8f8a388da4ebf30",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/c0ac5bc73e429d707e1f8a921fe8d0815168c7": "832ff146e401300ff5adc5ffed60a2d8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/858757eb98286718cc526d245ee2ed50e3b68b": "3b20615aa9092e71e91ac6624e0a8649",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/09f2baa5ccec7443115bf67277a17e6d5ff35a": "689656d9f51ebb2bb56470ff6654badd",
".git/objects/c4/b0c2a819bdb9171659e306d2914f6b60db228f": "1f75fd0045255a1f5beb26bf7300494a",
".git/objects/c4/3b7ba90445bf6bd0e8052015c3f740ce8875e2": "19cd47995c9f78b566fb69128b07f37e",
".git/objects/e1/276f139a95d00384b078093966d0045d068697": "39778e6995c8db8248b0bf9c77c895a9",
".git/objects/e6/f0a03c5dd39eb53cae00477f2907e232d8ec6c": "1071c17c06b79b538334f04008409465",
".git/objects/f0/a8b0526ce883c7b2a681f15e4292415f3cc03b": "1b6ca120cea67653be102aa579f80d6f",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f1/049adfb97f1fe52cddb616c41605a3252c00a2": "94540e5b46cd461044b3cbe2884ec8cb",
".git/objects/f8/1a08444828d9bbb9dacb3f2312ff8829ad2959": "d41d06353d65d23dbf0ae8f434c71485",
".git/objects/f8/a43f2b203054676b64e38e2b78af5468c39b6d": "c74b50a853cc4b1a5f5dc1f07b4a619a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/c992bd79d21b69cd2103ab28b5de0b5917a676": "08bc1c3c0e5ef988f3ac72314dbc9c82",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/21ec76822b4a09725fedaf1600247d0a4533ac": "0db040e9f73ae4d9e406b897feed92d2",
".git/objects/2d/29a1e0f65ea3dc5d0abf29588ea0b7df495efe": "f7d2a1e2221292085871967e4172bdf1",
".git/objects/70/3e5c32acbbfe610f26f5929dd70fbf7ed8de4e": "ea301f037c14bed7a3f42ba0dbe97639",
".git/objects/84/9ee9519963ba66959407e27a011ec15a6ca580": "011c202b896c299fdf65e909ef53ba87",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/4f/fb312054df03f557072e4c1acd0e38a48ea4f8": "13a2a34cbdec057c1c63146be3160cd1",
".git/objects/8d/0aa376a333837a96ddc2edaca29f959e2254b9": "4831d4d777985bb11246df0226d8a905",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/12/93e29eabb23486c37af71a79d8fdfb22ed443f": "d38337891f884c5a11cf42715a32b499",
".git/objects/85/7efd9c533e5599ea991d5cd6dae2661eb62028": "6aab72b086617ebea7c40ae3ebf33d88",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/673d2a643cbde0dc962e833e4940cc30f0ff25": "768c669746a587997f41c48111eb362f",
".git/objects/78/16b4757a956ee5fe21564ce50c6fdde9166aac": "015d9f7fba3328a5cfed8e1975dd2ae5",
".git/objects/13/c93bc22b591de73ec726645bb3b752c266dc11": "20fc6aab89cb51be2ca47ea3625167a6",
".git/objects/22/1819bca06ec2b584dd1c24ccd701082d12774f": "2b4dafa16f0126cf2f9badcb914b8567",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "32a709542f8d16d3c9a0f53f05c21168",
".git/logs/refs/heads/master": "11f7193181992934ba059b87e737d1df",
".git/logs/refs/heads/main": "8cdec536117b103b57ada9164cf029e1",
".git/logs/refs/remotes/origin/main": "7413c2afe15636c41d216426f560a868",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "76240df7cecdf5be5ead47af8d12a4c0",
".git/refs/heads/main": "bbe549a10a1c82c1ccfd9b3088fb0617",
".git/refs/remotes/origin/main": "bbe549a10a1c82c1ccfd9b3088fb0617",
".git/index": "f871e703dee8e16763475cdf3e11f9f1",
".git/COMMIT_EDITMSG": "a60a448a789b5123a66754c6aed37325",
".git/FETCH_HEAD": "da67920c6486426c876f177fb43a1654",
"assets/AssetManifest.json": "bd7b0496cbcd51865c49122e82cfc099",
"assets/NOTICES": "2c15700cd3a5adc92750f5e31d655650",
"assets/FontManifest.json": "e2f1168eab05736f3d6f9af2a6cd40ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/app_icons/app_icon.png": "b15e23213444b191aa81b54cfbebfd35",
"assets/assets/app_icons/splash.png": "e8bc7b313d30193291893d7d94804eea",
"assets/assets/icons/google_play_store.svg": "e3ea015c98c4f1809ad62d0ef9c14a88",
"assets/assets/icons/app_store.svg": "703fe47861c9153af440d9780a0952e9",
"assets/assets/icons/app_store.png": "8cbfea7915a96ba00c56869ae0f93c2e",
"assets/assets/icons/google_play_store.png": "518daaa0761e969c69ac5ee61d02e446",
"assets/assets/icons/left.svg": "12ee6d40ffdbbee6432ba6f5caf4c9f1",
"assets/assets/fonts/gloss_and_bloom/Gloss_And_Bloom.ttf": "34424cb4a9c03b72de3d38ed59634c6e",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/montserrat/Montserrat-Light.ttf": "409c7f79a42e56c785f50ed37535f0be",
"assets/assets/fonts/montserrat/Montserrat-ExtraLight.ttf": "570a244cacd3d78b8c75ac5dd622f537",
"assets/assets/fonts/montserrat/Montserrat-Thin.ttf": "43dd5b7a3d277362d5e801e5353e3a01",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/assets/fonts/montserrat/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
