
const dateFormat = (timestamp) => {

    // convert given timstamp to right format
    const dateArr = new Date(timestamp).toLocaleDateString().split("/");
    const newDateArr = dateArr.map((date) => {
        return date < 10 ? `0${date}` : date;
    });
    const newDate = newDateArr.join("/");
    return newDate;
};

export default dateFormat;
