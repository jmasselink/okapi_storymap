var config = {
    style: 'mapbox://styles/jmasselink/cldzeoc0g005e01lc5830y7pr',
    accessToken: 'pk.eyJ1Ijoiam1hc3NlbGluayIsImEiOiJjbGU3eWllcmcwYTJnM29taG51dnV4NDhxIn0.fvnE_Pf3T6kKOt7TUeuubw',
    NICFI_API_KEY: 'PLAK4a3933f7143c4215ba8d61bf91d397d4',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'globe',//'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'How a mine grows in the forest...',
    // subtitle: '...and no one pays attention',
    byline: 'by Joel Masselink',
    footer: 'Sources: Planet Imagery (NICFI), Global Forest Watch, World Database on Protected Areas, OpenStreetMap contributors, DRC Mining Cadastre<br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'DRC: a megadiverse nation of abundant contrasts',
            // image: './path/to/image/source.png',
            description: "The Democratic Republic of the Congo is blessed with biodiversity, abundant natural resources, and diverse ecosystems. Home to an estimated 100  million people, the DRC has a young, rapidly growing population, which includes hundreds of ethnic groups. Despite this, DRC ranks near the bottom (179/191) on the <a href='https://hdr.undp.org/data-center/specific-country-data#/countries/COD'>Human Development Index</a> and most of DRC’s people live in extreme poverty.",
            location: {
                center: [21, -3],
                zoom: 4,
                pitch: 20,
                bearing: 0
            },
            // mosaic: 'Jun 2021',
            // mapAnimation: 'flyTo',
            // rotateAnimation: false,
            // callback: '',
            onChapterEnter: [
                {
                    layer: 'admin-1-boundary',
                    opacity: 0,
                },
                {
                    layer: 'admin-1-boundary-bg',
                    opacity: 0,
                },
                {
                    layer: 'active-exploitation-line',
                    opacity: 0,
                },
                {
                    layer: 'active-exploitation',
                    opacity: 0,
                },
                {
                    layer: 'active-exploration-line',
                    opacity: 0,
                },
                {
                    layer: 'active-exploration',
                    opacity: 0,
                },
                {
                    layer: 'research-application-line',
                    opacity: 0,
                },
                {
                    layer: 'research-application',
                    opacity: 0,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0,
                },
                {
                    layer: 'rfo-limits-artificial',
                    opacity: 0,
                },
                {
                    layer: 'rfo-limits-natural',
                    opacity: 0,
                },
                {
                    layer: 'rfo-cami',
                    opacity: 0,
                },
                {
                    layer: 'settlement-major-label',
                    opacity: 0.0,
                },
                {
                    layer: 'settlement-minor-label',
                    opacity: 0.0,
                },
                {
                    layer: 'unesco-sites',
                    opacity: 0.0,
                },
                {
                    layer: 'unesco-sites-label',
                    opacity: 0.0,
                },
                {
                    layer: 'poi-label',
                    opacity: 0.0,
                },
                {
                    layer: 'gfw-alerts',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-tracks',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-tracks-2020',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-tracks-2021',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-mines',
                    opacity: 0.0,
                },
                {
                    layer: 'ne-congo-forest',
                    opacity: 0.3, 
                },
                {
                    layer: 'label-drc',
                    opacity: 0.0, 
                },
                {
                    layer: 'label-ituri',
                    opacity: 0.0, 
                },
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ch2',
            alignment: 'left',
            hidden: false,
            title: 'The Ituri Forest and Indigenous Communities',
            image: '../assets/JoelMasselink_Mbuti_Girls2.JPG',
            description: "The Ituri forest, located in northeastern DRC, is home to the Mbuti and Efe indigenous communities, who have lived there for thousands of years. They practice traditional ceremonies and subsistence hunting and gathering, and they live in temporary settlements deep within the forest or on the outskirts of villages. These communities have a deep respect for the okapi, a close relative of the giraffe, which primarily inhabits the dense, lowland areas of the Ituri forest. Despite being skilled hunters, they avoid hunting the okapi out of reverence for this animal.",
            location: {
                center: [28.131101, 1.531721],
                zoom: 7,
                pitch: 5,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            // mosaic: 'Jun 2021',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ne-congo-forest',
                    opacity: 0.4, 
                },
                {
                    layer: 'label-drc',
                    opacity: 1, 
                },
                {
                    layer: 'label-ituri',
                    opacity: 1, 
                },
            ],
            onChapterExit: [
                {
                    layer: 'ne-congo-forest',
                    opacity: 0.3, 
                },
            ]
        },
        {
            id: 'ch3',
            alignment: 'left',
            hidden: false,
            title: 'Creation of the Okapi Wildlife Reserve',
            image: '../assets/JoelMasselink_Okapi.JPG',
            description: "The Okapi Wildlife Reserve was established in 1992 to protect the unique way of life of indigenous peoples, wildlife, and the Ituri forest ecosystem. A mixed-use protected area, the Okapi Reserve protects 13,726 sq km (5125 sq mi), an area larger than Death Valley National Park, or slightly smaller than the state of Connecticut or the country of Montenegro. The reserve protects the rights of access to arable land for indigenous Bantu horticulturalist communities as well. <p>In 1996, Okapi Wildlife Reserve was named a UNESCO World Heritage Site, by virtue of it containing the most important and significant natural habitats for in-situ biodiversity conservation of threatened species. The reserve harbors globally important populations of African forest elephant, okapi, and eastern chimpanzees, as well as 13 other species of diurnal primate and four nocturnal species, ranking it as the top protected area in sub-Saharan Africa in terms of primate diversity.",
            location: {
                center: [28.131101, 1.531721],
                zoom: 7.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'poi-label',
                    opacity: 1.0,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.6,
                },
                {
                    layer: 'landcover',
                    opacity: 0.2, 
                },
            ],
            onChapterExit: [
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.4,
                },
                {
                    layer: 'waterway',
                    opacity: 0.2,
                },
            ]
        },
        {
            id: 'ch4',
            alignment: 'left',
            hidden: false,
            title: 'Challenges in the Reserve',
            image: '../assets/JoelMasselink_ForestElephant.JPG',
            description: "The Reserve contains many small villages, and reserve management has the delicate task of engaging communities in conservation while limiting non-compatible land and resource use. The reserve's history has been marred by spates of militarized elephant poaching, mining, and episodes of contact between park guards and militia groups, and the communities within the reserve remain very poor. Land and resource use within the reserve limit human migration and are meant to support only smallholder farming and sustainable, discriminate hunting. Despite these policies and strong management, the conservation outlook for the reserve remains critical as it has been retained on the List of World Heritage in Danger by UNESCO since 1997.",
            location: {
                center: [28.131101, 1.531721],
                zoom: 8.5,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'settlement-minor-label',
                    opacity: 0.8,
                },
                {
                    layer: 'waterway',
                    opacity: 0.4,
                },
                {
                    layer: 'rfo-mines',
                    opacity: 1.0,
                },    
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'ch5',
            alignment: 'left',
            hidden: false,
            title: 'Boundaries both natural and artificial',
            // image: './path/to/image/source.png',
            description: "While the Ministerial Decree creating the Reserve describes its boundaries in detail, portions of the boundaries follow artificial lines, such as the western boundary following 28 degrees East longitude, an imaginary line through the forest. Most boundaries follow natural features, such as the Nepoko River in the north, and the Mambasa-Andudu road in the east.",
            location: {
                center: [28.131101, 1.531721],
                zoom: 8.5,
                pitch: 20,
                bearing: 0
            },
            // mapAnimation: 'flyTo',
            // rotateAnimation: false,
            // callback: '',
            onChapterEnter: [
                {
                    layer: 'rfo-limits-natural',
                    opacity: 0.8,
                },
                {
                    layer: 'rfo-limits-artificial',
                    opacity: 0.8,
                },                  
            ],
            onChapterExit: [
                {
                    layer: 'rfo-limits-natural',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-limits-artificial',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.6,
                },   
            ]
        },
        {
            id: 'ch6',
            alignment: 'left',
            hidden: false,
            title: 'An erroneous map changes the balance',
            // image: './path/to/image/source.png',
            description: "Ituri Province, where Okapi Reserve is located, is well-known for its mineral deposits, including gold-bearing belts that have attracted speculators from near and far. Small-scale artisanal mining has represented a persistent challenge in managing the reserve's southwest bloc throughout the 2010s. On a few occasions, park guards cleared thousands of miners out from these mines located deep inside the forest. The DRC’s Mining Cadastre uses a version of the Reserve’s boundaries which are roughly 2/3 of the actual size, with the western boundary moved eastwards by over 22 kilometers (14 miles), and the northern boundary moved southwards by over 25 kilometers (16 miles), and the southern boundary moved northwards by over 12 kilometers (8 miles).<p><i><t> Mining concession data are hosted on the <a href='http://drclicences.cami.cd/EN/'>DRC Mining Cadastre Map Portal</a>. While the Mining Cadastre has shared its concession data with multiple sources in the past, the protected area boundaries data that they use are not downloadable. The CAMI representation of the Okapi Reserve boundary was therefore digitized and looks blocky, because the Mining Cadastre conforms concessions to a 30-arc second grid.<p>The Okapi Reserve has a total area of 13,726.25 sq km according to the <a href='https://www.protectedplanet.net/37043/'> World Database on Protected Areas</a>, while CAMI's representation of the boundaries covers only 9107 sq km, a reduction of 33% of its area.</i>",
            location: {
                center: [28.131101, 1.531721],
                zoom: 8.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rfo-cami',
                    opacity: 0.8,
                },                
            ],
            onChapterExit: [
                // {
                //     layer: 'rfo-limits-artificial',
                //     opacity: 0.6,
                // },  
            ]
        },
        {
            id: 'ch7',
            alignment: 'left',
            hidden: false,
            title: 'The incongruence of mining concessions in a World Heritage site',
            // image: './path/to/image/source.png',
            description: "DRC’s Mining Cadastre (CAMI) has used its own version of the Reserve’s boundaries for at least 10 years, awarding and renewing research, exploration, and extraction concessions which technically fall inside of the Reserve’s decreed boundaries. These concessions are prevalent in allegedly productive areas along the Ituri River in the southern part of the reserve.",
            location: {
                center: [28.131101, 1.531721],
                zoom: 8.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rfo-cami',
                    opacity: 0.6,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.4,
                },
                {
                    layer: 'waterway',
                    opacity: 0.4,
                }, 
                {
                    layer: 'road-simple',
                    opacity: 0.4,
                },
                {
                    layer: 'settlement-minor-label',
                    opacity: 0.4,
                },
                {
                    layer: 'active-exploitation-line',
                    opacity: 0.5,
                },
                {
                    layer: 'active-exploitation',
                    opacity: 0.8,
                },
                {
                    layer: 'active-exploration-line',
                    opacity: 0.5,
                },
                {
                    layer: 'active-exploration',
                    opacity: 0.8,
                },
                {
                    layer: 'research-application-line',
                    opacity: 0.5,
                },
                {
                    layer: 'research-application',
                    opacity: 0.8,
                },
            ],
            onChapterExit: [
                {
                    layer: 'active-exploitation',
                    opacity: 0.2,
                },
                {
                    layer: 'research-application',
                    opacity: 0.2,
                },
                {
                    layer: 'active-exploration',
                    opacity: 0.2,
                },
            ]
        },
        {
            id: 'ch8',
            alignment: 'right',
            hidden: false,
            title: 'The persistent conservation challenge with artisanal mining',
            // image: '/assets/rfo_gfw_alerts_confidence.gif',
            description: "<b><i>Planet mosaic imagery from Jun - Dec 2017</b></i><p>Small-scale artisanal mining represented a persistent challenge in managing the Reserve’s southern bloc throughout the 2010s. Due to its unregulated, illicit nature, artisanal mining leads to environmental damage, including deforestation and water pollution. Furthermore, in the Reserve’s delicate context, control of mining areas exacerbated conflict between different groups. Artisanal mining also impacts wildlife populations because miners tend to eat available bushmeat, which disincentivizes sustainable hunting in the Reserve. On a few occasions, park management cleared artisanal mines located deep inside the forest, as well as semi-industrial actors encroaching on the Reserve by dredging the Ituri River.",
            location: {
                center: [28.14, 1.31603],
                zoom: 12,
                pitch: 8.01,
                bearing: 0.00
            },
            mosaic: 'Jun 2017 - Dec 2017', //2017?
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'active-exploitation-line',
                    opacity: 0.5,
                },
                {
                    layer: 'active-exploitation',
                    opacity: 0.0,
                },
                {
                    layer: 'active-exploration-line',
                    opacity: 0.5,
                },
                {
                    layer: 'active-exploration',
                    opacity: 0.0,
                },
                {
                    layer: 'research-application-line',
                    opacity: 0.5,
                },
                {
                    layer: 'research-application',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.1,
                },               
            ],
            onChapterExit: [
                {
                    layer: 'label-drc',
                    opacity: 0.0, 
                },
                {
                    layer: 'label-ituri',
                    opacity: 0.0, 
                },
            ]
        },
        {
            id: 'ch9',
            alignment: 'right',
            hidden: false,
            title: 'Development of a semi-industrial mining complex in the Okapi Reserve',
            // image: '/assets/rfo_gfw_alerts_confidence.gif',
            description: "<b><i>Planet mosaic imagery from Dec 2020</b></i><p>In 2020, satellite imagery shows that an estimated 24 kilometers of new roads were opened to facilitate direct access to Muchacha, one of the largest mines in the southern part of the Reserve, and smaller sites south of the Ituri River. These roads enabled the moving of equipment to rapidly expand this and other mining sites. Massive forest clearing and the appearance of tailing ponds are clearly visible in imagery. This clearance allowed more dredges to access and mine in the Ituri River.",
            location: {
                center: [28.14, 1.31603],
                zoom: 12,
                pitch: 8.01,
                bearing: 0.00
            },
            mosaic: 'Dec 2020', // image too saturated
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'active-exploitation-line',
                    opacity: 0.2,
                },
                {
                    layer: 'active-exploitation',
                    opacity: 0.0,
                },
                {
                    layer: 'active-exploration-line',
                    opacity: 0.2,
                },
                {
                    layer: 'active-exploration',
                    opacity: 0.0,
                },
                {
                    layer: 'research-application-line',
                    opacity: 0.2,
                },
                {
                    layer: 'research-application',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-tracks-2020',
                    opacity: 0.3,
                },
                {
                    layer: 'rfo-mines',
                    opacity: 0.0,
                },                 
            ],
            onChapterExit: [
                // {
                //     layer: 'gfw-alerts',
                //     opacity: 0.5,
                // },
            ]
        },
        {
            id: 'ch10',
            alignment: 'right',
            hidden: false,
            title: 'More new roads and massive expansion in 2021',
            // image: './assets/rfo_gfw_alerts_confidence.gif',
            description: "<b><i>Planet mosaic imagery from Oct 2021</b></i><p>In 2021, a similar pattern was mirrored on the north side of the Ituri River, where an estimated 17 kilometers or new roads were cleared to facilitate access, development, and expansion of mining sites. <p>Note the following statement from UNESCO in 2021, regarding the <a href='https://whc.unesco.org/en/decisions/7705'>decision</a> to retain Okapi Reserve on the List of World Heritage in Peril: <p><i>`While noting the efforts undertaken to close artisanal mines, expresses serious concern that illegal mining in the property appears to be intensifying in reported complicity with certain local authorities, with small-scale artisanal mining operations evolving into large-scale semi-industrial operations, and the development of a permanent settlement at the Muchacha mining site.`</i>",
            location: {
                center: [28.14, 1.31603],
                zoom: 12,
                pitch: 8.01,
                bearing: 0.00
            },
            mosaic: 'Oct 2021',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'settlement-minor-label',
                    opacity: 1,
                },  
                {
                    layer: 'rfo-tracks-2021',
                    opacity: 0.3,
                },             
            ],
            onChapterExit: [
                // {
                //     layer: 'rfo-tracks',
                //     opacity: 1,
                // },
            ]
        },
        {
            id: 'ch11',
            alignment: 'right',
            hidden: false,
            title: 'Mine expansion continues unabated causing permanent damages',
            image: '../assets/rfo_gfw_alerts_confidence.gif',
            description: "<b><i>Planet mosaic imagery from April 2023<p>Points on the main map are Global Forest Watch integrated deforestation alerts between 2019-2023</b></i>",
            location: {
                center: [28.10756, 1.32350],
                zoom: 10.8,
                pitch: 8.01,
                bearing: 0.00
            },
            mosaic: 'Oct 2022',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rfo-tracks',
                    opacity: 0.6,
                },
                {
                    layer: 'gfw-alerts',
                    opacity: 0.5,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.2,
                },  
                {
                    layer: 'active-exploitation-line',
                    opacity: 0.5,
                },
                {
                    layer: 'active-exploration-line',
                    opacity: 0.5,
                },
                {
                    layer: 'research-application-line',
                    opacity: 0.5,
                },             
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'ch12',
            alignment: 'center',
            hidden: false,
            title: 'Mine expansion continues unabated causing permanent damages',
            // image: '../assets/rfo_gfw_alerts_confidence.gif',
            description: 'In 2023, the mining complex continues to expand, ensuring permanent damages to the forest, as well as the Ituri River for local residents downstream. There will undoubtedly need to be extensive restoration efforts and hopefully, a halt to all semi-industrial mining, to ensure that the Okapi Reserve continues to support its wildlife and indigenous peoples.<p><i>In the comparison window below, you can select imagery from two different times in the dropdown menus. You can also zoom and pan to focus on specific areas.</i>' + '<br/><div class="video-container"><iframe src="nicfi-compare.html" frameborder="0" scrolling="no" /></div>',
            // location: {
            //     center: [28.05570, 1.34050],
            //     zoom: 10.0,
            //     pitch: 8.01,
            //     bearing: 0.00
            // },
            location: {
                center: [28.06, 1.27003],
                zoom: 11,
                pitch: 8.01,
                bearing: 0.00
            },
            mosaic: 'Jun 2023',
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [            
            ],
            onChapterExit: [
                {
                    layer: 'rfo-tracks',
                    opacity: 0.0,
                },
                {
                    layer: 'gfw-alerts',
                    opacity: 0.0,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.0,
                },  
                {
                    layer: 'active-exploitation-line',
                    opacity: 0.0,
                },
                {
                    layer: 'active-exploration-line',
                    opacity: 0.0,
                },
                {
                    layer: 'research-application-line',
                    opacity: 0.0,
                },  
            ]
        },
        {
            id: 'unesco',
            alignment: 'left',
            hidden: true,
            title: 'World Heritage in Danger',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                    center: [24, -1],
                    zoom: 5.8,
                    pitch: 20,
                    bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'unesco-sites',
                    opacity: 0.8,
                },
                {
                    layer: 'unesco-sites-label',
                    opacity: 1.0,
                },
                {
                    layer: 'landcover',
                    opacity: 0.2, 
                },
                {
                    layer: 'rfo-cami',
                    opacity: 0,
                },
            ],
            onChapterExit: [
                // {
                //     layer: 'rfo-limits-polygon',
                //     opacity: 0.4,
                // },
                // {
                //     layer: 'unesco-sites',
                //     opacity: 0.1,
                // },
            ]
        },
    ]
};
