import HotArtistsComponent from "./index";

export default {
  title: "views/Home/mains/HotArtists",
  component: HotArtistsComponent,
};

export const PrimaryHotArtists = () => (
  <HotArtistsComponent primary> HotArtists</HotArtistsComponent>
);
