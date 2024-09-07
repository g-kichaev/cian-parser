export type Item = {
    id: number,
    fullName: string,
    displayName: string,
    name: string,
    namePrepositional: string,
    hasMetro: boolean,
    hasHighway: boolean,
    hasDistricts: boolean,
    hasRegionalDistricts: boolean,
    parentId: number | null,
    mainTownId: number | null,
    lat: number,
    lng: number,
    boundedBy: {
        lowerCorner: {
            lat: number,
            lng: number
        },
        upperCorner: {
            lat: number,
            lng: number
        }
    }
}