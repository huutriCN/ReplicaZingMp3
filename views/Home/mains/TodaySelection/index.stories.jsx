import TodaySelectionComponent from "./index";

export default {
  title: "views/Home/mains/TodaySelection",
  component: TodaySelectionComponent,
};

export const PrimaryTodaySelection = () => (
  <TodaySelectionComponent primary> Today Selection </TodaySelectionComponent>
);
