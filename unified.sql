insert into foods (name, fatty, sweet, dense, starchy, salty, acid, delicate, strong, description) VALUES
('Buffalo Wings', 'TRUE', 'FALSE', 'TRUE', 'FALSE', 'FALSE', 'TRUE', 'FALSE', 'TRUE', 'Ideal for sporting-related wine events.'),
('Chocolate Cake', 'TRUE', 'TRUE', 'TRUE', 'TRUE', 'FALSE', 'FALSE', 'FALSE', 'TRUE', 'Ideal for any wine event.'),
('Brownies', 'TRUE', 'TRUE', 'TRUE', 'TRUE', 'FALSE', 'FALSE', 'FALSE', 'TRUE', 'Ideal for any wine event.'),
('Tacos', 'TRUE', 'FALSE', 'TRUE', 'FALSE', 'FALSE', 'TRUE', 'FALSE', 'TRUE', 'Tacos and Wine? Why not.'),
('Nachos', 'TRUE', 'FALSE', 'TRUE', 'FALSE', 'FALSE', 'TRUE', 'FALSE', 'TRUE', 'Nachos and wine? Why not?'),
('Sausage Breakfast Sandwich', 'TRUE', 'FALSE', 'TRUE', 'TRUE', 'FALSE', 'TRUE', 'FALSE', 'TRUE', 'Wine at breakfast? Questionable. Breakfast for dinner with wine? A+ choice'),
('Dorritos', 'TRUE', 'FALSE', 'FALSE', 'TRUE', 'FALSE', 'TRUE', 'FALSE', 'TRUE', 'Ideal for sporting-related wine events.'),
('Salad', 'FALSE', 'FALSE', 'FALSE', 'FALSE', 'TRUE', 'FALSE', 'FALSE', 'TRUE', 'Ideal for any wine event.'),
('Almonds', 'FALSE', 'FALSE', 'FALSE', 'TRUE', 'TRUE', 'FALSE', 'FALSE', 'TRUE', 'Ideal for any wine event.'),
('Peanuts', 'TRUE', 'FALSE', 'FALSE', 'TRUE', 'TRUE', 'FALSE', 'FALSE', 'TRUE', 'Tacos and Wine? Why not.'),
('Cheese', 'TRUE', 'FALSE', 'FALSE', 'FALSE', 'FALSE', 'TRUE', 'FALSE', 'TRUE', 'Nachos and wine? Why not?'),
('Bread', 'FALSE', 'FALSE', 'FALSE', 'TRUE', 'TRUE', 'FALSE','TRUE','FALSE', 'Wine at breakfast? Questionable. Breakfast for dinner with wine? A+ choice'),
('Crackers', 'FALSE', 'FALSE', 'FALSE', 'TRUE', 'TRUE', 'FALSE', 'TRUE', 'FALSE', NULL);

insert into grape 
(id,name,description,berry_skin_color,also_known_as,ideal_soil,general,cool,mid,hot)
VALUES
('6987bdcd-e27b-447d-8797-690dd091fd60', 'Sauvignon Blanc', 'Suvignon blanc is a green-skinned grape originally from the Bordeaux region in France. ', 'Blanc', 'Fume Blanc', 'Varied', 'Sauvignon Blanc can range from aggressively green and grassy to sweet and tropical, depending on climate. Sauvignon blanc performs best in cooler climates. ', 'pronounced green flavor', NULL, 'over-ripe, dull flavors, flat acidity'),
('5fe6c2c0-65a1-4685-b47f-249243f2d7b5', 'Riesling', 'Riesling is a white grape variety originally from the Rhine region of Germany. Riesling grapes display flowery, perfume-like aromas in addition to high acidity. ', 'Blanc', 'Rheinriesling, Johannisberger', 'slate and sandy clay', NULL, 'Apple and tree fruit combined with noticeable acidity, often but not always balanced by residual sugar', 'High acidity', 'Lime flavors in addition to green apple and high acidity'),
('92fe23de-0c17-48b8-811e-b8bad70a4b34', 'Chardonnay', 'Chardonnay is a green-skinned noble grape used to make white wine originally from the Burgundy wine region in France. ', 'White', 'Aubaine, Beaunois, Gamay blanc, Melon blanc', 'Chalk, limestone', 'Chardonnay is a neutral grape', NULL, 'Medium to light body with noticeable acidity', 'Displays honey and tropical fruit'),
('95c11b61-da4e-4664-8771-67ebb99e8f3c', 'Pinot Noir', 'Typically grown in cooler regions, Pinot Noir is a red wine grape variety with a reputation earned by its contributions to some of the finest wines in the world and sustained by its difficult cultivation. ', 'Black', 'Blauburgunder, Sptburgunder, Rulandsk modr', 'Chalky Clay', 'Light Tannins', 'Cabbage, wet leaves', 'Strawberry, raspberry','cherry, mushroom, meaty'),
('67167d5b-565d-4b93-bf75-1d446a9c6e91', 'Merlot', 'Merlot is a dark blue grape used for both varietel and blended wines, especially with the much sterner Cabernet Sauvignon.', 'Black', 'Picard, Langon', 'Clay', 'medium tannins', 'Strawberry, red berry, plum, cedar, tobacco', 'Blackberry, black plum, black cherry', 'Fruitcake, chocolate'),
('d259cbcb-e925-4e62-bb98-5dcba7f4149a', 'Cabernet Sauvignon', 'Among the worlds most widely recognized red grape varieties, Cab Sauv rose to international prominence with its role in blends Merlot and Cabernet Franc. ', 'Black', 'Bouchet, Bouche, Petit-Bouchet, Petit-Cabernet, Petit-Vidure, Vidure,  Sauvignon Rouge', 'Gravel', 'Dense, dark, tannic', 'Vegetal, bell pepper, asparagus', 'Mint, black pepper, eucalytpus', 'Jam'),
('5ddc67b2-ffbc-4aa9-bfc3-5ea7c40b70ef', 'Moscato', 'A family of grapes ranging from white to black, Moscatos are known for both a grapey, floral aroma as well as the presence of musk.', 'White to Black', 'Muscat', 'Prefers soil with ample minerals, including lime and chalk. ', 'Floral and Musky aroma', NULL, NULL, NULL),
('7ce2f02e-a859-4ae8-9543-23deb2ef97a6', 'Zinfandel', 'Originally from Croatia, Zinfandel has found its footing as an old growth staple in California and Italy. ', 'Black', 'Primitivo', NULL, 'Zinfandel prefers warm but not overly hot climates. Ripening early with high sugar content, use of Zinfandel often results in high-alcohol wines. ', NULL, NULL, NULL),
('df3d09e7-f9fc-4008-9fcd-b782121f9dd2', 'Malbec', 'One of six grape varietels permitted in Bordeaux wine, Malbec has found modern acclaim as a keystone grape of Argentina. ', 'Black', NULL, 'Although undemanding in general, Malbec produces its most distinct tannins and richness in limestone-based soil.', 'A thin-skinned grape, Malbec requires more sun than usual to mature. With mid-season ripening, Malbec is known for rich tannin, deep color and plum-like flavor  component. ', NULL, 'juicy fruit notes, violet aroma', 'low acidity'),
('bc955726-d41d-4a00-b9d9-e5e9d2457f90', 'Gewurztraminer', 'Preferring cooler climates, Gewurxtraminer is known for its role in many white wines.  Accompanied by notes of rose and passion fruit, Gewurztraminers sweetness allows it to pair well with spizy cuisines. ', 'Roset', 'Gewurz, Gertie, Traminer, Musque', 'Gewurz needs soils free of chalk to thrive.', NULL, 'Low acid and extremely high sugar if not picked early.', NULL, NULL),
('a55690df-88bd-4874-9bb1-1c2e6203a93c', 'Petite Sirah', 'Known for small berries and a high skin-to-body ratio, Petite Sirah is ideal for making high-tannin wines. ', 'Black', 'Duriff, Plant Durif, Plant Fourchu, Pinot de Romans and Pinot de lHermitage', NULL, 'Tannic wines with spicy, plummy flavor', NULL, NULL, NULL),
('a28457d8-4170-4ffd-880d-06a7b8b71de5', 'Sangiovese', 'Tuscanys distinguishing grape, sangiovese is known for fresh, fruity flavors with a little spiciness. Receptive to oak and with a flavor profile of sour red cherries, eathy aromas, and tea leaf notes, Sangiovese is complex with high acid.', 'Purple', 'Brunello, Sangiovese Grosso', 'Thrives in high-limestone soil', 'Fresh, fruity, spicy', 'high acidity, harsh unripe tannins', NULL, 'Diluted flavors when too warm'),
('1ca3fb28-14b5-42e6-a8fc-7618c67b6f31', 'Pinot Gris', 'From Burgundy in france, Pinot Gris is a white wine grape with grayish-blue fruit.', 'Rose', 'Pinot Grigio', 'Prefers volcanic soil', NULL, 'Rich, floral bouquet. Spicy', 'Medium-bodied, with crisp, refreshing taste', 'light-bodied, crisp, refreshing.');

insert into region
(id,climate_type,title,description)
VALUES
('6f50d9c8-f32b-46cd-90ab-6e211ff3b4a1', 'Maritime/Continental', 'Oregon', 'Oregons northern latitude brings long hours of summer sunshine to its almost 30,000 vineyard acres, allowing a wide variety of wine grapes to grow throughout the many winegrowing regions of the state.'),
('cda29f10-52a9-4581-8624-ee5fafbc17b2', 'continental', 'Alsace,  France', 'At the border of France and Germany, Alsace is known primarily for white wine. Alsace is noted for dry Rieslings as well as Gewurztraminer. '),
('851cde94-267e-4897-aca5-7b230ff0d1b1', 'mediterranean', 'Tuscany, Italy', 'With a submediterranean climate, Tuscany has become as famous for its wines as it is for its tourist destinations.'),
('70e18b93-a58f-4484-aaf5-7b58bee19b34', 'mediterranean', 'Sonoma County, California', 'Sonoma County is home to almost 60,000 acres of vineyards and more than 400 wineries. Within the borders are 17 American Viticultural Areas (AVAs, or appellations), each with its own distinctive characteristics. Located on the northern edge of the greater San Francisco Bay Area, Sonoma County is the largest producer in Northern Californias Wine Country. Sonoma County wines enjoy global recognition and have won countless national and international wine awards. Learn more about Sonoma Wine Country.'),
('40a8570b-beb9-49ba-adec-9cee8aa534d6', 'maritime', 'South Africa', 'On the southernmost coast of Africa situated between the Atlantic and Indian Oceans, South Africas climate is well-moderated.'),
('66495484-3d2f-4d96-ade8-f3fc0a3591c2', 'continental', 'Mosel, Germany', 'Although Mosel is the third-largest wine region in Germany, it is the leader in international prestige. Mosel is known for steep slopes and is home to the steepest vineyard in the world.'),
('a7f3bf58-9d8f-40d6-b84f-eb96f17d0376', 'mediterranean', 'California', 'Californias hot and dry climate is ideal for producing low-acid, high sugar and high alcohol wine. '),
('f2951a01-f961-4e81-bec4-350ff63646af', 'Maritime/Continental', 'France', 'One of the largest wine producing countries in the world, France continues its historical lead in production.'),
('3d015043-7175-4036-8df2-8df56a4964b3', 'continental', 'Germany', 'The northernmost wine-producing country in Europe, Germany is known for its dry white Riesling.'),
('84a7677a-72ff-4b08-90af-7f1fd6ff1372', 'continental', 'Austria', 'Neighboring Germany, Austria is known for Rieslings - good luck finding them though; Austria consumes much of the wine it produces. '),
('4b21ce14-715a-4a7a-8836-f33547efbc9e', 'Maritime/Continental', 'Washington', 'Washington State is famous for its long, dreary winters. Move to the western parts of the state however, and youll find that a rain shadow yields consistent, dry weather year-round.'),
('268a73b9-5e6f-45f5-87af-a84ae84165ef', 'continental', 'Finger Lakes, New York', 'They said it couldnt be done; They were wrong. The Finger Lakes wine region has grown to produce both traditional vinefera grapes thanks to Dr. Frank, but also native grapes and hybrids thanks to early pioneers.');

insert into vintage_attrs (year, region_id, comment_) VALUES
('2014', 'cda29f10-52a9-4581-8624-ee5fafbc17b2', 'Average summer temperatures'),
('2015', 'cda29f10-52a9-4581-8624-ee5fafbc17b2', 'Warmer than average summer'),
('2016', 'cda29f10-52a9-4581-8624-ee5fafbc17b2', 'Much hotter than usual summer'),
('2014', '84a7677a-72ff-4b08-90af-7f1fd6ff1372', 'Slightly cooler than average summer'),
('2015', '84a7677a-72ff-4b08-90af-7f1fd6ff1372', 'Much warmer than usual summer'),
('2016', '84a7677a-72ff-4b08-90af-7f1fd6ff1372', 'Average summer temperatures'),
('2014', 'a7f3bf58-9d8f-40d6-b84f-eb96f17d0376', 'Warmer than average summer'),
('2015', 'a7f3bf58-9d8f-40d6-b84f-eb96f17d0376', 'Much hotter than usual summer'),
('2016', 'a7f3bf58-9d8f-40d6-b84f-eb96f17d0376', 'Slightly cooler than average summer'),
('2014', '268a73b9-5e6f-45f5-87af-a84ae84165ef', 'Much warmer than usual summer'),
('2015', '268a73b9-5e6f-45f5-87af-a84ae84165ef', 'Average summer temperatures'),
('2016', '268a73b9-5e6f-45f5-87af-a84ae84165ef', 'Warmer than average summer'),
('2014', 'f2951a01-f961-4e81-bec4-350ff63646af', 'Much hotter than usual summer'),
('2015', 'f2951a01-f961-4e81-bec4-350ff63646af', 'Slightly cooler than average summer'),
('2016', 'f2951a01-f961-4e81-bec4-350ff63646af', 'Much warmer than usual summer'),
('2014', '3d015043-7175-4036-8df2-8df56a4964b3', 'Average summer temperatures'),
('2015', '3d015043-7175-4036-8df2-8df56a4964b3', 'Warmer than average summer'),
('2016', '3d015043-7175-4036-8df2-8df56a4964b3', 'Much hotter than usual summer'),
('2014', '66495484-3d2f-4d96-ade8-f3fc0a3591c2', 'Slightly cooler than average summer'),
('2015', '66495484-3d2f-4d96-ade8-f3fc0a3591c2', 'Much warmer than usual summer'),
('2016', '66495484-3d2f-4d96-ade8-f3fc0a3591c2', 'Average summer temperatures'),
('2014', '6f50d9c8-f32b-46cd-90ab-6e211ff3b4a1', 'Warmer than average summer'),
('2015', '6f50d9c8-f32b-46cd-90ab-6e211ff3b4a1', 'Much hotter than usual summer'),
('2016', '6f50d9c8-f32b-46cd-90ab-6e211ff3b4a1', 'Slightly cooler than average summer'),
('2014', '70e18b93-a58f-4484-aaf5-7b58bee19b34', 'Much warmer than usual summer'),
('2015', '70e18b93-a58f-4484-aaf5-7b58bee19b34', 'Average summer temperatures'),
('2016', '70e18b93-a58f-4484-aaf5-7b58bee19b34', 'Warmer than average summer'),
('2014', '40a8570b-beb9-49ba-adec-9cee8aa534d6', 'Much hotter than usual summer'),
('2015', '40a8570b-beb9-49ba-adec-9cee8aa534d6', 'Slightly cooler than average summer'),
('2016', '40a8570b-beb9-49ba-adec-9cee8aa534d6', 'Much warmer than usual summer'),
('2014', '851cde94-267e-4897-aca5-7b230ff0d1b1', 'Average summer temperatures'),
('2015', '851cde94-267e-4897-aca5-7b230ff0d1b1', 'Warmer than average summer'),
('2016', '851cde94-267e-4897-aca5-7b230ff0d1b1', 'Much hotter than usual summer'),
('2014', '4b21ce14-715a-4a7a-8836-f33547efbc9e', 'Slightly cooler than average summer'),
('2015', '4b21ce14-715a-4a7a-8836-f33547efbc9e', 'Much warmer than usual summer'),
('2016', '4b21ce14-715a-4a7a-8836-f33547efbc9e', 'Hotter and drier than usual');
insert into vineyard
(id,name,location,description,region_id)
VALUES
('c9d220e4-fee5-4d47-b628-6eac56ada5f7', 'King Estate', '(43.851585, -123.236464)', 'Picturesque organic vineyard with relaxed & polished bistro serving carefully sourced American fare. Kings of Pinot Since 1991. https://www.kingestate.com/', '6f50d9c8-f32b-46cd-90ab-6e211ff3b4a1'),
('3ef83845-622f-4db6-b2a4-08ba3e69c926', 'R.H Phillips', '(38.804461, -122.022144)', 'Launched in 1984 in California has grown to 1600 acres of grapes producing 400000 cases of wine annually.', 'a7f3bf58-9d8f-40d6-b84f-eb96f17d0376'),
('27e85cfe-8069-4a19-8edb-3c01159c85dc', 'Domaine Hugel et Fils', '(48.166898, 7.297563)', 'Hugel production averages 110,000 cases per year, of which around 90% is exported to more than 100 countries worldwide  where Alsace is often synonymous with Hugel.', 'cda29f10-52a9-4581-8624-ee5fafbc17b2'),
('a8744a0b-0a0d-46a8-8136-400ddfbb56e0', 'Ruffino', '(43.774718, 11.438469)', 'In 1877 when cousins Ilario and Leopoldo Ruffino embraced their passion for winemaking by establishing a small winery in the town of Pontassieve near Florence, the region already had a centuries-old tradition of growing exceptional wine grapes. Even so the two Tuscan natives felt certain that much of the areas greatness had yet to be revealed. Tuscany had been heaped with good fortune--mineral-laden soils, the cooling influence of the Mediterranean Sea, the dry summers that wine grapes favor. And all those luscious, sun-drenched hills.', '851cde94-267e-4897-aca5-7b230ff0d1b1'),
('b5114335-764f-405e-90a9-e24090b8c4ad', 'Ferrari-Carano', '(38.711404, -122.978237)', 'Founded in 1981, Ferrari-Carano, located in Sonoma Countys Dry Creek Valley, is the dream and hard work of Don and Rhonda Carano. Remarkable wines, vintage after vintage.', '70e18b93-a58f-4484-aaf5-7b58bee19b34'),
('89a95050-b91b-44a6-9bf5-08caa3ac63f7', 'Two Oceans', '(-33.918063,18.905654)', 'The Two Oceans vineyards are influenced by cooling sea breezes and mists that can lower summer afternoon temperatures to slow down ripening, ensure a refreshing acidity and intensify fruit flavours. The warm African sun however allows for sugar accumulation and flavour development. They work together to create beautifully balanced grapes that translate into lively, delicious and approachable wines. The whites are fresh, crisp and tangy, while the reds are soft, smooth and juicy.', '40a8570b-beb9-49ba-adec-9cee8aa534d6'),
('9f4b40b9-e527-44a0-8563-74c2c8434adb', 'Schmitt-Sohne', '(49.806725,6.770462)', 'Started over 200 years ago, this winery has kept up with the times, using advanced engineering and computerization to become one of Germanys largest wine exporters. ', '3d015043-7175-4036-8df2-8df56a4964b3'),
('112e9423-b36c-427f-9632-b281b7e4a993', 'Toasted Head', '(38.174640,-121.278559)', 'Named for the traditional practice of toasting barrel heads and staves to impart a mellow, toasted flavor to barrel-aged wines, Toasted Head began making hand-crafted wines at our vineyards in the Dunnigan Hills of Yolo County, California in 1995.', 'a7f3bf58-9d8f-40d6-b84f-eb96f17d0376'),
('fca77bde-44f3-4c70-b2a8-30e5b223ea72', 'Sidewise', '(43.591236,3.258363)', NULL, 'f2951a01-f961-4e81-bec4-350ff63646af'),
('2b216ea6-9d7d-43d4-9530-90037d0d87e3', 'Simi', '(38.639374,-122.872200)', 'Founded in 1876, Simi has continued to grow in California under the Constellation Brands umbrella.', 'a7f3bf58-9d8f-40d6-b84f-eb96f17d0376'),
('25fd52ed-48a2-4441-b484-0bbd5a1dbe17', 'Weingut Brundlmayer', '(48.473433,15.664469)', 'A winery with 125 acres of vineyards near Langenlois.', '84a7677a-72ff-4b08-90af-7f1fd6ff1372'),
('357ac169-8f9e-4f70-8a3a-1bc4281039bc', 'Lucien Albrecht', '(47.936166,7.233262)', 'Lucien Albrechts authentic Alsace Wines & Cromants, are renowned for their quality and amazing taste all around the world.', 'cda29f10-52a9-4581-8624-ee5fafbc17b2'),
('0c35f94e-8825-487f-936e-6765ad704d67', 'St. Urbans-hof', '(49.822920,6.872250)', 'Led by a third-generation winemaker, St. Urbans-Hof has been transformed into one of the hottest wineries in the Mosel region', '66495484-3d2f-4d96-ade8-f3fc0a3591c2'),
('a8f137b8-99e2-46e5-a7d7-f83db399d6d1', 'Dr. Frank', '(42.473507,-77.184033)', 'Founded by the pioneer grower of European wine grape varieties in the eastern United States. Located in Hammondsport, New York.', '268a73b9-5e6f-45f5-87af-a84ae84165ef'),
('3bf1323a-280b-4df0-b3b8-9c1f7dc393d2', 'Chateau Ste. Michelle', '(47.729804,-122.149313)', 'Chateau Ste. Michelleis Washington States oldest winery, located in Woodinville, Washington, near Seattle.', '4b21ce14-715a-4a7a-8836-f33547efbc9e');

insert into wine
(id,name,vintage,vineyard_id,Alcohol,sugar,acid,brix,body,color,is_red,tannin,fruity,spicy,tart,label_description,price)
VALUES
('c7a3964d-d26b-4955-946f-6cf88140e631', 'King Estate', '2014', 'c9d220e4-fee5-4d47-b628-6eac56ada5f7', '13.50', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$15'),
('4795ced1-ce35-4b88-ae35-51d9caac5227', 'Night Harvest Cabernet Sauvignon', 0, '3ef83845-622f-4db6-b2a4-08ba3e69c926', '13.50', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$6'),
('f45d7509-68c6-469b-b4a2-69a293654575', 'Domaine Hugel et Fils', '2013', '27e85cfe-8069-4a19-8edb-3c01159c85dc', '14.00', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$19'),
('bb1fdc96-5f4c-49e3-8097-effc3fcb89e1', 'Ruffino Modus', '2012', 'a8744a0b-0a0d-46a8-8136-400ddfbb56e0', '13.50', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$23'),
('54d13c5d-2481-4069-beee-d14be1da7648', 'Ferrari-Carano Siena', '2013', 'b5114335-764f-405e-90a9-e24090b8c4ad', '14.50', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$18'),
('40538a18-0657-4eaf-b15f-287f84647af2', 'Two Oceans', '2013', '89a95050-b91b-44a6-9bf5-08caa3ac63f7', '12.00', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$12'),
('44d6f4be-b50e-4961-9a42-62f3a8e9da58', 'Relax', '2014', '9f4b40b9-e527-44a0-8563-74c2c8434adb', '8.50', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$8'),
('153e3ea2-36e8-424f-bb60-dd8277c4809d', 'Toasted Head', '2013', '112e9423-b36c-427f-9632-b281b7e4a993', '14.00', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$11'),
('0673badf-c577-41d5-bef8-c63b61185ed7', 'Sidewise', '2013', 'fca77bde-44f3-4c70-b2a8-30e5b223ea72', '12.00', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$8'),
('f1ffcdb6-0d8c-496d-abbb-ea9e1c668236', 'Simi Merlot', '2012', '2b216ea6-9d7d-43d4-9530-90037d0d87e3', '13.50', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$15'),
('0d897d09-1891-4c86-9e6c-4f379984b13c', 'Simi Cabernet Sauvignon', '2012', '2b216ea6-9d7d-43d4-9530-90037d0d87e3', '13.50', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$20'),
('ba602c13-9a70-4577-aae0-1a08f89f3cec', 'Brundlmayer Steinmassel', '2014', '25fd52ed-48a2-4441-b484-0bbd5a1dbe17', '12.50', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$30'),
('90cf0fff-9c5a-425e-b907-f60e0fb09ced', 'Lucien Albrecht Reserve', '2012', '357ac169-8f9e-4f70-8a3a-1bc4281039bc', '12.50', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$15'),
('65e1303e-ac3d-4d3a-b2e7-357198a9f541', 'St. Urbans-Hof Kabinett', '2012', '0c35f94e-8825-487f-936e-6765ad704d67', '8.00', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$22'),
('70d9b093-d517-4a65-ad64-f66d9e98642f', 'St. Urbans-Hof Spatlese', '2012', '0c35f94e-8825-487f-936e-6765ad704d67', '8.00', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$35'),
('67f870d1-534f-4a2a-8d98-beb14ed958e3', 'Dr. Frank Dry Riesling', '2014', 'a8f137b8-99e2-46e5-a7d7-f83db399d6d1', '12.50', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$12'),
('5836d664-14ed-49c7-8e65-4fd93fc9b5d8', 'Chateau Ste. Michelle Riesling', '2014', '3bf1323a-280b-4df0-b3b8-9c1f7dc393d2', '12.00', '.5', '.2', '.1', '.6', 'ORANGE', TRUE, '.7', FALSE, TRUE, FALSE, NULL, '$8');

insert into grape_component
(wine_id,grape_id,percent)
VALUES
('c7a3964d-d26b-4955-946f-6cf88140e631', 'd259cbcb-e925-4e62-bb98-5dcba7f4149a', '100'),
('4795ced1-ce35-4b88-ae35-51d9caac5227', 'd259cbcb-e925-4e62-bb98-5dcba7f4149a', '100'),
('f45d7509-68c6-469b-b4a2-69a293654575', '1ca3fb28-14b5-42e6-a8fc-7618c67b6f31', '100'),
('bb1fdc96-5f4c-49e3-8097-effc3fcb89e1', 'a28457d8-4170-4ffd-880d-06a7b8b71de5', '50'),
('bb1fdc96-5f4c-49e3-8097-effc3fcb89e1', '67167d5b-565d-4b93-bf75-1d446a9c6e91', '25'),
('bb1fdc96-5f4c-49e3-8097-effc3fcb89e1', 'd259cbcb-e925-4e62-bb98-5dcba7f4149a', '25'),
('54d13c5d-2481-4069-beee-d14be1da7648', 'a28457d8-4170-4ffd-880d-06a7b8b71de5', '25'),
('54d13c5d-2481-4069-beee-d14be1da7648', 'df3d09e7-f9fc-4008-9fcd-b782121f9dd2', '25'),
('54d13c5d-2481-4069-beee-d14be1da7648', 'a55690df-88bd-4874-9bb1-1c2e6203a93c', '25'),
('54d13c5d-2481-4069-beee-d14be1da7648', 'd259cbcb-e925-4e62-bb98-5dcba7f4149a', '25'),
('40538a18-0657-4eaf-b15f-287f84647af2', '6987bdcd-e27b-447d-8797-690dd091fd60', '100'),
('44d6f4be-b50e-4961-9a42-62f3a8e9da58', '5fe6c2c0-65a1-4685-b47f-249243f2d7b5', '100'),
('153e3ea2-36e8-424f-bb60-dd8277c4809d', '92fe23de-0c17-48b8-811e-b8bad70a4b34', '100'),
('0673badf-c577-41d5-bef8-c63b61185ed7', '95c11b61-da4e-4664-8771-67ebb99e8f3c', '100'),
('f1ffcdb6-0d8c-496d-abbb-ea9e1c668236', '67167d5b-565d-4b93-bf75-1d446a9c6e91', '100'),
('0d897d09-1891-4c86-9e6c-4f379984b13c', 'd259cbcb-e925-4e62-bb98-5dcba7f4149a', '100'),
('ba602c13-9a70-4577-aae0-1a08f89f3cec', '5fe6c2c0-65a1-4685-b47f-249243f2d7b5', '100'),
('90cf0fff-9c5a-425e-b907-f60e0fb09ced', '5fe6c2c0-65a1-4685-b47f-249243f2d7b5', '100'),
('65e1303e-ac3d-4d3a-b2e7-357198a9f541', '5fe6c2c0-65a1-4685-b47f-249243f2d7b5', '100'),
('70d9b093-d517-4a65-ad64-f66d9e98642f', '5fe6c2c0-65a1-4685-b47f-249243f2d7b5', '100'),
('67f870d1-534f-4a2a-8d98-beb14ed958e3', '5fe6c2c0-65a1-4685-b47f-249243f2d7b5', '100'),
('5836d664-14ed-49c7-8e65-4fd93fc9b5d8', '5fe6c2c0-65a1-4685-b47f-249243f2d7b5', '100');
