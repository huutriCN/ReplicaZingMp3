import PlaylistComponent from "./index";

export default {
  title: "views/Home/components/Playlist",
  component: PlaylistComponent,
};

export const PrimamryPlaylist = () => (
  <PlaylistComponent primary>Playlist</PlaylistComponent>
);
