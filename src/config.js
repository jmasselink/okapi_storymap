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
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                // {
                //     layer: 'landuse-overlay-outline',
                //     opacity: 0,
                // },
                // {
                //     layer: 'landuse-overlay',
                //     opacity: 0,
                // },
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
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'ch0',
            alignment: 'right',
            hidden: false,
            title: '0. RFO',
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
            id: 'ch1',
            alignment: 'left',
            hidden: false,
            title: '1. Western Boundary',
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
            id: 'ch2',
            alignment: 'left',
            hidden: false,
            title: '2. Title',
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
            id: 'ch3',
            alignment: 'fully',
            hidden: false,
            title: '3. Title',
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
            id: 'ch4',
            alignment: 'right',
            hidden: false,
            title: '4. Title',
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
            onChapterExit: [
                // {
                //     layer: 'rfo-limits-polygon',
                //     opacity: 0.4,
                // },
            ]
        },
        {
            id: 'ch5',
            alignment: 'fully',
            hidden: false,
            title: '5. Mines',
            image: './path/to/image/source.png',
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
        }
    ]
};
