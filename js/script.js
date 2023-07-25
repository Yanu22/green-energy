// JavaScript Object containing the solutions
const solutions = {
  solution1: {
    title: "Harnessing Solar Power: An Affordable Green Energy Solution",
    image: "/img/solution1.png",
    text: "With advancements in solar technology, harnessing the power of the sun has become an increasingly affordable green energy solution. Solar panels convert sunlight into electricity, reducing reliance on traditional fossil fuels and lowering carbon emissions. The initial investment may seem daunting, but over time, the savings on electricity bills make solar energy a cost-effective option. Governments and organizations often offer incentives and subsidies to encourage adoption, making it even more accessible for homeowners and businesses to go green.",
  },
  solution2: {
    title: "Wind Energy: Clean and Budget-Friendly Green Power",
    image: "/img/solution2.png",
    text: "Wind energy is another promising affordable green energy solution gaining popularity worldwide. Wind turbines generate electricity by harnessing the power of the wind, a limitless and renewable resource. Large-scale wind farms can supply electricity to entire communities, while smaller turbines cater to individual homes and businesses. One of the biggest advantages is the relatively low operating cost once the infrastructure is in place. With ongoing technological improvements and financial incentives, wind energy is proving to be a sustainable and economical choice for a greener future.",
  },
  solution3: {
    title: "Empowering Communities with Biomass: An Eco-Friendly and Affordable Energy Option",
    image: "/img/solution3.png",
    text: "Biomass energy utilizes organic materials like agricultural waste, wood chips, and other renewable resources to produce electricity and heat. This green energy solution benefits communities by creating local jobs and reducing waste disposal costs. Biomass power plants can serve as a reliable energy source, especially in rural areas where access to traditional power grids may be limited. As a carbon-neutral option, biomass helps combat climate change while offering an affordable alternative to fossil fuels. By promoting sustainable practices and investing in this eco-friendly solution, communities can take significant steps towards a greener and more sustainable future.",
  },
};
function updateContent(solution) {
  document.getElementById("solution-title").textContent = solutions[solution].title;
  document.getElementById("solution-text").textContent = solutions[solution].text;
}

document.getElementById("btn-solution1").addEventListener("click", function () {
  updateContent("solution1");
  document.getElementById("btn-solution1").classList.add("active-button");
  document.getElementById("btn-solution2").classList.remove("active-button");
  document.getElementById("btn-solution3").classList.remove("active-button");
});

document.getElementById("btn-solution2").addEventListener("click", function () {
  updateContent("solution2");
  document.getElementById("btn-solution1").classList.remove("active-button");
  document.getElementById("btn-solution2").classList.add("active-button");
  document.getElementById("btn-solution3").classList.remove("active-button");
});

document.getElementById("btn-solution3").addEventListener("click", function () {
  updateContent("solution3");
  document.getElementById("btn-solution1").classList.remove("active-button");
  document.getElementById("btn-solution2").classList.remove("active-button");
  document.getElementById("btn-solution3").classList.add("active-button");
});
