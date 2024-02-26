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
        markDefs: any[];
    }[];
}