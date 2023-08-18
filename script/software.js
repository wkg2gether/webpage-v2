$(document).ready(async function(){
    try{
    const response = await fetch("../json/softwares.json");
    const data = await response.json();

    let title = $(".header-title");
    let desc = $(".header-period");
    let img = $(".header-image img");

    title.text(data[0].title);
    desc.text(data[0].period);
    img.attr("src", data[0].image);

} catch (error) {
    console.error(error)
}
});