const formatedDate = (date: string): string => {
    const dateFormated = new Date(date);

    const day = dateFormated.getDate();
    const mouth = dateFormated.getMonth() + 1;//porque o mes começa com zero
    const year = dateFormated.getFullYear();

    let pad = "00";
    const mouthFull = (pad + mouth).slice(-pad.length);
    const dayFull = (pad + day).slice(-pad.length);

    return `${dayFull}/${mouthFull}/${year}`;
}
export default formatedDate;