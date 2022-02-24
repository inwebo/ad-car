import Emissions from "../../../../src/Emissions";

const demo1 = () => {
    const emissionsClass = new Emissions();

    const emissions = document.getElementById('emissions');

    emissions.onchange = () => {
        const c = emissionsClass.getTag(emissions.value);
        console.log(c);
    };
};

export default demo1;
