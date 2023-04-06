export const lookupValues = {
    bloomreach: {
        name: 'Bloomreach',
        id: 'bloomreach',
        cookie: ' __exponea_etc__',
        url: '.exponea.',
        dataLayer: {
            key: 'namespace',
            value: 'exponea',
            event: 'event_name',
            properties: 'event_properties'
        }
    },
    ga: {
        name: 'Google Analytics',
        id: 'google-analytics',
        cookie: '_ga',
        url: '.google-analytics.',
        dataLayer: {
            key: 'event',
            value: true,
            event: 'event',
        }
    },
    gtm: {
        name: 'Google Tag Manager',
        id: 'google-tag-manager',
        cookie: '_gtm',
        url: 'gtm',
        dataLayer: {
            key: 'event',
            value: 'gtm.',
            event: 'event'
        }
    },
    // biano: {
    //     name: 'Biano',
    //     id: 'biano',
    //     cookie: '_biano',
    // }
}

export const personalInfo = {
    name: {
        name: 'Name',
        regex: '*name*|*first.*name*|*last.*name*|*full.*name*|*username*'
    },
    email: {
        name: 'Email',
        regex: '*email*|*mail*'
    },
    password: {
        name: 'Password',
        regex: '*password*|*psw*|*pass*'
    },
    phone: {
        name: 'Phone',
        regex: '*phone*|*mobile*'
    },
    address: {
        name: 'Address',
        regex: '*address*|*street*|*addr*'
    },
    city: {
        name: 'City',
        regex: '*city*'
    },
    zip: {
        name: 'Zip',
        regex: '*zip*|*postal*'
    },
    country: {
        name: 'Country',
        regex: '*country*|*state*|*region*'
    },
    ip: {
        name: 'IP address',
        regex: '*ip*|*ipaddress*|\d.\d.\d.\d'
    }
}

export const customerInfo = {
    shopping: {
        name: 'Shopping Information',
        regex: '*basket*|*cart*|*order*|*purchase*|*checkout*|*payment*|*transaction*|*transactionid*|*transaction.*id*|*transaction.*number*|*transaction.*no*|*transaction.*no.*|*transaction.*number.*|*transact'
    },
    basket: {
        name: 'Basket',
        regex: '*product*|*sku*'
    },
    customer: {
        name: 'Customer Information',
        regex: '*customer*'
    },
    account: {
        name: 'Account Information',
        regex: '*account*'
    }

}
export const dummyDataLayerObject = [
    {
        "0": "js",
        "1": "2023-04-05T08:09:09.596Z",
        "gtm.uniqueEventId": 1
    },
    {
        "0": "config",
        "1": "UA-20572371-1",
        "2": {
            "currency": "EUR",
            "send_page_view": false
        }
    },
    {
        "0": "config",
        "1": "G-EX5GWEMS48",
        "2": {}
    },
    {
        "user_type": "buyer"
    },
    {
        "ecomm_pagetype": "category",
        "ecomm_prodid": [
            "0000338393",
            "0000351944",
            "0000338392",
            "0000360837",
            "0000351959",
            "0000360838",
            "0000360836",
            "0000279471",
            "0000360835",
            "0000351946",
            "0000185650",
            "0000351958",
            "0000237194",
            "0000338752",
            "0000264377",
            "0000338751",
            "0000351955",
            "0000351953",
            "0000351957",
            "0000338755",
            "0000213249",
            "0000212071",
            "0000044229",
            "0000279472"
        ]
    },
    {
        "event": "view_item_list",
        "item_list_id": 245796,
        "item_list_name": "Jednolôžkové postele",
        "items": [
            {
                "item_id": "0000338393"
            },
            {
                "item_id": "0000351944"
            },
            {
                "item_id": "0000338392"
            },
            {
                "item_id": "0000360837"
            },
            {
                "item_id": "0000351959"
            },
            {
                "item_id": "0000360838"
            },
            {
                "item_id": "0000360836"
            },
            {
                "item_id": "0000279471"
            },
            {
                "item_id": "0000360835"
            },
            {
                "item_id": "0000351946"
            },
            {
                "item_id": "0000185650"
            },
            {
                "item_id": "0000351958"
            },
            {
                "item_id": "0000237194"
            },
            {
                "item_id": "0000338752"
            },
            {
                "item_id": "0000264377"
            },
            {
                "item_id": "0000338751"
            },
            {
                "item_id": "0000351955"
            },
            {
                "item_id": "0000351953"
            },
            {
                "item_id": "0000351957"
            },
            {
                "item_id": "0000338755"
            },
            {
                "item_id": "0000213249"
            },
            {
                "item_id": "0000212071"
            },
            {
                "item_id": "0000044229"
            },
            {
                "item_id": "0000279472"
            }
        ],
        "gtm.uniqueEventId": 7
    },
    {
        "0": "event",
        "1": "view_item_list",
        "2": {
            "send_to": "ga4",
            "item_list_id": 245796,
            "item_list_name": "Jednolôžkové postele",
            "items": [
                {
                    "item_id": "0000338393"
                },
                {
                    "item_id": "0000351944"
                },
                {
                    "item_id": "0000338392"
                },
                {
                    "item_id": "0000360837"
                },
                {
                    "item_id": "0000351959"
                },
                {
                    "item_id": "0000360838"
                },
                {
                    "item_id": "0000360836"
                },
                {
                    "item_id": "0000279471"
                },
                {
                    "item_id": "0000360835"
                },
                {
                    "item_id": "0000351946"
                },
                {
                    "item_id": "0000185650"
                },
                {
                    "item_id": "0000351958"
                },
                {
                    "item_id": "0000237194"
                },
                {
                    "item_id": "0000338752"
                },
                {
                    "item_id": "0000264377"
                },
                {
                    "item_id": "0000338751"
                },
                {
                    "item_id": "0000351955"
                },
                {
                    "item_id": "0000351953"
                },
                {
                    "item_id": "0000351957"
                },
                {
                    "item_id": "0000338755"
                },
                {
                    "item_id": "0000213249"
                },
                {
                    "item_id": "0000212071"
                },
                {
                    "item_id": "0000044229"
                },
                {
                    "item_id": "0000279472"
                }
            ]
        }
    },
    {
        "dynx_pagetype": "category",
        "dynx_itemid": [
            "0000338393",
            "0000351944",
            "0000338392",
            "0000360837",
            "0000351959",
            "0000360838",
            "0000360836",
            "0000279471",
            "0000360835",
            "0000351946",
            "0000185650",
            "0000351958",
            "0000237194",
            "0000338752",
            "0000264377",
            "0000338751",
            "0000351955",
            "0000351953",
            "0000351957",
            "0000338755",
            "0000213249",
            "0000212071",
            "0000044229",
            "0000279472"
        ]
    },
    {
        "namespace": "exponea",
        "event_name": "view_category",
        "event_properties": {
            "category_id": 245796,
            "category_1": "Spálňa",
            "category_2": "Postele",
            "category_3": "Jednolôžkové postele",
            "category_name": "Jednolôžkové postele",
            "categories_path": "Spálňa > Postele > Jednolôžkové postele",
            "category_listed_products": [
                "0000338393",
                "0000351944",
                "0000338392",
                "0000360837",
                "0000351959",
                "0000360838",
                "0000360836",
                "0000279471",
                "0000360835",
                "0000351946",
                "0000185650",
                "0000351958",
                "0000237194",
                "0000338752",
                "0000264377",
                "0000338751",
                "0000351955",
                "0000351953",
                "0000351957",
                "0000338755",
                "0000213249",
                "0000212071",
                "0000044229",
                "0000279472"
            ]
        }
    },
    {
        "namespace": "exponea",
        "event_name": "view_item_list",
    },
    {
        "gtm.start": 1680682149600,
        "event": "gtm.js",
        "gtm.uniqueEventId": 11
    },
    {
        "event": "gtm.dom",
        "gtm.uniqueEventId": 12
    },
    {
        "0": "js",
        "1": "2023-04-05T08:09:11.004Z"
    },
    {
        "0": "config",
        "1": "AW-962656383"
    },
    {
        "0": "event",
        "1": "page_view",
        "2": {
            "send_to": "AW-962656383",
            "user_id": "1yf92fv7i4ue0muq1tvx7z0j1qdefsq0",
            "segmentations": "None",
            "segmentations2": "None"
        }
    },
    {
        "event": "gtm.load",
        "gtm.uniqueEventId": 25
    }
]

