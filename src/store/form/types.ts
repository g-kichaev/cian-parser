export type Form = {
    _type: string
    engine_version: FormParamSingle
    region: FormParamSingle
    // offer_type?: FormParamSingle
    object_type?: FormParamMulti
    room?: FormParamMulti
    office_type?: FormParamMulti
    heating_type?: FormParamMulti
    communication?: FormParamMulti
    area?: FormParamRange
    price?: FormParamRange
}

// Параметр с единственным значением
type FormParamSingle = {
    type: "term", 
    value: string
}
// Параметр с массивом значений
type FormParamMulti = {
    type:  "terms"
    value: string[]
}
// Параметр с диапазоном
type FormParamRange = {
    type: "range", 
    value: {
        gte?: number, 
        lte?: number,
    }
}