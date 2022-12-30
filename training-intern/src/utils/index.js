export function updateDateTime(today) {
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;

    return hour + ":" + minute + " " + dd + "/" + mm + "/" + yyyy;
}

export function updateDate(today) {
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return yyyy + "-" + mm + "-" + dd;
}

export function updateTime(today) {
    let hour = today.getHours();
    let minute = today.getMinutes();

    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;

    return hour + ":" + minute
}

export function formatAddress(place) {
    if (place.includes("Thành phố")) {
        const newPlace = place.replace("Thành phố", "");
        return newPlace;
    } else {
        const newPlace = place.replace("Tỉnh", "");
        return newPlace;
    }
}
