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
    // byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: '1. DRC: a megadiverse nation of natural wealth',
            // image: './path/to/image/source.png',
            description: "The Democratic Republic of the Congo is blessed with biodiversity, abundant natural resources, and diverse habitats. Home to an estimated hundred million people, the DRC has young, rapidly growing population, which represent hundreds of ethnic groups. Despite this, DRC ranks near the bottom (179/191) on the <a href='https://hdr.undp.org/data-center/specific-country-data#/countries/COD'>Human Development Index</a> and most of DRC’s people live in extreme poverty.",
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
                    layer: 'ne-congo-forest',
                    opacity: 0.2, 
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
            alignment: 'right',
            hidden: false,
            title: '2. The Ituri Forest and Indigenous Communities',
            image: '/assets/JoelMasselink_Mbuti_Girls2.JPG',
            description: "The Ituri forest, located in northeastern DRC, is home to the Mbuti and Efe indigenous communities, who have lived there for thousands of years. They practice traditional ceremonies, subsistence hunting and gathering, and temporary settlements deep within the forest or on the outskirts of villages. These communities have a deep respect for the okapi, a close relative of the giraffe, which primarily inhabits the dense, lowland areas of the Ituri forest. Despite being skilled hunters, they avoid hunting the okapi out of reverence for this animal.",
            location: {
                center: [28.531101, 1.531721],
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
                    opacity: 0.3, 
                },
            ],
            onChapterExit: [
                {
                    layer: 'ne-congo-forest',
                    opacity: 0.2, 
                },
            ]
        },
        {
            id: 'ch3',
            alignment: 'right',
            hidden: false,
            title: '3. Creation of the Okapi Wildlife Reserve',
            image: '/assets/JoelMasselink_Okapi.JPG',
            description: "The Okapi Wildlife Reserve was established in 1992 to protect the unique way of life of indigenous peoples, wildlife, and the Ituri forest ecosystem. A mixed-use protected area, the Okapi Reserve protects 13,726 sq km, an area larger than Death Valley National Park, slightly smaller than Connecticut or Montenegro. The reserve protects the rights of access to arable land for indigenous Bantu horticulturalist communities as well. <p>In 1996, Okapi Wildlife Reserve was named a UNESCO World Heritage Site, by virtue of it containing the most important and significant natural habitats for in-situ biodiversity conservation of threatened species. The reserve harbors globally important populations of African forest elephant, okapi, and eastern chimpanzees, as well as 13 other species of diurnal primate and four nocturnal species, ranking it as the top protected area in sub-Saharan Africa in terms of primate diversity.",
            location: {
                center: [28.531101, 1.531721],
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
            alignment: 'right',
            hidden: false,
            title: '4. Challenges in the Reserve',
            // image: './path/to/image/source.png',
            description: "The Reserve contains many small villages, and reserve management has the delicate task of engaging communities in conservation while limiting non-compatible land and resource use. The reserve has a history marred by spates of militarized elephant poaching, mining, and episodes of contact between park guards and militia groups, and the communities within the reserve remain very poor. Land and resource use within the reserve limit human migration and are meant to support only smallholder farming and sustainable, discriminate hunting. Despite these policies and decent management, the conservation outlook for the reserve remains critical as it has been retained on the List of World Heritage in Danger by UNESCO since 1997.",
            location: {
                center: [28.531101, 1.531721],
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
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'ch5',
            alignment: 'left',
            hidden: false,
            title: '5. Boundaries both real and imaginary',
            // image: './path/to/image/source.png',
            description: "While the Ministerial Decree creating the Reserve describes its boundaries in detail, portions of the boundaries follow artificial lines, such as the western boundary following 28 degrees East longitude, an imaginary line through the forest. Most boundaries follow natural features, such as the Nepoko River in the north.",
            location: {
                center: [28.531101, 1.531721],
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
            title: '6. An erroneous map changes the balance',
            // image: './path/to/image/source.png',
            description: "Ituri Province, where Okapi Reserve is located, is well-known for its mineral deposits, including gold-bearing belts that have attracted speculators from near and far. Small-scale artisanal mining has represented a persistent challenge in managing the reserve's southwest bloc throughout the 2010s. On a few occasions, park guards cleared thousands of miners out from these mines located deep inside the forest. The DRC’s Mining Cadastre uses a version of the Reserve’s boundaries which are roughly 2/3 of the actual size, with the western boundary sunken inwards about 14 miles, and the northern boundary about 16, and the southern about 8 miles<p><i><t> Mining concession data are hosted on the <a href='http://drclicences.cami.cd/EN/'>DRC Mining Cadastre Map Portal</a>. While the Mining Cadastre has shared its concession data with multiple sources in the past, the protected area boundaries that they use is not downloadable. The CAMI representation of the Okapi Reserve boundary was therefore digitized. Note the blocky look, this is owing to the Mining Cadastre conforming concessions to a 30-arc second grid.<p>The Okapi Reserve covers 9107 sq km according to CAMI, while <a href='https://www.protectedplanet.net/37043/'>World Database on Protected Areas</a> (has it listed as 13,726.25 sq km, a reduction of 33% of its area.</i>",
            location: {
                center: [28.531101, 1.531721],
                zoom: 8.0,
                pitch: 0,
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
            alignment: 'right',
            hidden: false,
            title: '7. The incongruence of mining concessions in a World Heritage site',
            // image: './path/to/image/source.png',
            description: "DRC’s Mining Cadastre (CAMI) has used its own version of the Reserve’s boundaries for at least 10 years, awarding and renewing research, exploration, and extraction concessions which technically fall inside of the Reserve’s decreed boundaries. These concessions are prevalent in allegedly productive areas along the Ituri River in the southern part of the reserve. Small-scale artisanal mining represented a persistent challenge in managing the Reserve’s southern bloc throughout the 2010s. On a few occasions, miners were cleared out from these mines located deep inside the forest, as were semi-industrial actors who brought in dredges to mine in the river.",
            location: {
                center: [28.531101, 1.531721],
                zoom: 8.5,
                pitch: 0,
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
            alignment: 'left',
            hidden: false,
            title: '8. The persistent conservation challenge with artisanal mining',
            // image: '/assets/rfo_gfw_alerts_confidence.gif',
            description: "Small-scale artisanal mining represented a persistent challenge in managing the Reserve’s southern bloc throughout the 2010s, Due to its unregulated, illicit nature, artisanal mining leads to environmental damage, including deforestation and water pollution. Furthermore, in the Reserve’s delicate context, control of mining areas exacerbated conflict between different groups. Artisanal mining also impacts wildlife populations because miners tend to eat available bushmeat, which disincentivizes sustainable hunting in the Reserve. On a few occasions, park management cleared artisanal mines located deep inside the forest, as well as semi-industrial actors encroaching on the Reserve by dredging the Ituri River.",
            location: {
                center: [28.14645, 1.31603],
                zoom: 13,
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
            ]
        },
        {
            id: 'ch9',
            alignment: 'left',
            hidden: false,
            title: '9. Development of a semi-industrial mining complex in the Okapi Reserve',
            // image: '/assets/rfo_gfw_alerts_confidence.gif',
            description: "In 2020, satellite imagery shows that an estimated 24 kilometers of new roads were opened to facilitate direct access to Muchacha, one of the largest mines in the southern part of the Reserve, and smaller sites south of the Ituri River. These roads enabled the moving of equipment to rapidly expand this and other mining sites. Massive forest clearing and the appearance of tailings ponds are clearly visible in imagery. This clearance allowed more dredges to access and mine in the Ituri River.",
            location: {
                center: [28.14645, 1.31603],
                zoom: 13,
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
                // {
                //     layer: 'gfw-alerts',
                //     opacity: 0.5,
                // },
            ]
        },
        {
            id: 'ch10',
            alignment: 'left',
            hidden: false,
            title: '10. More new roads and massive expansion in 2021',
            // image: '/assets/rfo_gfw_alerts_confidence.gif',
            description: "In 2021, a similar pattern was mirrored on the north side of the Ituri River, where an estimated 17 kilometers or new roads were cleared to facilitate access, development, and expansion of mining sites. <p>Note the following statement from UNESCO in 2021, regarding the <a href='https://whc.unesco.org/en/decisions/7705'>decision</a> to retain Okapi Reserve on the List of World Heritage in Peril: <p><i>`While noting the efforts undertaken to close artisanal mines, expresses serious concern that illegal mining in the property appears to be intensifying in reported complicity with certain local authorities, with small-scale artisanal mining operations evolving into large-scale semi-industrial operations, and the development of a permanent settlement at the Muchacha mining site.`</i>",
            location: {
                center: [28.13123, 1.32219],
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
                    layer: 'rfo-tracks-2020',
                    opacity: 0.5,
                },             
            ],
            onChapterExit: [
                {
                    layer: 'rfo-tracks-2021',
                    opacity: 0.5,
                },
            ]
        },
        {
            id: 'ch11',
            alignment: 'left',
            hidden: false,
            title: '11. Mine expansion continues unabated causing permanent damages',
            // image: '/assets/rfo_gfw_alerts_confidence.gif',
            description: "In 2022 and beyond, the mining complex appears to expand unabated. These mining sites are causing permanent damages to the forest, as well as the Ituri River for citizens downstream. There will undoubtedly be needed to plan for extensive restoration to ensure the natural environment continues to support wildlife, indigenous peoples of the Okapi Reserve.",
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
                    opacity: 0.5,
                },
                {
                    layer: 'gfw-alerts',
                    opacity: 0.5,
                },            
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'unesco',
            alignment: 'left',
            hidden: true,
            title: '0. World Heritage in Danger',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                    center: [24, -1],
                    zoom: 6,
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
                    layer: 'unesco-sites',
                    opacity: 0.1,
                },
            ]
        },
    ]
};
