import TrackingComponent from "./index";

export default {
  title: "views/Home/components/Tracking",
  component: TrackingComponent,
};

export const PrimaryTracking = () => (
  <TrackingComponent primary> Trackings</TrackingComponent>
);
