import SongDescriptionComponent from ".";

export default {
  title: "views/Home/components/ImageCoverComponent",
  component: SongDescriptionComponent,
};

export const PrimaryTitleComponent = () => (
  <SongDescriptionComponent primary>
    SongDescriptionComponent
  </SongDescriptionComponent>
);
