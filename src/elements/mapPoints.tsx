import {KeepScale} from "react-zoom-pan-pinch";

type Point = {
    id: string;
    x: number;
    y: number;
    width: number;
    height: number;
    src: string;
}

function MapPoints() {
    const mapPointsGlob = import.meta.glob("./assets/map_points/*.webp", {
        eager: true,
        import: "default",
    }) as Record<string, string>;

    const mapPointImages = Object.values(mapPointsGlob);

    const points = mapPointImages.map((item, index) => {

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

    return points
}

export default MapPoints;