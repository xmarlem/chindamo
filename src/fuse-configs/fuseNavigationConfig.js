export const fuseNavigationConfig = [
    {
        'id'      : 'moduli',
        'title'   : 'Moduli',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'example-component',
                'title': 'Crediti',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/example'
            },
            {
                'id'   : 'assicurazioni',
                'title': 'Assicurazioni',
                'type' : 'collapse',
                'icon' : 'ballot',
                'children': [{
                    'id'   : 'ass-indennita-aziende',
                    'title': 'Indennita\'',
                    'type' : 'item',
                    'icon' : 'accessibility_new',
                    'url'  : '/moduli/ass-indennita-aziende'
                }
                ]

            }
        ]
    }
];
