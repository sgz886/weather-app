import DayOfWeek from "./components/DayOfWeek";
import SubSection from "../../../SubSection";

const Forecast = () => {
  return (
    <SubSection title="Forecast">
      <div className="flex gap-4 justify-between">
        <DayOfWeek name="Mon" weather={{ code: "04n", name: "Cloud" }} temperature={18}/>
        <DayOfWeek name="Tus" weather={{ code: "04n", name: "Cloud" }} temperature={19} />
        <DayOfWeek name="Wed" weather={{ code: "04n", name: "Cloud" }} temperature={20} />
        <DayOfWeek name="Thu" weather={{ code: "04n", name: "Cloud" }} temperature={21} />
        <DayOfWeek name="Fri" weather={{ code: "04n", name: "Cloud" }} temperature={21} />
      </div>
    </SubSection>
  );
};
export default Forecast;
