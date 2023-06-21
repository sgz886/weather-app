import City from "./components/City";
import SubSection from "../../../SubSection";

const OtherCities = () => {
  return (
    <SubSection title="Other Cities">
      <City
        name="Sydney"
        temperature={14}
        weather={{ code: "04n", name: "Clouds" }}
      />
      <City
        name="Brisbane"
        temperature={14}
        weather={{ code: "04n", name: "Clouds" }}
      />
      <City
        name="Perth"
        temperature={14}
        weather={{ code: "04n", name: "Clouds" }}
      />
    </SubSection>
  );
};
export default OtherCities;
