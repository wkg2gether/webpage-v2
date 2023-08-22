$(document).ready(async function(){
    try{
    const response = await fetch("../json/softwares.json");
    const data = await response.json();

    let title = $(".header-title");
    let desc = $(".header-period");
    let img = $(".header-image img");

    var number = 0;
    title.text(data[number].title);
    desc.text(data[number].period);
    img.attr("src", data[number].image);

} catch (error) {
    console.error(error)
}
});