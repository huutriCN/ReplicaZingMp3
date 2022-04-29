import NewSongsComponent from "./index";

export default {
  title: "views/Home/mains/NewSongs",
  component: NewSongsComponent,
};

export const PrimaryNewSongs = () => (
  <NewSongsComponent primary> NewSongs</NewSongsComponent>
);
