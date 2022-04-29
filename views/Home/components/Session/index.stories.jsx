import SessionComponent from "./index";

export default {
  title: "views/Home/components/Session",
  component: SessionComponent,
};

export const PrimarySession = () => (
  <SessionComponent primary>Session</SessionComponent>
);
