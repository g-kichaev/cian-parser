export type Form = {
    deal_type: FormParamSingle
    engine_version: FormParamSingle
    region: FormParamSingle
    offer_type?: FormParamSingle
    object_type?: FormParamMulti
    room?: FormParamMultiKey
    office_type?: FormParamMulti
    heating_type?: FormParamMulti
    communication?: FormParamMultiKey
    area?: FormParamRange
    price?: FormParamRange
}

// Параметр с единственным значением. deal_type: {value: 2} => deal_type=2
type FormParamSingle = {
    type: "term", 
    value: string
}
// Параметр с массивом значений. object_type: {value: [2,3]} => object_type=2&object_type=3
type FormParamMulti = {
    type: "terms"
    value: string[]
}
// Параметр с массивом ключей. room: {value: [room0,room1]} => room0=1&room1=1
type FormParamMultiKey = {
    type: "multikey"
    value: string[]
}
type FormParamRange = {
    type: "range", 
    value: {
        from?: number, 
        to?: number,
    }
}