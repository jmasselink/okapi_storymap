var config = {
    style: 'mapbox://styles/jmasselink/cldzeoc0g005e01lc5830y7pr',
    accessToken: 'pk.eyJ1Ijoiam1hc3NlbGluayIsImEiOiJjbGU3eWllcmcwYTJnM29taG51dnV4NDhxIn0.fvnE_Pf3T6kKOt7TUeuubw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'globe',//'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
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
            image: './path/to/image/source.png',
            description: 'The Democratic Republic of the Congo is blessed with biodiversity, abundant natural resources, and diverse habitats. Home to nearly a hundred million people, the DRC also has hundreds of ethnic groups. Even within the country, there are 4 primary national languages: Kikongo, Kiluba, Kiswahili, and Lingala.',
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
                    layer: 'active-exploration-line',
                    opacity: 0,
                },
                {
                    layer: 'research-application-line',
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
            image: './path/to/image/source.png',
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
            ]
        },
        {
            id: 'ch2',
            alignment: 'right',
            hidden: false,
            title: '2. Delicate trust and fragile peace',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [28.531101, 1.531721],
                zoom: 7.5,
                pitch: 20,
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
            ]
        },
        {
            id: 'ch3',
            alignment: 'left',
            hidden: false,
            title: '3. Boundaries both real and imaginary',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
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
                    layer: 'rfo-limits-natural',
                    opacity: 0.0,
                },                
            ],
            onChapterExit: [
                {
                    layer: 'rfo-limits-natural',
                    opacity: 0.6,
                },  
            ]
        },
        {
            id: 'ch4',
            alignment: 'left',
            hidden: false,
            title: '4. Challenges in the Reserve',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
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
                    layer: 'rfo-limits-natural',
                    opacity: 0.8,
                },                
            ],
            onChapterExit: [
                {
                    layer: 'rfo-limits-natural',
                    opacity: 0.6,
                },  
            ]
        },
        {
            id: 'ch5',
            alignment: 'fully',
            hidden: false,
            title: '5. An erroneous map changes the balance',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
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
                    layer: 'rfo-limits-artificial',
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
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [28.531101, 1.531721],
                zoom: 8.0,
                pitch: 10,
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
                {
                    layer: 'rfo-cami',
                    opacity: 0.8,
                },
                {
                    layer: 'rfo-limits-polygon',
                    opacity: 0.2,
                },
                {
                    layer: 'rfo-limits-artificial',
                    opacity: 0.8,
                }, 
                {
                    layer: 'rfo-limits-natural',
                    opacity: 0.8,
                },
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
            ],
            onChapterExit: []
        },
        {
            id: 'ch7',
            alignment: 'fully',
            hidden: false,
            title: '7. Expansion of semi-industrial causing permanent damages',
            image: '/assets/rfo_gfw_alerts_confidence.gif',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [28.131101, 1.331721],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'rfo-limits-artificial',
                //     opacity: 0.8,
                // },                
            ],
            onChapterExit: [
                // {
                //     layer: 'rfo-limits-artificial',
                //     opacity: 0.6,
                // },  
            ]
        },
                // {
        //     id: 'unesco',
        //     alignment: 'left',
        //     hidden: false,
        //     title: '0. World Heritage in Danger',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //             center: [24, -1],
        //             zoom: 6,
        //             pitch: 20,
        //             bearing: 0,
        //         // flyTo additional controls-
        //         // These options control the flight curve, making it move
        //         // slowly and zoom out almost completely before starting
        //         // to pan.
        //         //speed: 2, // make the flying slow
        //         //curve: 1, // change the speed at which it zooms out
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {
        //             layer: 'unesco-sites',
        //             opacity: 0.8,
        //         },
        //         {
        //             layer: 'landcover',
        //             opacity: 0.2, 
        //         },
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'rfo-limits-polygon',
        //             opacity: 0.4,
        //         },
        //         {
        //             layer: 'unesco-sites',
        //             opacity: 0.1,
        //         },
        //     ]
        // },
    ]
};
