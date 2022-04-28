import PersonalPlaylistComponent from "./index";

export default {
  title: "views/Home/mains/PersonalPlaylist",
  component: PersonalPlaylistComponent,
};

export const PrimaryPersonalPlaylist = () => (
  <PersonalPlaylistComponent primary>
    Personal Playlist
  </PersonalPlaylistComponent>
);
