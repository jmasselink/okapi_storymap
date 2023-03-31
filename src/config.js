var config = {
    style: 'mapbox://styles/jmasselink/cldzeoc0g005e01lc5830y7pr',
    accessToken: 'pk.eyJ1Ijoiam1hc3NlbGluayIsImEiOiJjbGU3eWllcmcwYTJnM29taG51dnV4NDhxIn0.fvnE_Pf3T6kKOt7TUeuubw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'globe',//'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'If a mine grows in the forest...',
    // subtitle: '...and no one pays attention',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: '0. DRC: a megadiverse nation of natural wealth',
            // image: './path/to/image/source.png',
            description: 'The Democratic Republic of the Congo is blessed with biodiversity, abundant natural resources, and diverse habitats. Home to an estimated hundred million people, the DRC has young, rapidly growing population, which represent hundreds of ethnic groups. Despite this, DRC ranks near the bottom (179/191) on the <a href="https://hdr.undp.org/data-center/specific-country-data#/countries/COD">Human Development Index</a> and most of DRC’s people live in extreme poverty.',
            location: {
                center: [21, -3],
                zoom: 4,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
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
                    opacity: 1.0, 
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
            id: 'ch1',
            alignment: 'right',
            hidden: false,
            title: '1. Ituri Forest: a refuge for indigenous livelihoods and wildlife alike',
            // image: './path/to/image/source.png',
            description: 'A refuge for indigenous livelihoods and wildlife alike.',
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
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'rfo-limits-polygon',
                //     opacity: 0.6,
                // },
            ],
            onChapterExit: [
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.4,
                },
                {
                    layer: 'ne-congo-forest',
                    opacity: 0.2, 
                },
            ]
        },
        {
            id: 'ch2',
            alignment: 'right',
            hidden: false,
            title: '2. Delicate trust and fragile peace',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
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
                    opacity: 0.1,
                },
                
            ]
        },
        {
            id: 'ch3',
            alignment: 'left',
            hidden: false,
            title: '3. Boundaries both real and imaginary',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [28.531101, 1.531721],
                zoom: 8.5,
                pitch: 20,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
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
                    opacity: 0.2,
                },
                {
                    layer: 'rfo-limits-artificial',
                    opacity: 0.2,
                },   
            ]
        },
        {
            id: 'ch4',
            alignment: 'left',
            hidden: false,
            title: '4. Challenges in the Reserve',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [28.531101, 1.531721],
                zoom: 8.0,
                pitch: 10,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'rfo-limits-natural',
                //     opacity: 0.8,
                // },                
            ],
            onChapterExit: [
                // {
                //     layer: 'rfo-limits-natural',
                //     opacity: 0.6,
                // },  
            ]
        },
        {
            id: 'ch5',
            alignment: 'fully',
            hidden: false,
            title: '5. An erroneous map changes the balance',
            // image: './path/to/image/source.png',
            description: 'Well-known for mineral deposits, Ituri Province boasts gold-bearing belts which have been the source of many gold rushes that attract speculators from near and far. Within the Reserve, The DRC’s Mining Cadastre uses a version of the Reserve’s boundaries which are roughly 2/3 of the actual size, with the western boundary sunken inwards about 14 miles, and the northern boundary about 16, and the southern about 8 miles. <p><i><t>Mining concession data are hosted on the <a href="http://drclicences.cami.cd/EN/. "> DRC Mining Cadastre Map Portal </a> While the Mining Cadastre has shared its concession data with multiple sources in the past, the protected area that they use has not been made available. The representation of the Okapi Reserve boundary was therefore digitized. Note the blocky look, this is owing to the Cadastre conforming concessions to a 30-arc second grid.</i>',
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
                // {
                //     layer: 'rfo-limits-artificial',
                //     opacity: 0.8,
                // },
                {
                    layer: 'rfo-cami',
                    opacity: 0.8,
                },                
            ],
            onChapterExit: [
                {
                    layer: 'rfo-limits-artificial',
                    opacity: 0.6,
                },  
            ]
        },
        {
            id: 'ch6',
            alignment: 'right',
            hidden: false,
            title: '6. The incongruence of mining concessions in a World Heritage site',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
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
                    opacity: 0.8,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.2,
                },
                // {
                //     layer: 'rfo-limits-artificial',
                //     opacity: 0.8,
                // }, 
                // {
                //     layer: 'rfo-limits-natural',
                //     opacity: 0.8,
                // },
                {
                    layer: 'waterway',
                    opacity: 0.2,
                }, 
                {
                    layer: 'road-simple',
                    opacity: 0.2,
                },
                {
                    layer: 'settlement-minor-label',
                    opacity: 0.0,
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
            id: 'ch7',
            alignment: 'left',
            hidden: false,
            title: '7. Expansion of semi-industrial causing permanent damages',
            image: '/assets/rfo_gfw_alerts_confidence.gif',
            description: 'Small-scale artisanal mining represented a persistent challenge in managing the Reserve’s southwest bloc throughout the 2010s. On a few occasions, miners were cleared out from these mines located deep inside the forest. The satellite record showed dramatic expansion of the mines, first by clearing many kilometers of roads to access mines south of the Ituri River in 2020, then north of the Ituri River in 2021 and after.',
            // location: {
            //     center: [28.131101, 1.331721],
            //     zoom: 12.52,
            //     pitch: 8.01,
            //     bearing: 0.00
            // },
            location: {
                center: [28.00, 1.331721],
                zoom: 10.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'rfo-tracks',
                    opacity: 1,
                },               
            ],
            onChapterExit: [
                {
                    layer: 'gfw-alerts',
                    opacity: 0.5,
                },
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
