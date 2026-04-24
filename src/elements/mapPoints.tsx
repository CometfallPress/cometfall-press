function MapPoints() {
    const mapPointsGlob = import.meta.glob("../assets/map_points/*.webp", {
        eager: true,
        import: "default",
    }) as Record<string, string>;

    const mapPointImages = Object.values(mapPointsGlob);

    return mapPointImages.map((item, index) => {

        const split_str = item.split("/")
        const filename = split_str[split_str.length - 1]
        const coord_str = filename.split(".webp")[0].split("_")
        const x = parseFloat(coord_str[0])
        const y = parseFloat(coord_str[1])
        const width = parseFloat(coord_str[2])
        const height = parseFloat(coord_str[3])

        return {
            id: index,
            src: item,
            x: x,
            y: y,
            width: width,
            height: height,
        }
    })
}

export default MapPoints;