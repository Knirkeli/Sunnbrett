// export interface velkommenPost {
//     _id: string;
//     title: string;
//     body: {
//         children: {
//             _type: string;
//             marks: string[];
//             text: string;
//             _key: string;
//         }[];
//         _type: string;
//         style: string;
//         _key: string;
//         markDefs: any[];
//     }[];
// }

export interface velkommenPost {
    _id: string;
    title: string;
    body: {
        children: {
            _type: string;
            marks: string[];
            text: string;
            _key: string;
        }[];
        _type: string;
        style: string;
        _key: string;
        markDefs: {
            _key: string;
            _type: string;
            href?: string;
        }[];
    }[];
}

export interface boardGame {
    name: string;
    slug: {
        current: string;
    };
    image: {
        asset: {
            _ref: string;
        };
        alt: string;
    };
    tag: string;
    description: string;
}

export interface HeaderData {
    title: string;
    image: {
        asset: {
            _id: string;
            url: string;
        };
        alt: string;
    };
    description: string;
}

export interface ImageField {
    name: string;
    title: string;
    type: string;
    description: string;
}

export interface Image {
    name: string;
    title: string;
    type: string;
    options: {
        hotspot: boolean;
    };
    fields: ImageField[];
}

export interface ImagesDisplay {
    name: string;
    title: string;
    type: string;
    fields: (Image | {
        name: string;
        title: string;
        type: string;
        description: string;
    })[];
}